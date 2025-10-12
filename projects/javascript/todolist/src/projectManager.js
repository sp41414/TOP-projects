import Todo from "./todo.js";

export default class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }
  setName(newName) {
    this.name =
      newName === undefined || newName === "" ? "placeholder" : newName;
  }
  createTodo(name, description, dueDate, priority, note) {
    let newTodoItem = new Todo(name, description, dueDate, priority, note);
    this.todoList.push(newTodoItem);
  }
  addTodo(object) {
    this.todoList.push(object);
  }
  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}
