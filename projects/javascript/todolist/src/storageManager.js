export default class Storage {
  constructor() {}
  storeProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
  getProjects() {
    return localStorage.getItem("projects")
      ? JSON.parse(localStorage.getItem("projects"))
      : [];
  }
  clearStorage() {
    localStorage.removeItem("projects");
  }
}
