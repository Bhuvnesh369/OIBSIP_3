const todoInput = document.querySelector(".todo-box input[type = text]");
const todoBtn = document.querySelector(".add-task");
const todoLi = document.querySelector(".todo-lists");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", () => {
    if(todoInput.value === ""){
        alert("Please write something!");
    }
    
    else{
    const taskValue = todoInput.value;
    const todoInputList = document.createElement("li");
    const InputListHTML = `<span class="task-name">${taskValue}</span>
    <div class="todo-btn">
        <button class="btn done">Done</button>
        <button class="btn remove">Remove</button>
    </div>`;
    todoInputList.classList.add("todo-list");
    todoInputList.innerHTML = InputListHTML;
    todoLi.append(todoInputList);
    todoInput.value = "";
    }
})

todoLi.addEventListener("click", (e) => {
    if(e.target.classList.contains("done")){
        const doneBtn = e.target.parentNode.previousElementSibling;
        doneBtn.style.textDecoration = "line-through";
        const bgList = e.target.parentNode.parentNode;
        bgList.style.backgroundColor = "#fff2";
    }

    if(e.target.classList.contains("remove")){
        const removeBtn = e.target.parentNode.parentNode;
        removeBtn.remove();
    }
})
