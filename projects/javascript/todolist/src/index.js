import "./style.css";
import { loadSidebar, loadTasks } from "./frontend";
import ProjectManager from "./projectManager";

const projectManagerGlobal = new ProjectManager();
let defaultProjectID;

if (projectManagerGlobal.getProjects().length === 0) {
  const defaultProject = projectManagerGlobal.createProject("default");
  defaultProjectID = defaultProject.id;
} else {
  defaultProjectID = projectManagerGlobal.getProjects()[0].id;
}

loadSidebar(projectManagerGlobal);
loadTasks(projectManagerGlobal, defaultProjectID);
