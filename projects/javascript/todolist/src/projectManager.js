import Todo from "./todo";
import Project from "./project";
import Storage from "./storageManager";

export default class ProjectManager {
  constructor() {
    this.storage = new Storage();
    this.projects = this.loadProjects();
  }
  loadProjects() {
    const projectsFromStorage = this.storage.getProjects();
    return projectsFromStorage.map((proj) => {
      const todos = proj.todos.map((todo) => {
        return new Todo(
          todo.id,
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
          todo.notes,
          todo.check,
        );
      });
      return new Project(proj.id, proj.name, todos);
    });
  }
  saveProjects() {
    const projects = this.projects.map((proj) => {
      return proj.getObject();
    });
    this.storage.storeProjects(projects);
  }
  createProject(name) {
    const newID = crypto.randomUUID();
    const newProject = new Project(newID, name);
    this.projects.push(newProject);
    this.saveProjects();
    return newProject;
  }
  deleteProject(projectID) {
    this.projects = this.projects.filter((item) => item.id !== projectID);
    this.saveProjects();
  }
  getProjects() {
    return this.projects;
  }
  addTodo(projectID, title, description, dueDate, priority, notes, check) {
    const project = this.projects.find((item) => item.id === projectID);
    const todoID = crypto.randomUUID();
    const todo = new Todo(
      todoID,
      title,
      description,
      dueDate,
      priority,
      notes,
      check,
    );
    project.todos.push(todo);
    this.saveProjects();
    return todo;
  }
  updateTodo(projectID, todoID, updates) {
    const project = this.projects.find((item) => item.id === projectID);
    const todo = project.todos.find((item) => item.id === todoID);
    if (todo && updates && typeof updates === "object") {
      Object.assign(todo, updates);
      this.saveProjects();
    }
  }
  deleteTodo(projectID, todoID) {
    const project = this.projects.find((item) => item.id === projectID);
    project.todos = project.todos.filter((item) => item.id !== todoID);
    this.saveProjects();
  }
}
