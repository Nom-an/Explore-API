const loadComments = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
    .then(res=>res.json())
    .then(data=>comments(data))
}

loadComments();

const comments = (comment)=>{

    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerText= "";

    comment.forEach((comment)=>{
        console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `      <div class="comments-card">
            <div>
                <h3>${comment.id}</h3>
                <h2>${comment.name}</h2>
                <h3>${comment.email}</h3>
            </div>
            -------------->
          <div>
            <p>${comment.body}</p>
          </div>

        </div>`
        commentsContainer.append(div);



    })
}