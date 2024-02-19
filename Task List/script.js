function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();
    if (taskText === "") return;

    var li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
