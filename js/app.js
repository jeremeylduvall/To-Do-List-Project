// When Add button is pressed

var newTaskField = document.getElementById("new-task")
var addButton = document.getElementById("add");
var listItem = document.getElementsByTagName("li");
var newTask;
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");



function buildTask (a) {
	
	// Create list item

	var taskItem = document.createElement("li");

	// Create checkbox

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	// Create label

	var label = document.createElement("label");
	label.innerText = a;

	// Create checkbox

	var textField = document.createElement("input");
	textField.type = "text";

	
	// Create Edit button

	var editButton = document.createElement("button");
	editButton.classList.add("edit");
	editButton.innerText = "Edit";

	// Create Delete button

	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerText = "Delete";

	// Append everything

	taskItem.appendChild(checkbox);
	taskItem.appendChild(label);
	taskItem.appendChild(textField);
	taskItem.appendChild(editButton);
	taskItem.appendChild(deleteButton);
	

	return taskItem;
};

// addButton.onclick = function () {
// 	var newTask = newTaskField.value;

// 	if (newTaskField.value === "") {
// 		alert("You have to enter a task!");
// 	} else {
// 		// Add item to ToDo
// 		incompleteTaskHolder.appendChild(buildTask(newTask));

// 		// Clear Add Item field
// 		newTaskField.value = "";
// 	};
// };

addButton.onclick = function () {
	var newTask = newTaskField.value;

	if (newTaskField.value === "") {
		alert("You have to enter a task!");
	} else {
		// Add item to ToDo
		incompleteTaskHolder.appendChild(buildTask(newTask));

		// Clear Add Item field
		newTaskField.value = "";
	};
	
	bindEvents();
};


// Fix Edit button

function editTask() {
	editedTask = this.parentNode;


	if (editedTask.className === "editMode") {
		editedTask.classList.remove("editMode");
	} else {
		editedTask.classList.add("editMode");
		this.innerText = "Save";
	}
};

// Fix Delete button

function deleteTask() {
	deletedTask = this.parentNode;

	if (deletedTask.parentNode === incompleteTaskHolder) {
		incompleteTaskHolder.removeChild(deletedTask);
	} else if (deletedTask.parentNode === completedTasksHolder) {
		completedTasksHolder.removeChild(deletedTask);
	}
};

// Fix checkbox

function checkTask() {
	
	checkedTask = this.parentNode;

	if (this.checked) {
		// Item is added to Completed list
		// Item is crossed off
		incompleteTaskHolder.removeChild(checkedTask);
		completedTasksHolder.appendChild(checkedTask);
	} else {
		// Item is not crossed off
		// Item is added to TODO
		completedTasksHolder.removeChild(checkedTask);
		incompleteTaskHolder.appendChild(checkedTask);
	}
};

// Loop over list items and bind events to click

function bindEvents () {

	for (var i = 0; i < listItem.length; i++ ) {

		var editButton = listItem[i].childNodes[3];
		var deleteButton = listItem[i].childNodes[4];
		var checkbox = listItem[i].firstChild;

		editButton.addEventListener("click", editTask);
		deleteButton.addEventListener("click", deleteTask);
		checkbox.addEventListener("click", checkTask);
	}
};

// Call binding event

bindEvents();

































