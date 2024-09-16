$(document).ready(function () {
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task.text, task.completed);
        });
    }

    function saveTasks() {
        const tasks = [];
        $('#task-list li').each(function() {
            const taskText = $(this).find('span').text();
            const isCompleted = $(this).hasClass('completed');
            tasks.push({ text: taskText, completed: isCompleted });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTaskToDOM(taskText, completed = false) {
        const li = $('<li></li>');
        const span = $('<span></span>').text(taskText);
        const checkIcon = $('<i class="fas fa-check"></i>');
        const trashIcon = $('<i class="fas fa-trash"></i>');

        li.append(span);
        li.append(checkIcon);
        li.append(trashIcon);

        if (completed) {
            li.addClass('completed');
        }

        $('#task-list').append(li);
    }

    $('#input').change(function() {
        const input = $(this).val();
        if (input) {
            addTaskToDOM(input);
            saveTasks(); 
            $(this).val(''); 
        }
    });

    $('#task-list').on('click', '.fa-trash', function() {
        $(this).parent('li').remove();
        saveTasks(); 
    });

    $('#task-list').on('click', '.fa-check', function() {
        $(this).parent('li').toggleClass('completed');
        saveTasks(); 
    });

    loadTasks();
});
