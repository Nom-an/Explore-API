document.getElementById('loadPost').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((res)=>{ return res.json()})
    .then((json)=>displayPost(json));

    
})



const displayPost = (posts)=>{

const postContainer = document.getElementById('post-container');
postContainer.innerHTML = "";

    posts.forEach((post)=>{
        const postCard = document.createElement('div');
        postCard.innerHTML= `
                <div class="post-card">
         <h3>${post.title}</h3>
         <p>${post.body}</p>

        </div>
        
        
        
        
        `

        postContainer.appendChild(postCard);






    })

}
