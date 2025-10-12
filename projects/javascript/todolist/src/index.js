import Project from "./projectManager";

let defaultProject = new Project("default");

defaultProject.addTodo("Hi", "Bye");
console.log(defaultProject);
