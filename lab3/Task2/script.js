// script.js
const input = document.querySelector('.button1');      
const addButton = document.querySelector('.button2');  
const container2 = document.querySelector('.container2'); 

function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    const block = document.createElement('div');
    block.classList.add('block');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = taskText;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = 'none';
            span.style.color = 'black';
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        container2.removeChild(block);
    });

    block.appendChild(checkbox);
    block.appendChild(span);
    block.appendChild(deleteBtn);
    container2.appendChild(block);
    input.value = '';
}

addButton.addEventListener('click', addTask);
input.addEventListener('keydown', e=> {
    if (e.key === 'Enter') addTask();
});
