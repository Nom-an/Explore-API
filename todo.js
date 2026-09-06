const loadTodo = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>getTodo(data))
    
}

loadTodo();

// completed
// : 
// false
// id
// : 
// 94
// title
// : 
// "facilis modi saepe mollitia"
// userId
// : 
// 5
// [[Prototype]]
// : 
// Object

const getTodo = (todos)=>{

    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerText= "";
    todos.forEach(todo=>{
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="todo-card">
            <h2>${todo.id}</h2>
            <h3>${todo.title}</h3>
            <p>${todo.completed == true ? ` True <i class="fa-solid fa-square-check"></i> ` : `False <i class="fa-regular fa-square-check"></i>`} </p>
         </div>
        
        `
        todoContainer.append(div);
    })
}