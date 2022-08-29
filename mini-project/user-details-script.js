// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userDetailDiv = document.getElementsByClassName('user-details')[0];
userDetailDiv.innerHTML = `${JSON.stringify(user)}`;
let button = document.getElementsByClassName('user-posts-button')[0];
let posts = document.getElementsByClassName('posts')[0];

button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const valueElement of value) {
                let postInfo = document.createElement('div');
                postInfo.classList.add('postInfo');
                postInfo.innerText = valueElement.title;
                let postButton = document.createElement('button');
                postButton.classList.add('PostButton');
                postButton.innerText = 'Click to show posts';
                postButton.onclick = ()=> {location.href = `post-details.html?data=${JSON.stringify(valueElement)}`};
                postInfo.appendChild(postButton);
                posts.appendChild(postInfo);
            }
        })
}

