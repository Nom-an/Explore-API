document.getElementById('btn'),addEventListener('click', function(){
    console.log('API is calling');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
    return res.json();
})
    .then((data)=>{
    return console.log(data);
})

})