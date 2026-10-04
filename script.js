const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');

// 1. Handle Adding Tasks
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = taskTitle.value.trim();
    const desc = taskDesc.value.trim();

    if (!title) return;

    // Create list item for the task
    const li = document.createElement('li');
    li.innerHTML = <strong>${title}</strong> - `${desc}`;
    
    // Add basic styling inline or rely on CSS if desired
    li.style.padding = "10px";
    li.style.marginTop = "8px";
    li.style.background = "#fafbfc";
    li.style.border = "1px solid #e1e4e8";
    li.style.borderRadius = "6px";

    taskList.appendChild(li);

    // Clear form inputs
    taskForm.reset();
});

// 2. Handle Searching Tasks
searchInput.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');

    Array.from(tasks).forEach(function (task) {
        const text = task.textContent.toLowerCase();
        if (text.includes(term)) {
            task.style.display = ''; // Show matching task
        } else {
            task.style.display = 'none'; // Hide non-matching task
        }
    });
});