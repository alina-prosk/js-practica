// const frends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(frends);
// // const lastIndex = frends.length - 1;

// // for (let i = 0; i <= lastIndex; i += 1) {
// //     frends[i] += '-1';

// // }
// //     console.log(frends);

// for (const frend of frends) {
//     console.log(frend);
// }

/*exsample*/
// const cart = [54, 28, 45, 13, 16, 67];
// // зробити перемінну тотал до цикла
// let total = 0;
// //  перебрати масив
// // for (let i = 0; i < cart.length; i += 1){
// //     // console.log(cart[i]);
// // // кожен елемент приплюсувати до тотал

// //     total += cart[i];
// // }

// for (const value of cart) {
//     total += value;
// }

// console.log('total:', total);


/* exsample*/
// піраховує суму всіх парних чисел
// перемінна тотал
// перебрати масив
// на кожній ітерації перевірити на парність
// парне плюсуємо до тотал
// const numbers = [54, 28, 45, 13, 16, 67];
// let total = 0;

// for (const number of numbers){
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('Парне');
//         total += number;
//     }
// }
// console.log('total', total);


/*exsample*/
// // пошук логіна
// const logins = ['cvbnhgrgtu', 'sdfghgfdfg', 'poiuytfgh', '8765rertyuj'];
// // const loginToFind = 'sdfghgfdfg';
// // for (let i = 0; i < logins.length; i += 1)



/*3+*/
// const numbers = [1, 2, 3]

// function foo(arr) {
//     const copy = arr.slice()
//         console.log(copy)
//         console.log(copy === numbers)
//         copy[0] = 22
//         console.log(copy)

// }
// foo(numbers)

// /*4*/вирахувати індекс маси тіла
// function calcBMI(weight, heigth) {
// // перевести до крапки
//     const parsedWeight = weight.replace(',', '.');
//     const parsedHeigth = heigth.replace(',', '.');
// // перевести до числа
//     const weightNum = Number(parsedWeight);
//     const heigthNum = Number(parsedHeigth);

//     console.log('weightNum',weightNum);
//     console.log('heigthNum', heigthNum);

//         if (isNaN(weightNum) || isNaN(heigthNum)) {
//         return 0;
//     }
// // поділити та привести до кореня
//     const calc = (weightNum / Math.pow(heigthNum, 2)).toFixed(2);
//     return Number(calc);


// }
//     const bmi = calcBMI('87,9', '1.74');
//     console.log(bmi);

// /*5*/повертає найменше число
// function min(a, b) {
//     console.log('a', a, 'b', b);
//     if (isNaN(a) || isNaN(b)) return 0;

//     // if (a > b) return b
//     // return a

//     return Math.min
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

/*6*/
// function logItems(items) {
//     if (Array.isArray(items) === false) return
//     for (let i = 0; i < items.length; i += 1){
// console.log(`${i + 1} - ${items[i]}`)
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['ябко', "сливка", "вишня", "банан"]);

/*7*/
// function calAverage(){
//     let sum = 0;
//     for (let argument of arguments) {
//         sum += argument;
//     }
//     return sum / arguments.length
// }
// console.log(calAverage(122, 3, 5, 3));


/*8*/

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60)

//     const min = minutes % 60

//     const twoDigiHours = String(hours).padStart(2, '0')
//     const twoDigiMins = String(min).padStart(2, '0')
//     return `${twoDigiHours}:${twoDigiMins}`
// }
// console.log(formatTime(70));

/*9*/
// включити відео урок 4 на 2:00 доробити задачу
// function getEvenNumbers(start, end) {
    
// let newArray = [];
//   for (let i = start; i < end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
    
//   }
//    return newArray;
// }
// console.log(getEvenNumbers(6, 12));

