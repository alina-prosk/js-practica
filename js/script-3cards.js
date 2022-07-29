// Корзина товарів
// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }


//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }


//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         for (const item of this.items) {
//             console.log(item);

//             if (productName === item.name) {
//                 console.log('yes!!!', productName);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }
//         return total;
//     },
    
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());


// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍑', price: 70 });
// cart.add({ name: '🍋', price: 10 });
// cart.add({ name: '🍋', price: 10 });
// cart.add({ name: '🍋', price: 10 });


// console.table(cart.getItems());

// cart.remove('🍎');
// console.log(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());
// cart.clear();
// console.log(cart.getItems());





// const workers = [{
//         name: 'Alex',
//         salary: 3500,
//         month: 12,
//     },
//     {
//         name: 'Dima',
//         salary: 2500,
//         month: 9,
//     },
//     {
//         name: 'Oleg',
//         salary: 1500,
//         month: 36,
//     },
// ];

// function calculateSalary(arr) {
//     for (const user of arr) {
//         console.log(user);
//         let total = user.salary * user.month;
//         console.log(`${user.name}: ${total} for ${month} month`);
//     }
// }
// // calculateSalary(workers)

// function totalSalary(arr) {
//     let totalsalary = 0;

//     for (const user of arr) {
//         const total = user.salary * user.month;
//         totalSalary += total;
//     }
//     console.log(totalSalary);
// }
// totalSalary(workers);


// Зробіть функцію, яка бере масив імен людей, які поставили лайки. Вона має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// function likes(arr) {
//     let message = '';
//     // console.log(!arr.length);
//     if (!arr.length) {
//         message = "no one likes this";
//     }
//     else if (arr.length === 1) {
//         message = `${arr[0]} likes this`;
//     }
//     else if (arr.length === 2) {
//         message = `${arr[0]} and ${arr[1]} likes this`
//     }
//     else {
//        message = `${arr[0]} and ${arr[1]} and ${arr.length -2} others likes this`
//     }
//     return message;
// }
// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Створити функцію, яка буде розрвховувати скільки часу знадобиться для того щоб обслужити всі клієнтів.
// перебрати клієнтів
// на яку касу хто має піти в залежності від часу обслуговування

// function queueTime(customers, n) {
//     const counter = {};

//     for (let i = 1; i <= n; i += 1){
//         counter[i] = 0;
//     }
//     console.log(counter);

//     for (const customer of customers) {
//         const counterValues = Object.values(counter);  
//         const value = Math.min(...counterValues);
//         const index = counterValues.indexOf(value)
//         console.log(index);
//         counter[index + 1] += customer;
//         console.log(counter);
//     }
//     console.log(counter);
// }

// queueTime([10, 2, 3, 3, 2, 3], 2);
