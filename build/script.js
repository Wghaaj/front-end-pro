"use strict";

$(document).ready(function () {
  function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (task) {
      addTaskToDOM(task.text, task.completed);
    });
  }
  function saveTasks() {
    var tasks = [];
    $('#task-list li').each(function () {
      var taskText = $(this).find('span').text();
      var isCompleted = $(this).hasClass('completed');
      tasks.push({
        text: taskText,
        completed: isCompleted
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function addTaskToDOM(taskText) {
    var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var li = $('<li></li>');
    var span = $('<span></span>').text(taskText);
    var checkIcon = $('<i class="fas fa-check"></i>');
    var trashIcon = $('<i class="fas fa-trash"></i>');
    li.append(span);
    li.append(checkIcon);
    li.append(trashIcon);
    if (completed) {
      li.addClass('completed');
    }
    $('#task-list').append(li);
  }
  $('#input').change(function () {
    var input = $(this).val();
    if (input) {
      addTaskToDOM(input);
      saveTasks();
      $(this).val('');
    }
  });
  $('#task-list').on('click', '.fa-trash', function () {
    $(this).closest('li').remove();
    saveTasks();
  });
  $('#task-list').on('click', '.fa-check', function () {
    $(this).parent('li').toggleClass('completed');
    saveTasks();
  });
  loadTasks();
  $('#addTaskBtn').on('click', function () {
    $(this).hide();
  });
  $('#closeBtn').on('click', function () {
    $('#addTaskBtn').show();
  });
});