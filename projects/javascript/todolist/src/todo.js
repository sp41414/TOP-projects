export default class Todo {
  constructor(id, title, description, dueDate, priority, notes, check) {
	  this.id = id;
    this.title = title;
    this.description = description || "";
    this.dueDate = dueDate ?
      new Date(dueDate).toISOString().split("T")[0] : "";
    this.priority = priority || "High";
    this.notes = notes || "";
    this.check = check || false;
  }
  getObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
      check: this.check,
    };
  }
}
