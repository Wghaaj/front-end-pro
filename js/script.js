const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const userInput = document.getElementById('input');

addBtn.addEventListener('click', addTask)

function addTask() {
    const taskText = userInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        if(inputCheckbox.checked) {
            span.classList.add('todo-item--checked')
        }

        inputCheckbox.addEventListener('change', () => {
            if (inputCheckbox.checked) {
                span.classList.add('todo-item--checked');
            } else {
                span.classList.remove('todo-item--checked');
            };

            saveTasks();
        });

        const span = document.createElement('span');
        span.textContent = taskText;
        span.classList.add('todo-item__description');

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('todo-item__delete')

        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(inputCheckbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        userInput.value = '';
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    const items = document.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const span = items[i].querySelector('span');
        const checkbox = items[i].querySelector('input[type="checkbox"]');

        const task = {
            text: span.textContent,
            completed: checkbox.checked
        };

        tasks.push(task);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if(tasks) {
        tasks.forEach(taskData => {
            const li = document.createElement('li');
            li.classList.add('todo-item');

            const inputCheckbox = document.createElement('input')
            inputCheckbox.type = 'checkbox'
            if (taskData.completed) {
                inputCheckbox.checked = true;
            }

        const span = document.createElement('span');
        span.textContent = taskData.text;
        span.classList.add('todo-item__description');

        if (taskData.completed) {
            span.classList.add('todo-item--checked');
        }

        inputCheckbox.addEventListener('change', () => {
            if (inputCheckbox.checked) {
                span.classList.add('todo-item--checked');
            } else {
                span.classList.remove('todo-item--checked');
            }
            saveTasks(); 
        });

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('todo-item__delete')

        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(inputCheckbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        })
    }
};

loadTasks()