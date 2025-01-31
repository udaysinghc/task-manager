const API_URL = 'http://localhost:8080/api/tasks'; // Change port based on backend

let tasks = [];

async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        tasks = await response.json();
        renderTasks();
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Date.now(), text }),
            });
            const newTask = await response.json();
            tasks.push(newTask);
            taskInput.value = '';
            renderTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
}

async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map(task => `
        <li class="task-item">
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})" class="delete-button">Delete</button>
        </li>
    `).join('');
}

// Initial load
fetchTasks();