const input = document.getElementById("taskInput");

const addBtn = document.getElementById("add");

const tasksContainer = document.getElementById("tasks");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();


    if (taskText === "") {
        return;
    }
    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "✕";

    checkbox.addEventListener("change", function() {
        task.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function() {
        task.remove();
    });


    task.appendChild(checkbox);
    task.appendChild(text);
    task.appendChild(deleteButton);
    tasksContainer.appendChild(task);
    input.value = "";


}


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
