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

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.onclick = function () {
        const updatedTask = prompt("Edit your task:", taskText.textContent);

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskText.textContent = updatedTask.trim();
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
