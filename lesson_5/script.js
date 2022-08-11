// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const foo = (x,y) => x*y;
//
// console.log(foo(10, 12));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let pi = 3.14;
// const foo = (r) => pi*(r*2);
//
// console.log(foo(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2pir(h+r)

// let pi = 3.14;
// const foo = (r,h) => 2*pi*r*(h+r);
//
// console.log(foo(10,15));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [10,20,3,4,6,7];
// const foo = (array) => {
//     for (let arrElement of array){
//         console.log(arrElement);
//     }
// }
// foo(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(txt) {
//     document.write(`<div>${txt}</div>`)
// }
// foo('Ivan')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(txt) {
//     document.write(`<ul>`)
//         document.write(`<li>${txt}</li>`)
//         document.write(`<li>${txt}</li>`)
//         document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
//
// foo('Ivan')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(txt, x) {
//     document.write(`<ul>`)
//         for (let i = 0; i < x;i++){
//             document.write(`<li>${txt}</li>`)
//         }
//     document.write(`</ul>`)
// }
//
// foo('Ivan',8)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [15,'Ivan',true];
//
// function foo(array){
//         document.write(`<ul>`)
//         for (const arrElement of array){
//             document.write(`<li>${arrElement}</li>`)
//         }
//     document.write(`</ul>`)
// }
// foo(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 1,
//         name: 'Ivan',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Pavlo',
//         age: 17
//     },
//     {
//         id: 3,
//         name: 'Yarina',
//         age: 11
//     }
// ]
//
// function foo(array) {
//     for (const arrElement of array){
//             document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//         }
// }
// foo(arr)


// - створити функцію яка повертає найменьше число з масиву

// let arr = [1,24,64,0,-13];
//
// function foo(array){
//     let min =[0];
//     for (const arrElement of array){
//         if (arrElement < min){
//             min = arrElement
//         }
//     }
//     return min;
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [1,24,64,0,-13];

function foo(array){
    let min =0;
    for (const arrElement of array){
        min += arrElement
    }
    return min;
}

console.log(foo(arr));