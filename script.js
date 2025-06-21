document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.querySelectorAll('.task');
  const columns = document.querySelectorAll('.task-column');

  tasks.forEach(task => {
    task.addEventListener('dragstart', () => task.classList.add('dragging'));
    task.addEventListener('dragend', () => task.classList.remove('dragging'));
  });

  columns.forEach(column => {
    column.addEventListener('dragover', e => {
      e.preventDefault();
      const dragging = document.querySelector('.dragging');
      if (dragging && column !== dragging.parentElement) {
        column.appendChild(dragging);
      }
    });
  });
});
