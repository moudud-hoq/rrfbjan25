// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Add Task Function
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        saveTaskToLocalStorage(taskText);
        taskInput.value = '';
    }
});

// Function to Add Task
function addTask(taskText, isCompleted = false) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    if (isCompleted) {
        li.classList.add('completed');
    }

    // Mark as Completed
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateLocalStorage();
    });

    // Delete Task
    const deleteBtn = li.querySelector('button');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent li click event
        taskList.removeChild(li);
        updateLocalStorage();
    });

    taskList.appendChild(li);
}

// Save Task to Local Storage
function saveTaskToLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get Tasks from Local Storage
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

// Load Tasks from Local Storage
function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        addTask(task.text, task.completed);
    });
}

// Update Local Storage
function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').innerText,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}