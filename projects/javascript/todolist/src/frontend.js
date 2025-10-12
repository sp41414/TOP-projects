export function loadSidebar() {
  // Containers
  const sidebarContainer = document.getElementById("sidebar");
  sidebarContainer.innerHTML = "";
  sidebarContainer.id = "sidebar";

  let hideSidebarContainer = document.createElement("div");
  let sidebarTitle = document.createElement("div");
  let createProjectTaskContainer = document.createElement("div");
  let createProjectContainer = document.createElement("div");
  let createTaskContainer = document.createElement("div");
  let chooseProjectContainer = document.createElement("div");
  chooseProjectContainer.id = "choose-project";

  sidebarTitle.textContent = "Todo List";
  sidebarTitle.id = "sidebar-title";

  createProjectContainer.id = "create-project-container";
  createProjectTaskContainer.id = "create-project-task-container";
  createTaskContainer.id = "create-task-container";

  hideSidebarContainer.id = "hide-sidebar-container";

  sidebarContainer.appendChild(hideSidebarContainer);
  sidebarContainer.appendChild(sidebarTitle);
  createProjectTaskContainer.appendChild(createProjectContainer);
  sidebarContainer.appendChild(chooseProjectContainer);
  createProjectTaskContainer.appendChild(createTaskContainer);
  sidebarContainer.appendChild(createProjectTaskContainer);

  // Elements
  let hideSidebarIcon = document.createElement("div");
  hideSidebarIcon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M2,3 C2.55228,3 3,3.44772 3,4 L3,12 C3,12.5523 2.55229,13 2,13 C1.44772,13 1,12.5523 1,12 L1,4 C1,3.44772 1.44772,3 2,3 Z M7.29289,4.29289 C7.68342,3.90237 8.31658,3.90237 8.7071,4.29289 C9.09763,4.68342 9.09763,5.31658 8.7071,5.70711 L7.41421,7 L14,7 C14.5523,7 15,7.44772 15,8 C15,8.55228 14.5523,9 14,9 L7.41421,9 L8.7071,10.2929 C9.09763,10.6834 9.09763,11.3166 8.7071,11.7071 C8.31658,12.0976 7.68342,12.0976 7.29289,11.7071 L3.58578,8 L7.29289,4.29289 Z"></path> </g></svg>`;
  hideSidebarIcon.id = "hide-sidebar-icon";
  hideSidebarIcon.addEventListener("click", () => {
    hideSidebar();
  });

  let addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project";
  addProjectButton.textContent = "Add Project";
  let addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task";
  addTaskButton.textContent = "Add Task";
  let chooseProject = document.createElement("select");
  chooseProject.id = "choose-project-dropdown";

  createProjectContainer.appendChild(addProjectButton);
  createTaskContainer.appendChild(addTaskButton);
  hideSidebarContainer.appendChild(hideSidebarIcon);
  chooseProjectContainer.appendChild(chooseProject);
}

export function hideSidebar() {
  const sidebarContainer = document.getElementById("sidebar");
  sidebarContainer.innerHTML = "";
  sidebarContainer.id = "sidebar-container-hidden";
  let hideSidebarContainer = document.createElement("div");
  let hideSidebarIcon = document.createElement("div");
  hideSidebarContainer.appendChild(hideSidebarIcon);
  hideSidebarIcon.innerHTML = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M14,3 C14.5523,3 15,3.44772 15,4 L15,12 C15,12.5523 14.5523,13 14,13 C13.4477,13 13,12.5523 13,12 L13,4 C13,3.44772 13.4477,3 14,3 Z M8.70711,4.29289 L12.4142,8 L8.70711,11.7071 C8.31658,12.0976 7.68342,12.0976 7.2929,11.7071 C6.90237,11.3166 6.90237,10.6834 7.2929,10.2929 L8.58579,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L8.58579,7 L7.29289,5.70711 C6.90237,5.31658 6.90237,4.68342 7.29289,4.29289 C7.68342,3.90237 8.31658,3.90237 8.70711,4.29289 Z"></path> </g></svg>`;
  hideSidebarIcon.id = "hide-sidebar-icon";
  hideSidebarContainer.id = "hide-sidebar-container";
  sidebarContainer.appendChild(hideSidebarContainer);
  hideSidebarIcon.addEventListener("click", () => {
    // so that the loadSidebar can find the sidebar container
    sidebarContainer.id = "sidebar";
    loadSidebar();
  });
}

export function loadTasks() {
  const contentContainer = document.getElementById("content");
  let todoContainer = document.createElement("div");
  todoContainer.id = "todo-list";
  contentContainer.appendChild(todoContainer);
}
