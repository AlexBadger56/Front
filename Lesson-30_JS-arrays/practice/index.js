const addTodoForm = document.querySelector('form');
const [todoInput, addTodoBtn] = addTodoForm.elements;

const todoList = document.querySelector('#todo-list');
const todos = [];

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput.value) {
        addTodo(todoInput.value);
        todoInput.value = '';
        renderTodoList();
    }

});

function addTodo(task) {
    todos.push({ task: task, completed: false });
    // console.log(todos);
}

function renderTodoList() {
    for (let todo of todos) {
        const li = document.createElement('li');
        li.textContent = `${todo.task} Completed: ${todo.completed}`;
        todoList.appendChild(li);
    }
}





