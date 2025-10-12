import Todo from "./todo.js";

export default class Project {
  constructor(name) {
    this.name = name || "placeholder";
    this.todoList = [];
    localStorage.setItem(`project-${this.name}`, JSON.stringify(this.name));
  }
  setName(newName) {
    const oldName = this.name;
    this.name =
      newName === undefined || newName === "" ? "placeholder" : newName;
    localStorage.removeItem(`project-${oldName}`);
    localStorage.removeItem(`todo-list-${oldName}`);
    localStorage.setItem(`project-${this.name}`, this.name);
    localStorage.setItem(
      `todo-list-${this.name}`,
      JSON.stringify(this.todoList),
    );
  }
  createTodo(name, description, dueDate, priority, note) {
    let newTodoItem = new Todo(name, description, dueDate, priority, note);
    this.todoList.push(newTodoItem);
    localStorage.setItem(
      `todo-list-${this.name}`,
      JSON.stringify(this.todoList),
    );
  }
  addTodo(object) {
    this.todoList.push(object);
    localStorage.setItem(
      `todo-list-${this.name}`,
      JSON.stringify(this.todoList),
    );
  }
  deleteTodo(index) {
    this.todoList.splice(index, 1);
    localStorage.setItem(
      `todo-list-${this.name}`,
      JSON.stringify(this.todoList),
    );
  }
  loadTodos() {
    const storedTodos = localStorage.getItem(`todo-list-${this.name}`);
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      this.todoList = parsedTodos.map(
        (todo) =>
          new Todo(
            todo.name,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.note,
          ),
      );
    }
  }
}
