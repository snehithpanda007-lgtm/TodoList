const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        listItem.classList.add('listItem');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';

        // Delete task
        deleteButton.addEventListener('click', function (event) {
            taskList.removeChild(listItem);
        });

        // Mark task as completed
        listItem.addEventListener('click', function () {
            taskSpan.classList.toggle('completed');
        });
    }
}