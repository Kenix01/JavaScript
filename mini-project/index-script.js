// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

let wrapper = document.getElementsByClassName('wrapper')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');
            userBlock.innerText =`
            ID: ${user.id}
            Name: ${user.name}`;
            let userButton = document.createElement('button');
            userButton.classList.add('userButton');
            userButton.innerText = 'Click to show User Details';
            userButton.onclick = () => {location.href=`user-details.html?data=${JSON.stringify(user)}`}
            userBlock.appendChild(userButton);
            wrapper.appendChild(userBlock);
        }
    })