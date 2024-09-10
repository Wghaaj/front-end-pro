const addBtn = document.getElementById('addBtn');
let userInput = document.getElementById('input');
const list = document.getElementById('list');

addBtn.addEventListener('click', addTask)

function addTask() {
   const taskText = userInput.value.trim();
   if (taskText !== '') {
      const div = document.createElement('div');
      div.classList.add('flex');

      const li = document.createElement('li');
      li.textContent = taskText;
      li.addEventListener('click', completeTask);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.classList.add('btn', 'deleteBtn');

      deleteBtn.addEventListener('click', () => {
         div.remove();
         saveTasks();  
      });

      div.appendChild(li);
      div.appendChild(deleteBtn);
      list.appendChild(div);

      userInput.value = '';

      saveTasks();  
   }
}

function completeTask(event) {
   const task = event.target;
   task.classList.toggle('completed');
   saveTasks(); 
}

function saveTasks() {
   const tasks = [];
   const items = list.getElementsByTagName('li');

   for (let i = 0; i < items.length; i++) {
      const task = {
         text: items[i].textContent,
         completed: items[i].classList.contains('completed')
      };
      tasks.push(task);
   }

   localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
   const tasks = JSON.parse(localStorage.getItem('tasks'));
   if (tasks) {
      tasks.forEach(taskData => {
         const div = document.createElement('div');
         div.classList.add('flex');

         const li = document.createElement('li');
         li.textContent = taskData.text;
         if (taskData.completed) {
            li.classList.add('completed'); 
         }
         li.addEventListener('click', completeTask);

         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'delete';
         deleteBtn.classList.add('btn', 'deleteBtn');

         deleteBtn.addEventListener('click', () => {
            div.remove();
            saveTasks();
         });

         div.appendChild(li);
         div.appendChild(deleteBtn);
         list.appendChild(div);
      });
   }
}

loadTasks();
