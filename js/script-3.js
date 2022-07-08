// const inputName = 'color';    обчислювальні властивості
// const inputValue = 'tomato';

// const colorPicerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPicerData);

// /*тип з посиланнями*/
// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);
// a.c = 34;
// console.log(a);
// console.log(b);

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const stringArray = string.split(' ');

// // stringArray.shift();
// // stringArray.pop();
// // або
// console.log(stringArray.slice(1, -1).join(' '));


// console.log(stringArray);
// console.log(stringArray.join(' '));

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
//  В переменных names и phones хранятся строки имен и телефонных номеров,
//  разделенные запятыми.Порядковый номер имен и телефонов в строках указывают
// на соответствие.Количество имен и телефонов гарантированно одинаковое.
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// // console.log(namesArray);
// // console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {

//     const fullString = `${namesArray[i]}: ${phonesArray[i]}`;
//     console.log(fullString)
// }


// Напиши скрипт который «разворачивает» строку (обратный порядок букв)
// и выводит ее в консоль.

// const string = 'Welcome to the future';

// let reversString = ''
// for (let i = string.length - 1; i >= 0; i -= 1) {

//     console.log(string[i]);
//     reversString += string[i];
// }
// console.log(reversString);
// або
// let secondVariant = string.split('').reverse().join('');


// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать
//  для любого массива чисел.Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[numbers.length - 1];

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// // }
// console.log(min);





// const autsours = {
//     ajax: 8,
//     kiwi: 9,
//     poly: 6,
//     mango: 4,

// };

// const entries = Object.entries(autsours);

// for (const entry of entries) {
//     const [name, rating] = entry;

//     console.log(name, rating);
// };



// const user = {
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//     info: {
//         work: "GoIt",
        
//     },
// }

// const { email, friendCount, id, ...lastUser } = user;

// console.log(email, friendCount, id);
// console.log(lastUser);



// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Apple', online: true },
//     { name: 'Lime', online: true },
//     { name: 'kiwi', online: false },
// ];

// console.table(friends);
// // всі друзі
// for (const friend of friends) {
  
// }
// // шукаємо друга
// const findByName = function ( allFriends, friendName ) { 
//     for (const friend of allFriends) {

//         if (friend.name === friendName) {
//             return "yes!!";
//         }
//     }
// };
// console.log(findByName(friends, 'Lime'));

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         return names;
//     }
//     console.log(getAllNames(friends));
// }

// const getOnlineFriends = function (allFriends) {

//     const onlineFriend = [];
//     for (const friend of allFriends) {
        
//         if (friend.online) {
//             onlineFriend.push(friend);
//         }
//     }
//     return onlineFriend;
// };
// console.log(getOnlineFriends(friends));


// const getOflineFriends = function (allFriends) {
//     const oflineFriends = [];
//     for (const friend of allFriends) {
//         if (!friend.online) {
//      oflineFriends.push(friend);
//         }
//     }
//     return oflineFriends;
// };
// console.log(getOflineFriends(friends));

// const getOnlineStatus = function (allFriends) {
//     const statusFends = {
//         offline: [],
//         online: []
//     };

// for (const friend of allFriends) {
//         if (friend.online) {
//             statusFends.online.push(friend);
//             continue;
//     };
//             statusFends.offline.push(friend);
    
//     }
//     return statusFends;
// };
// console.log(getOnlineStatus(friends));








