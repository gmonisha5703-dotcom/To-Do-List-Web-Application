function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Complete Button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.onclick = function () {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
    };

    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.onclick = function () {
        const updatedTask = prompt("Edit your task:", taskText.textContent);

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskText.textContent = updatedTask.trim();
        }
    };

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
  
