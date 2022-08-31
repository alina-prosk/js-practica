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
