const todoList = document.querySelector('.todoList');
const todoValue = document.querySelector('.todoValue');
let todoListArray = [];

const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todoList")) || [];
}


function addToLocalStorage(todo){
   return localStorage.setItem("todoList",JSON.stringify(todo));
}

const showTodoList = () => {
    todoListArray = getFromLocalStorage("todoList");
    todoListArray.forEach(element => {
        const liElement = document.createElement("li");
        liElement.innerHTML = element;
        todoList.append(liElement);
    });
}

showTodoList();

const deleteTodo = (e) => {
   let todoToDelete = e.target;
   console.log(todoToDelete.textContent) 
    
   console.log(todoListArray)

    updatedTodoList = todoListArray.filter((element) => {
       return element != todoToDelete.textContent;
    })

    // console.log(updatedTodoList);

    addToLocalStorage(updatedTodoList);

    todoToDelete.remove();
    

}


function addTodo(e){
    e.preventDefault();
    // console.log("hello javascript");
    todoListArray = getFromLocalStorage();

    let newTodo = todoValue.value.trim();

    todoValue.value = "";

    if(newTodo.length!==0 && !todoListArray.includes(newTodo)){
        todoListArray.push(newTodo);
    addToLocalStorage(todoListArray);

    const liElement = document.createElement("li");
    liElement.innerHTML = newTodo;
    todoList.append(liElement);
    }

}

 
 todoList.addEventListener('click',(e) => {
   deleteTodo(e);
 })

document.querySelector('.btn').addEventListener('click',(e) => {
  addTodo(e);
})

