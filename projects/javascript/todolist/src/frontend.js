let projectManagerGlobal;

export function loadSidebar(projectManager) {
	projectManagerGlobal = projectManager || {};
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

  let deleteProjectButton = document.createElement("button");
  deleteProjectButton.id = "delete-project";
  deleteProjectButton.textContent = "Delete Project";
  deleteProjectButton.addEventListener("click", () => {
	  const selectedProjectID = chooseProject.value;
	  if (selectedProjectID) {
		  projectManagerGlobal.deleteProject(selectedProjectID);
		  renderProjectsDropdown();
		  document.getElementById("todo-list").innerHTML = "";
	  }
  })
	createProjectContainer.appendChild(deleteProjectButton);

  createProjectPopup();
  createTaskPopup();
  addProjectButton.addEventListener("click", () => {
	  showPopup("project-popup");
  })
	addTaskButton.addEventListener("click", () => {
		const selectedProjectID = chooseProject.value;
		if (!selectedProjectID) {
			alert("Select a project first");
			return;
		}
		showPopup("task-popup");
	})
	chooseProject.addEventListener("change", () => {
		renderTasks(chooseProject.value);
	})
	renderProjectsDropdown();
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

export function loadTasks(projectManager, projectID) {
	projectManagerGlobal =  projectManager;
	renderTasks(projectID);
}

function showPopup(ID) {
	const popup = document.getElementById(ID);
	popup.style.display = "flex";
}
function hidePopup(ID) {
	const popup = document.getElementById(ID);
	popup.style.display = "none";
}

function createProjectPopup() {
	const popup = document.createElement("div");
	popup.id = "project-popup";
	popup.className = "popup-overlay";
	let popupContent = document.createElement("div");
	popupContent.className = "popup-content";
	let popupHeader = document.createElement("div");
	popupHeader.textContent = "Add Project";
	popupHeader.className = "popup-header";
	let popupForm = document.createElement("form");
	popupForm.id = "project-form";
	let popupFormLabel = document.createElement("label");
	let popupFormInput = document.createElement("input");
	popupFormInput.type = "text";
	popupFormInput.id = "project-name";
	popupFormInput.required = true;
	let popupButtons = document.createElement("div");
	popupButtons.className = "popup-buttons";
	let submitButton = document.createElement("button");
	submitButton.id = "submit-project";
	submitButton.textContent = "Add Project";
	let cancelButton = document.createElement("button");
	cancelButton.id = "cancel-project";
	cancelButton.textContent = "Cancel";

	document.body.appendChild(popup);
	popup.appendChild(popupContent);
	popupContent.appendChild(popupHeader);
	popupContent.appendChild(popupForm);
	popupForm.appendChild(popupFormLabel);
	popupFormLabel.appendChild(popupFormInput);
	popupForm.appendChild(popupButtons);
	popupButtons.appendChild(submitButton);
	popupButtons.appendChild(cancelButton);
	// I forgot about .innerHTML but now I don't feel like rewriting all this ^

	// form submit
	submitButton.addEventListener("click", () => {
		const answer = popupFormInput.value.trim();
		if (!popupForm.checkValidity()) {
			popupForm.reportValidity();
			return;
		}
		projectManagerGlobal.createProject(answer);
		renderProjectsDropdown();
		renderTasks();
		hidePopup("project-popup");
		document.getElementById("project-name").value = '';
	})
	cancelButton.addEventListener("click", () => {
		hidePopup("project-popup");
		document.getElementById("project-name").value = '';
	})
}

function createTaskPopup() {
	const popup = document.createElement("div");
	popup.id = "task-popup";
	popup.className = "popup-overlay";
	popup.innerHTML = `
		<div class="popup-content">
			<div class="popup-header">Add Task</div>
			<form id="task-form">
				<input type="hidden" id="task-project-id">
				<label>Title: <input type="text" id="task-title" required></label>
				<label>Description: <textarea id="task-description"></textarea></label>
				<label>Due Date: <input type="date" id="task-dueDate"></label>
				<label>Priority: <select id="task-priority"><option value="High">High</option> <option value="Medium">Medium</option> <option value="Low">Low</option></select></label>
				<label>Notes: <textarea id="task-notes"></textarea></label>
				<div class="popup-buttons">
					<button type="button" id="submit-task">Add</button>
					<button type="button" id="cancel-task">Cancel</button>
				</div>
			</form>
		</div>
	`;
	document.body.appendChild(popup);
	popup.querySelector("#submit-task").addEventListener("click", () => {
		const projectID = document.getElementById("choose-project-dropdown").value;
		if (!projectID) {
			alert("Select a project first!");
			return;
		}
		if (!document.querySelector("#task-form").checkValidity()) {
			document.querySelector("#task-form").reportValidity();
			return;
		}
		const title = document.getElementById('task-title').value.trim();
		const description = document.getElementById('task-description').value;
		const dueDate = document.getElementById('task-dueDate').value;
		const priority = document.getElementById('task-priority').value;
		const notes = document.getElementById('task-notes').value;
		projectManagerGlobal.addTodo(projectID, title, description, dueDate, priority, notes, false);
		renderTasks(projectID);
		hidePopup('task-popup');
		popup.querySelector('#task-form').reset();
	})
	popup.querySelector("#cancel-task").addEventListener("click", () => {
		hidePopup("task-popup");
	})
}

function renderProjectsDropdown() {
	const chooseProject = document.getElementById("choose-project-dropdown");
	chooseProject.innerHTML = `<option value="">Select Project</option>`;
	projectManagerGlobal.getProjects().forEach(proj => {
		const option = document.createElement("option");
		option.value = proj.id;
		option.textContent = proj.name;
		chooseProject.appendChild(option);
	})
}

export function renderTasks(projectID) {
	const todoContainer = document.getElementById("todo-list");
	todoContainer.innerHTML = "";
	const project = projectManagerGlobal.getProjects().find((item) => item.id === projectID);
	project.todos.forEach(todo => {
		const card = document.createElement("div");
		card.className = "todo-card";
		const renderViewMode = () => {
			card.innerHTML = `
			<div class="todo-title">${todo.title}</div>
			<p>${todo.description}</p>
			<p>Due: ${todo.dueDate}</p>
			<p>Priority: ${todo.priority}</p>
			<p>Notes: ${todo.notes}</p>
			<input type="checkbox" ${todo.check ? 'checked' : ''} class="todo-check">
			<button class="edit-todo">Edit</button>
			<button class="delete-todo">Delete</button>
		`;
			card.querySelector(".todo-check").addEventListener("change", (e) => {
				projectManagerGlobal.updateTodo(projectID, todo.id, {check: e.target.checked});
			})
			card.querySelector(".edit-todo").addEventListener("click", () => {
				renderEditMode();
			})
			card.querySelector(".delete-todo").addEventListener("click", () => {
				projectManagerGlobal.deleteTodo(projectID, todo.id);
				renderTasks(projectID);
			})
		}
		const renderEditMode = () => {
			card.innerHTML = `
				<input type="text" value="${todo.title}" class="edit-title" required>
				<textarea class="edit-description">${todo.description}</textarea>
				<input type="date" value="${todo.dueDate}" class="edit-due-date">
				<select class="edit-priority">
				  <option value="High" ${todo.priority === 'High' ? 'selected' : ''}>High</option>
				  <option value="Medium" ${todo.priority === 'Medium' ? 'selected' : ''}>Medium</option>
				  <option value="Low" ${todo.priority === 'Low' ? 'selected' : ''}>Low</option>
				</select>
				<textarea class="edit-notes">${todo.notes}</textarea>
				<input type="checkbox" ${todo.check ? 'checked' : ''} class="todo-check">
				<button class="save-todo">Save</button>
				<button class="cancel-edit">Cancel</button>
			`
			card.querySelector(".save-todo").addEventListener("click", () => {
				if (!card.checkValidity()) {
					card.reportValidity();
					return;
				}
				const updates = {
					title: card.querySelector(".edit-title").value.trim(),
					description: card.querySelector(".edit-description").value,
					dueDate: card.querySelector(".edit-due-date").value,
					priority: card.querySelector(".edit-priority").value,
					notes: card.querySelector(".edit-notes").value,
					check: card.querySelector(".todo-check").checked,
				};
				projectManagerGlobal.updateTodo(projectID, todo.id, updates);
				renderTasks(projectID);
			});
			card.querySelector(".cancel-edit").addEventListener("click", () => {
				renderTasks(projectID);
			});
		}
		renderViewMode();
		todoContainer.appendChild(card);
	})
}
