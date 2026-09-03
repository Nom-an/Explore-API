document.getElementById('loadPost').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((res)=> res.json())
    .then((json)=>displayPost(json) )
})

const displayPost = (posts)=>{
    // for(let post of posts){
    //     console.log(post);
    // }

    const postContainer = document.getElementById('post-container');

    posts.forEach((post)=>{
        // console.log(post.title);

        const li = document.createElement('li');
        li.innerText=post.title;
        console.log(li);

        postContainer.appendChild(li);
    })
}