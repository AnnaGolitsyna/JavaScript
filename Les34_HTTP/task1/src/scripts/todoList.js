import { createNewTask } from './createTask.js';
import { changeClassDone, deletedTask } from './updateTask.js';

export const initTodoHandlers = () => {
    const btnElem = document.querySelector('.create-task-btn');
    btnElem.addEventListener('click', createNewTask);

    const listElem = document.querySelector('.list');
    listElem.addEventListener('click', deletedTask);
};

// onListClick => changeClassDone OR deleteTask