document.getElementById('btn'),addEventListener('click', function(){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>{
 return   res.json();
})
.then((data)=>{
   return console.log(data);
})

})