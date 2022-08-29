// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let postDiv = document.getElementsByClassName('post')[0];
postDiv.innerHTML = `${JSON.stringify(post)}`;

let comments = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('commentBlock');
            commentBlock.innerText = valueElement.body;
            comments.appendChild(commentBlock);
        }
    })


