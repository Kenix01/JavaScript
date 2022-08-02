// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = prompt('Введи довiльне число');
// if (x!=0){
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 51;
// if (time > 0 && time <= 15 ){
//     console.log('1')
// }
// if (time > 15 && time <= 30 ){
//     console.log('2a')
// }
// if (time > 30 && time <= 45 ){
//     console.log('3')
// }
// if (time > 45 && time < 60 ){
//     console.log('4')
// }
// else {
//     console.log('non')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let time =21;
// if (time > 0 && time <= 10 ){
//     console.log('1')
// }
// if (time > 10 && time <= 20 ){
//     console.log('2a')
// }
// if (time > 20 && time <= 31 ){
//     console.log('3')
// }
// else {
//     console.log('non')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = prompt('Введи номер дня ')
// switch (day) {
//     case 1 :
//         console.log('monday')
//         break;
//     case 2 :
//         console.log('tuesday')
//         break;
//     case 3 :
//         console.log('wednesday')
//         break;
//     case 4 :
//         console.log('thursday')
//         break;
//     case 5 :
//         console.log('friday')
//         break;
//     case 6 :
//         console.log('saturday')
//         break;
//     case 7 :
//         console.log('sunday')
//         break;
//     default :
//         console.log('non')
// }

// Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = prompt('Enter the first number')
// let y = prompt('Enter second number')
//
// if (x>y){
//     console.log(x)
// }
// if (y>x){
//     console.log(y)
// }
// if (x===y){
//     console.log('Equal numbers')
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = NaN || 'default'
console.log(x)