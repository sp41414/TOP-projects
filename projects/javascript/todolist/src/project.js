export default class Project {
  constructor(id, name, todos) {
    this.id = id;
    this.name = name || "placeholder";
    this.todos = todos || [];
  }
  getObject() {
    return {
      id: this.id,
      name: this.name,
      todos: this.todos.map((item) => item.getObject()),
    };
  }
}
