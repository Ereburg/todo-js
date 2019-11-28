/*jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const addTaskButton = document.querySelector('.button--add'),
    list = document.querySelector('.list');
  let input = document.querySelector('.app__input');

  class listItem {
    constructor(itemName) {
      this.createDiv(itemName);
    }
    createDiv(itemName) {
      let input = document.createElement('input');
      input.value = itemName;
      input.disabled = true;
      input.classList.add('list__input');
      input.type = 'text';
      input.name = 'todo-item';

      let itemBox = document.createElement('li');
      itemBox.classList.add('list__item');

      let editTaskButton = document.createElement('button');
      editTaskButton.classList.add(`list__button`);
      editTaskButton.classList.add(`button--edit`);
      editTaskButton.textContent = 'EDIT';

      let removeTaskButton = document.createElement('button');
      removeTaskButton.classList.add(`list__button`);
      removeTaskButton.classList.add(`button--remove`);
      removeTaskButton.textContent = 'REMOVE';

      list.appendChild(itemBox);

      itemBox.appendChild(input);
      itemBox.appendChild(editTaskButton);
      itemBox.appendChild(removeTaskButton);

      editTaskButton.addEventListener('click', () => this.edit(input));

      removeTaskButton.addEventListener('click', () => this.remove(itemBox));
    }
    edit(input) {
      input.disabled = !input.disabled;
    }

    remove(item) {
      list.removeChild(item);
    }
  }

  function check() {
    if (input.value != '') {
      new listItem(input.value);
      input.value = '';
    }

  }

  addTaskButton.addEventListener('click', check);

  window.addEventListener('keydown', e => {
    if(e.which == 13) {
      check();
    }
  });

});