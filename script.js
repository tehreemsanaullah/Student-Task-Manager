const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const taskCountSpan = document.getElementById('task-count');
const clearBtn = document.getElementById('clear-btn');

// Helper function to update the total task count
function updateTaskCount() {
    const totalTasks = taskList.getElementsByTagName('li').length;
    taskCountSpan.textContent = totalTasks;
}

// 1. Handle Adding Tasks
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = taskTitle.value.trim();
    const desc = taskDesc.value.trim();

    if (!title) return;

    const li = document.createElement('li');
    
    const strong = document.createElement('strong');
    strong.textContent = title;
    li.appendChild(strong);
    
    if (desc) {
        const textNode = document.createTextNode(` - ${desc}`);
        li.appendChild(textNode);
    }
    
    // Inline card styling for task items
    li.style.padding = "10px";
    li.style.marginTop = "8px";
    li.style.background = "#fafbfc";
    li.style.border = "1px solid #e1e4e8";
    li.style.borderRadius = "6px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    // Create individual delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.color = '#e74c3c';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.fontWeight = 'bold';
    deleteBtn.style.fontSize = '16px';
    deleteBtn.style.padding = '0 5px';

    deleteBtn.addEventListener('click', function () {
        li.remove();
        updateTaskCount();
        if (taskList.children.length === 0) {
            clearBtn.style.display = 'none';
        }
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Update count and show clear button
    updateTaskCount();
    clearBtn.style.display = 'block';

    // Clear form inputs
    taskForm.reset();
});

// 2. Handle Searching Tasks Dynamically
searchInput.addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');

    Array.from(tasks).forEach(function (task) {
        const text = task.textContent.toLowerCase();
        if (text.includes(term)) {
            task.style.display = 'flex'; // Show matching task
        } else {
            task.style.display = 'none'; // Hide non-matching task
        }
    });
});

// 3. Handle Clear All Tasks Functionality
clearBtn.addEventListener('click', function () {
    taskList.innerHTML = '';
    clearBtn.style.display = 'none';
    updateTaskCount();
});
