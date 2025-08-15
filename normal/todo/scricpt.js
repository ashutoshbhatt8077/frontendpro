const addTaskButton = document.getElementById("addTaskButton");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", loadTasks);

addTaskButton.addEventListener("click", function () {
    const taskName = prompt("Enter your task:");

    if (taskName && taskName.trim() !== "") {
        createTask(taskName, pendingTasks);
        saveTasks();
    }
});

function createTask(name, list) {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = name;
    taskText.style.marginRight = "10px";
    li.appendChild(taskText);

    if (list.id !== "completedTasks") {
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";
        completeBtn.style.marginRight = "5px";
        completeBtn.addEventListener("click", function () {
            li.remove();
            createTask(name, completedTasks);
            saveTasks();
        });
        li.appendChild(completeBtn);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });
    li.appendChild(deleteBtn);

    list.appendChild(li);
}

// Save the current state to localStorage
function saveTasks() {
    const pending = Array.from(pendingTasks.querySelectorAll("li span")).map(span => span.textContent);
    const completed = Array.from(completedTasks.querySelectorAll("li span")).map(span => span.textContent);

    localStorage.setItem("tasks", JSON.stringify({ pending, completed }));
}

// Load tasks from localStorage
function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (!stored) return;

    const { pending, completed } = JSON.parse(stored);

    pending.forEach(task => createTask(task, pendingTasks));
    completed.forEach(task => createTask(task, completedTasks));
}
