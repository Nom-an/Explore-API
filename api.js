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

// document.getElementById('loadPost').addEventListener('click', function(){

//     const url = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(url)
//     .then((r)=>{
//         return r.json();
//     })
//     .then((d)=>{
//         return console.log(d);
//     })
    
    
// })

document.getElementById('loadPost').addEventListener('click', function(){
    const url ='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
})