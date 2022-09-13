/**** Взаємодія з користувачем та обробка відповіді ****/

/*
Умова завдання:
Використовуючи конструкцію if...else і prompt, написати код, який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/

/*const answer = prompt('Яка офіційна назва в JavaScript?');

if (answer.toLocaleLowerCase() === 'ECMAScript'.toLocaleLowerCase()) {
    alert('Правильно!');
}

else {
    alert('Це ECMAScript!');
}*/


/**** Введення користувача та розгалуження ****/

/*
Умова завдання:
Напиши скрипт, який буде запитувати логін за допомогою prompt і логуватиме результат у консоль браузера.
- Якщо відвідувач вводить "Адмін", то prompt запитує пароль
- Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
- В іншому випадку вивести рядок "Я вас не знаю"
Пароль перевіряти так:
- Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
- Інакше виводити рядок "Невірний пароль"
*/

/*const sholdRenew = confirm('Whould you login');
console.log(sholdRenew);*/


/*let quantity = prompt('введіть кількість');
quantity = Number(quantity);
console.log (quantity);
console.log(typeof quantity);*/

/*let elementw = '87px';
elementw = Number.parseInt(elementw);
console.log('elementw:', elementw);
let elementH = '122.33';
elementH = Number.parseFloat(elementH);
console.log(elementH);*/

/*let salary = 125.658;
salary = Number(salary.toFixed(2));
console.log(salary);*/


/*const base = 3;
const power = 2;
const result = Math.pow(base, power);
console.log(result);
/* або*/
/*console.log(base ** power);*/

/*let base = prompt('число');
base = Number(base);
console.log(base);

let power = prompt('степінь');
power = Number(power);
console.log(power);

console.log(result = (base ** power));*/

/*const max = 50;
const min = 10;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);*/

/*const firstName = "Oleg";
const secondName = "Eva";
const lastName = "Galya";

const result = (firstName + " " + secondName + lastName);
console.log(result);


const room = 98;
const type = 'Vip';
const message = `гість ${firstName} заселено до ${type} кімнати номер ${room}`;
console.log(message);*/


/*const word1 = 'hy';
const word2 = 'by';

const message = 'gffhghy hy';
const message2 = 'tyytthg by';
console.log(message.includes(word1));
console.log(message2.includes(word2));
console.log(message2.includes(word1));
console.log(message.includes(word2));*/


/*const x = 45;
const y = 17;
const number = 5;
console.log(number > x || number < y);*/

/*const stars = 6;
let price;

switch(stars){
    case 1:
    case 2:
        price = 20;
        break;
    
    case 3:
        price = 30;
        break;
    
    case 4:
    case 5:
        price = 50;
        break;
    default:
        console.log("nou");
}
console.log(price);*/

/*const option = 2;
let message = "";
switch (option){
    case 1:
        message = "самовивіз";
        break;
    
    case 2:
        message = "кур'єр";
        break;
    
    case 3:
        message = "почта";
        break;
    
    default:
    console.log("виберіть спосіб доставки");
}
console.log(message);*/

/*const minSalary = 500;
const maxSalary = 5000;
const employees = 8;
let totalSalary = 0;
for (let i = 0; i <= employees; i += 1){  
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
    console.log(`зп робітника ${i} - ${salary}`);
    totalSalary += salary;
}
console.log('Total; ', totalSalary);*/

// const min = 5;
// const max = 17;
// let total = 0;


// for (let i = 0; i <= max; i += 1){
//     console.log(i);
//     if (i % 2 === 0) {
//         console.log(`четне: `, i);
//         // total += i;
//     }

// }
// console.log(total);

// // // потрібно  порахувати за скільки днів Равлик зможе виповзти з колодязя
// // // в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// // // 42 м, виповзе за 8 днів
// // // 17 м, виповзе за 3 дні
// // // 18 м, виповзе за 4 дні
/*const up = 7;
const down = 2;
const deep = 42;
let days = 0;
let path = 0;
while (path < deep) {
    days += 1;
    path += up;
    if (path < deep) {
        path -= down;
    }
}
console.log(days);*/

// const input = Math.ceil(Number(prompt('Введіть поверх')));
// console.log(input);
// if (isNaN(input)) {
//     alert('Не число');

// }
// const free = 0;
// const low = 20;
// const middle = 30;
// const high = 40;
// let total = 0;
// let message;

// for (let i = 1; i <= input; i += 1){
//     if (input === 0 || input === 1) {
//         message = "безкоштовно";
//         break;
//     }
//     if (i >= 2 && i <= 4) {
//         total += low;
//     } else if (i >= 5 && i <= 7) {
//         total += middle;
//     } else if (i >= 8) {
//         total += high;
//     }
//     message = `Вортість доставки на${input} повех  ${total} гривень`
// }
// alert(message);





// const myFriends = {
//     name: 'kate',
//     age: 23
// }

// myFriends.city = 'London';
// myFriends.country = 'UK';

// delete myFriends.country;
// delete myFriends.city

// const myFriendsnewKey = 'city';
// myFriends[myFriendsnewKey] = 'London';
// myFriends[myFriendsnewKey] = 'Kiev'

// console.log(myFriends)



// const name = 'Alina';
// const age = 35;

// const myInfo = {
//     age,
//     name,
//     femeli: true,
//     children() {
//         console.log('Ilya, Liza');
//     }
// }

// // const myInfo2 = { ...myInfo }
// const myInfo2 = JSON.parse(JSON.stringify(myInfo))
// myInfo2.age = 54;
// console.log(myInfo2);
// console.log(myInfo);


// const persons = {
//     name: 'ric',
//     age:23
// }

// function personTwo(person) {
//     const newperson = { ...person }
//     newperson.age += 1,
//     newperson.work = true
//     return newperson
// }

// const newperson = personTwo(persons)
// console.log(newperson)
// console.log(persons)
// console.log(newperson.age)


// function myName() {
//     console.log('Alina')
// }

// setTimeout(myName, 2000)


// const a = 3
// function myFn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }
// myFn()



// let a
// let b
// function myFn() {
//     let b
//     let c = 4
//     b = 5
//     a = true
//     console.log(a)
//     console.log(c)
//     console.log(b)
// }
// myFn()
// console.log(a)


// function multy(a, b, c) {
//   return a * b * c
// }
// let result = multy(3, 2, 3)
// console.log(result)

// function abc(a = 2, b = 3, c = 4) {
//     console.log(`A = ${a}, B = ${b}, C = ${c}`)
//     // for (let i = a; i < c; i += b){
//     //     console.log(i)
//     }
// }
// abc(3, 2, 4)



// const propName = "name";
// const user = {
//     age: 25,
// [propName]: "Генрі Сибола"
// };
// console.log(user.name);

// const getBooks = {
//     book: ["The Last Kingdom", "Dream Guardian"],
//     getteryBook() {
//         console.log(this);
//     },
//     addBook(bookName) {
//         console.log('newbook');
//     },
// };
// getBooks.getteryBook();
// getBooks.addBook();


// const getBooks = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     getteryBook() {
//         return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// };
// console.log(getBooks.getteryBook());
// getBooks.addBook("The Mist");
// console.log(getBooks.getteryBook());
// getBooks.removeBook("Dream Guardian");
// console.log(getBooks.getteryBook());



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const booksName = [];

// for (const book of books) {
// booksName.push(book.title)
// }
// console.log(booksName);

// let totalRating = 0;

// for (const book of books) {
//     totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);





// const temps = [14, -4, 25, 8, 11];
// console.log(...temps);
// console.log(Math.max(...temps))

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps);



// const button = {
//     width: 370,
//     text: 'Buy'
// }

// const newButton = {
//     ...button,
//     color: 'red',
//     text: 'Hey'
// }
// console.table(newButton);

// const myltyByFactory = (value, multy = 2) => console.log(value * multy)

// myltyByFactory(2)
// myltyByFactory(5, 6)
// myltyByFactory(6, 1)

// const newPost = (post, addedAAt = Date()) => ({
//     ...post,
//     addedAAt
// })
// const firstPost = {
//     id: 1,
//     author: 'Alina'
// }

// console.table(newPost(firstPost));

// const fnError = () =>{
// throw new error('some error')
// }

// try{
//     fnError()
// } catch (error) {
//     console.log(error.message)
// }
// console.log('Continue...')


// const myArr = [1, 2, 3]
// console.log(myArr)
// myArr.forEach(el => console.log(el * 2))

// const myArr = [1, 2, 3]
// console.log(myArr)
// const newArr = myArr.map(el => el * 3)
// console.log(newArr)


// const sumNombers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'not number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'not positive'
//     }

//     return a + b
// }
// console.log(sumNombers(5, 6));
// console.log(sumNombers(6, 'a'));
// console.log(sumNombers(-1, 2));


// const myArr = ['first', 'second', 'third'];
// myArr.forEach((el, index) => {
//     console.log(el, index);
// })


// const myObject = {
//     a: 1,
//     b: true,
//     c: 'hey'
// }

// // for (const key in myObject) {
// //     console.log(key)
// // }

// Object.values(myObject).forEach(value => {
//     console.log(value)
// })


// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }
// }

// const firstComment = new Comment('First comment')
// const secondComment = new Comment('Second comment')


// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }

//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
// // Comment.mergeComments()

// class NumbersArray extends Array{
//     sum() {
//         return this.reduce((acc, el) => acc += el, 0)
//     }
// }
// const myArr = new NumbersArray(2, 4, 6)
// const youArr = new NumbersArray(1, 2 ,3)
// console.log(myArr.sum())
// console.log(youArr.sum())


// fetch('https://jsonplaceholder.typicode.com/todos/3')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.error(err))

// // створили функцію для визову
// const getData = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(err => reject(err))
//     )

//     // в іншому файлі викликаємо цю функцію(скільки потрібно разів)
// getData('https://jsonplaceholder.typicode.com/todos/3')
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))


// const asyncFn = async () => {
//     return 'Sucsesful'
// }
// asyncFn()
// .then(value => console.log(value))

// const timerPromise = () =>
//     new Promise((resolve, reject) =>
//         setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer ended', endTime - startTime)
// }
// asyncFn()


// // асинхронна функція
// const getData = async () => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }
// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// try{
// const data = await getData(url)
//     console.log(data)
// } catch (err) {
//     console.log(err.message)
// }






// const user = {
//     fullName: 'Mango',
//     shoWName(){
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);

//         const inner = () => {
//             console.log('this is inner: ', this);
//         };
//         inner();
//     },
// };
// user.shoWName();

// const numbers = [1, 2, 5, 3,];
// const res = numbers
//     .filter((num) => num >= 2)
//     .map((num) => num * 2)
//     .sort((a, b) => a + b)
    
// console.log(res);


// const genres = ['Jazz', 'Blues'];
// genres.push('Rock-n-Roll');
// genres.shift();
// console.log(genres);
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.


// const values = [8, 11];
// let total = 0;

// for (const value of values) {
//     total += value*2;
    
// }
// console.log(total)

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];st

// for (const fruit of fruits) {
//   console.log(fruit)
    
// }
// const string = 'Welcome to the future'; зробити 6 задачу

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = Math.min(...numbers);
// console.log(min);

// function min(a, b) {
//     return Math.min(a, b)
// }
// console.log(min(9, 3))

// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     arr: [123, 123]
// };
// user.mood = 'happy';
// console.log(user)
// const key = Object.keys(user)
// console.log(key)
// // console.log(Object.keys(user))

// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0

//     for (let stone of stones) {
       
//         if (stone.name === stoneName) {
//             console.log(stone);
//             sum = stone.price * stone.quantity
//             break
//         }
//     }
//     return sum
// }

// console.log(calcTotalPrice(stones, 'Бриллиант'))

// function calAverage() {
//     let total = 0
//     for (let argument of arguments) {
        
//     total += argument
//     }
//     return total/arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2



// function compare(firstNumber, secondNumber, operation, result) {
//     const num1 = Number(firstNumber);
//     const num2 = Number(secondNumber);
//     const res = Number(result);

// if (isNaN(num1) || isNaN(num2) || isNaN(res)) return false
    
//     const operationDic = {
//         '+': function (a, b) {return a + b },
//         '-': function (a, b) { return a - b },
//         '/': function (a, b) { return a / b },
//         '*': function (a, b) {return a * b  }
//     }
//     console.log(operationDic[operation](num1, num2))
    
//     // switch (operation) {
//     //     case '+':
//     //         return num1 + num2 === res
    
//     //     case '-':
//     //         return num1 - num2 === res
        
//     //     case '*':
//     //         return num1 * num2 === res
    
//     //     case '/':
//     //         return num1 / num2 === res

//     //     default:
//     //         return false
//     // }

// }

// console.log(compare("3", "6", "*", "18"))




// НЕ ЗРОБЛЕНА!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// /*
// * Каждая транзакция это объект со свойствами: id, type и amount
// */

// const account = {
//     // Текущий баланс счета
//     balance: 0,

//     // История транзакций
//     transactions: [],

//     /*
//     * Метод создает и возвращает объект транзакции.
//     * Принимает сумму и тип транзакции.
//     */
//     createTransaction(amount, type) {
//         return {
//             id: this.transactions.length + 1,
//             amount,
//             type
// }
//     }
// },

// deposit(amount) {
        
//     },



// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];

// const getModels = cars => cars.map(car => car.model)
// або
// const getModels = cars => {
//     const models = cars.map(car => car.model)
//     return models
// };

// console.table(getModels(cars));


// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         const carCopy = {...car}
//         const newPrice = carCopy.price - (carCopy.price * discount)
//         carCopy.price = newPrice
//         return  carCopy
// } )
// };


// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         const carCopy = {...car}
//         const newPrice = carCopy.price - (carCopy.price * discount)
//         carCopy.price = newPrice
//         return  carCopy
// } )
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// // console.table(makeCarsWithDiscount(cars, 0.4));

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));



// const getCarsWithDiscount = cars => cars.filter(car => car.onSale === true);

// console.table(getCarsWithDiscount(cars));


// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));


// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));


// const sortByAscendingAmount = cars.sort((firstAmount, secondAmount) => firstAmount.amount - secondAmount.amount);

// console.table(sortByAscendingAmount);

// const sortByDescendingPrice = cars => cars.sort((firstPrise, secondePrice) => secondePrice.price - firstPrise.price);

// console.table(sortByDescendingPrice(cars));

// const sortByModel = (cars, order) => cars.sort((firstName, secondName) => {
//     return order === 'asc' ? firstName.make.localeCompare(secondName.make) : secondName.make.localeCompare(firstName.make)
// }
    
// );

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));


// const getTotalAmount = cars.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount);


// const getModelsOnSale = (cars, onSale) => cars
//     .map(car => car)
//     .filter(car => car.onSale === true)
//     .sort((a, b) => a.price - b.price);

// console.table(getModelsOnSale(cars));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);




/**-----------------------------------------------------------------------THIS----------------------------------------------------------- */

// const coudThis = function (e, x) {
//     console.log(e, x)
// console.log(this)
// }
// const coundA = {
//     a: 7,
//     b: 4
// }

// const coundB = {
//     a: 17,
//     b: 14
// };

// coudThis.call(coundA, 2, 6)
// coudThis.apply(coundB)


// const changeColor = function (color) {
//     console.log(this);
//     this.color = color;
// };

// const hat = {
//     color: 'red'
// }

// const sweeter = {
//     color: 'pink'
// }
// changeColor.call(hat, 'blek')
// changeColor.call(sweeter, 'blue')


/**
 * TODO Example #1
 * Создать объект, который описывает ширину и высоту
 * прямоугольника, а также может посчитать площадь фигуры:
 * const rectangle = {width:..., height:..., getSquare:...};
 */

// const rectangle = {
//     width: 10,
//     height: 10,
//     getSquare() {
//         return this.height * this.width;
//     }
// }
//     console.log(rectangle.getSquare());


/**
 * TODO Example #2
 * Создать объект, у которого будет цена товара и его скидка, а также
 * два метода: для получения цены и для расчета цены с учетом скидки:
 */

// const product = {
//     price: 100,
//     discount: '15%',
//     getPrice() {
//         return this.price;
//     },
//     getPriceWidthDiscount() {
//         const discount = parseInt(this.discount);
//         return this.price - discount;
//     }
// }
// console.log(product.getPrice());
// console.log(product.getPriceWidthDiscount());


/**
 * TODO Example #3
 * Создать объект “вычислитель”, у которого есть числовое свойство
 * “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
 * Методы можно вызывать через точку, образуя цепочку методов:
 */

// const calc = {
//     value: 1,
//     getValue() {
//         return this.value;
//     },
//     set() {
//         return this.value = 0;
//     },
//     reset(num) {
//         this.value = num;
//     },
//     plus(num) {
//         this.value += num;
//          return this;
//     },
//     minus(num) {
//         this.value -= num;
//          return this;
//     },
//     mylty(num) {
//         this.value *= num;
//          return this;
//     },
//     delei(num) {
//         if (this.value === 0) return 0;
//         this.value /= num;
//          return this;
//     }
// };

// calc.reset(4);
// calc.plus(5);
// calc.mylty(2);
// console.log(calc);

/**
 * TODO Example #4
 * Даны объект и функция:

 * Не изменяя функцию или объект, 
получить результат функции getSquare для объекта sizes
 */

// let sizes = { width: 5, height: 10 }

// function getSquare() { return this.width * this.height }
// function twoSguare(width, height) {
//     this.width = width;
//     this.height = height;
// };

// const square = getSquare.call(sizes)
// console.log(square)


/**---------------------------------CLASS------------------------------ */
// class Blogger{
//     constructor(name, age, numberOfPosts, topics) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     };

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     };
//     updatePostCount(value) {
//         this.numberOfPosts = value
//     }
// };

// const mango = new Blogger({
// name: 'mango@mail.com',
// age: 24,
// numberOfPosts: 20,
// topics: ['tech', 'cooking'],
// });
// // console.log(mango);
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// // mango.updatePostCount(5);


// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts


// class Storage{
//     constructor(items) {
//         this.items = items
//     }

//     getItems() {
//         return this.items
//     }

//     addItem(item) {
//         this.items += item
//     }

//     removeItem(item) {
//         this.items -= item
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]


// class User{
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail
//     }
// }


// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango)
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
// mango.email = 'ewrerrrr'
// console.log(mango.email);


// class Notes{
//     static Priority = {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
//     constructor(items) {
//         this.items = items
//     }

//     addNote(payload) {
        
//     }
// }
// const myNotes = new Notes([]);


// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
/**---------------------------------------ЛІЧИЛЬНИК---------------------------------- */

// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const valueEl = document.querySelector('[id="value"]');

// const counter = {
//     id: 0,
    
//     increment() {
//         console.log(this)
//         this.id += 1;
//     },

//     decrement() {
//         this.id -= 1;
//     },

// };

// incrementBtn.addEventListener('click', function () {
//     counter.increment();
//     valueEl.textContent = counter.id;
// });

// decrementBtn.addEventListener('click', function () {
//     counter.decrement();
//     valueEl.textContent = counter.id;
//      // decrementBtn.textContent = 'gk.c';
// });