export default class Todo {
  constructor(title, description, dueDate, priority, note) {
    this.title = String(title);
    this.description = String(description);

    this.priority = priority === undefined ? "High" : String(priority);

    this.note = note === undefined ? "" : String(note);
    this.dueDate = new Date(dueDate);
    this.check = false;
  }

  // Reassigning functions

  toggleCheck() {
    this.check = this.check === false ? true : false;
  }

  setTitle(newTitle) {
    this.title = newTitle === undefined || newTitle === "" ? "" : newTitle;
  }

  setDescription(newDescription) {
    this.description =
      newDescription === undefined || newDescription === ""
        ? ""
        : newDescription;
  }

  setPriority(newPriority) {
    this.priority =
      newPriority === undefined || newPriority === "" ? "High" : newPriority;
  }

  setDueDate(newDate) {
    this.dueDate =
      newDate === undefined || newDate === "" ? new Date() : new Date(newDate);
  }

  setNote(newNote) {
    this.note = newNote === undefined ? "" : newNote;
  }
}
