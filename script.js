"use strict"

var todoInput = document.querySelector('#todo-input');
var addBtn = document.querySelector('#add');
var todoContent = document.querySelector('#todo-content');


const validator = () =>{
    var errorBox =  document.querySelector('#error-box')
    if (todoInput.value.length < 1){
       errorBox.innerText = "This field is required!";
       return false;
    };
    errorBox.innerText = "";
    return true;
}

const addtodo = () =>{
    todoContent.innerHTML += `<div class='alert alert-success todo-item' >${todoInput.value}</div>`
}



addBtn.addEventListener('click', function(){
    if (!validator()) return false;

    addtodo();

    todoInput.value = "";
})

window.ondblclick = e => {
    if (e.target.classList.contains('todo-item')) {
        e.target.remove();
    };
}

