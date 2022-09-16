// const colorPicerOptions = [
//     { label: 'pink', color: '#E91E63' },
//     { label: 'red', color: '#F44336' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'green', color: '#4CAF50' },
// ];
// const colorContainerEl = document.querySelector('.js-container');

// // const elements = colorPicerOptions.map(option => {
// //     const buttonEl = document.createElement('button');
// //     buttonEl.type = 'button';
// //     buttonEl.classList.add('.color-picer_option');
// //     buttonEl.textCountet = option.label;
// //     buttonEl.style.backgroundColor = option.color;
// //     buttonEl.style.width = 64;
// //     buttonEl.style.height = 64;


// //     return buttonEl;
// // });

// const makeOptions = options => {
//     return options.map(option => {
//     const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('.color-picer_option');
//         buttonEl.textCountet = option.label;
//         buttonEl.style.backgroundColor = option.color;
//         buttonEl.style.width = 64;
//         buttonEl.style.height = 64;


//         return buttonEl;
//     });
// };

// // console.log(elements);
// const elements = makeOptions(colorPicerOptions);

// colorContainerEl.append(...elements)



// const product = {
//     name: 'Mango',
//     description: 'lorem ipsu mango orange',
//     price: 250,
//     available: true,
//     onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const titleEl = document.createElement('h2');
// titleEl.classList.add('product-name');
// titleEl.textContent = product.name;

// const textEl = document.createElement('p');
// textEl.classList.add('product-desrc');
// textEl.textContent = product.description;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product-price');
// priceEl.textContent = `Ціна: ${product.price} грн.`;


// productEl.append(titleEl, textEl, priceEl);
// console.log(productEl);
// console.log(priceEl);

// import products from "./products.js";

// const makeProductsCard = ({ name, description, price }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const titleEl = document.createElement('h2');
//     titleEl.classList.add('product-name');
//     titleEl.textContent = name;

//     const textEl = document.createElement('p');
//     textEl.classList.add('product-desrc');
//     textEl.textContent = description;

//     const priceEl = document.createElement('p');
//     priceEl.classList.add('product-price');
//     priceEl.textContent = `Ціна: ${price} грн.`;
   
//     productEl.append(titleEl, textEl, priceEl);
//     return productEl;
// };
// console.log(makeProductsCard(products[2]));


// const targetBtn = document.querySelector('button[data-action="plus"]');
// const addListnerBtn = document.querySelector('button[data-action="start"]');
// const removeListnerBtn = document.querySelector('button[data-action="remove"]');

// addListnerBtn.addEventListener('click', () => {
//     console.log('клік додавання');
// targetBtn.addEventListener('click', onTargetBtnClick)
// });

// removeListnerBtn.addEventListener('click', () => {
//     console.log('клік стоп');
//     targetBtn.removeEventListener('click', onTargetBtnClick)
// })

// function onTargetBtnClick() {
//     console.log('клік')
// }


