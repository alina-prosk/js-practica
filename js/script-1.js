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

/*const min = 5;
const max = 17;
let total = 0;

for (let i = 0; i <= max; i += 1){
    console.log(i);
    if (i % 2 === 0) {
        console.log(`четне: `, i);
        total += i;
    }
}
console.log(total);*/

