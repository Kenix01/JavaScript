// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// function Users(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [];
// let u1 = new Users(1,'Ivan','Ivan','gmail.com',3809000000);
// let u2 = new Users(2,'Ivan','Ivan','gmail.com',3809000000);
// let u3 = new Users(3,'Ivan','Ivan','gmail.com',3809000000);
// let u4 = new Users(4,'Ivan','Ivan','gmail.com',3809000000);
// let u5 = new Users(5,'Ivan','Ivan','gmail.com',3809000000);
// let u6 = new Users(6,'Ivan','Ivan','gmail.com',3809000000);
// let u7 = new Users(7,'Ivan','Ivan','gmail.com',3809000000);
// let u8 = new Users(8,'Ivan','Ivan','gmail.com',3809000000);
// let u9 = new Users(9,'Ivan','Ivan','gmail.com',3809000000);
// let u10 = new Users(10,'Ivan','Ivan','gmail.com',3809000000);

// array.push(u1,u2,u3,u4,u5,u6,u7,u8,u9,u10);
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// let sort = array.sort((a,b) => a.id - b.id)
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//     class Users {
//         constructor(id, name, surname , email, phone, order) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order
//         }
//     }
//
// let array = [];
// let u1 = new Users(1,'Ivan','Ivan','gmail.com',3809000000,[41,5,5]);
// let u2 = new Users(2,'Ivan','Ivan','gmail.com',3809000000,[1,7,4,1]);
// let u3 = new Users(3,'Ivan','Ivan','gmail.com',3809000000,[11,42,52]);
// let u4 = new Users(4,'Ivan','Ivan','gmail.com',3809000000,[2,45,89,11]);
// let u5 = new Users(5,'Ivan','Ivan','gmail.com',3809000000,[23]);
// let u6 = new Users(6,'Ivan','Ivan','gmail.com',3809000000,[11]);
// let u7 = new Users(7,'Ivan','Ivan','gmail.com',3809000000,[78]);
// let u8 = new Users(8,'Ivan','Ivan','gmail.com',3809000000,[1,11,111]);
// let u9 = new Users(9,'Ivan','Ivan','gmail.com',3809000000,[123,321]);
// let u10 = new Users(10,'Ivan','Ivan','gmail.com',3809000000,[0,1,3,4]);

// array.push(u1,u2,u3,u4,u5,u6,u7,u8,u9,u10);
// console.log(array);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = array.sort((a,b) => a.order.length - b.order.length)
// console.log(sort);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         for (const i in this){
//             if(typeof this [i] !== 'function'){
//                 console.log(`${i} -- ${this[i]}`);
//             }
//         }
//     }

    // this.increaseMaxSpeed = function (newSpeed){
    //     this.maxSpeed += newSpeed
    // }

    // this.changeYear = function (newValue){
    //     this.year = newValue
    // }

    // this.addDriver = function (driver) {
    //     this.driver = driver
    // }
// }

// let car = new Car('BMW','Німеччина',2012, 300,3.0);
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2014)
// car.addDriver({name: 'Ivan',age: 20})
// console.log(car);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car {
//     constructor(model,producer,year,maxSpeed,engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info(){
//         for (const i in this){
//             if(typeof this [i] !== 'function'){
//                 console.log(`${i} -- ${this[i]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue){
//         this.year = newValue
//     }
//
//     addDriver(driver){
//         this.driver = driver
//     }
//
// }
//
// let car = new Car('BMW','Німеччина',2012, 300,3.0);
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2014)
// car.addDriver({name: 'Ivan',age: 20})
// console.log(car);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let Cinderella1 = new Cinderella('Olena',21,32);
let Cinderella2 = new Cinderella('Nika',21,33);
let Cinderella3 = new Cinderella('Asa',21,35);
let Cinderella4 = new Cinderella('Olga',21,36);
let Cinderella5 = new Cinderella('Vase',21,37);

let arr = [Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5]

class Prince extends Cinderella{
    constructor(name,age,findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Ivan',24 ,33)

let find = (arr, prince) => {
    for (const i of arr){
        if (prince.findFootSize === i.footSize){
            return `My cinderella ${i.name}`
        }
    }
}

console.log(find(arr, prince));