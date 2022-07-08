// Корзина товарів
const cart = {
    items: [],
    getItems() { 
        return this.items;
    },
    add(product) { 
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }


        }
        const newProduct = {
            ...product,
            quantity: 1,
        }


        this.items.push(newProduct);
    },
    remove(productName) {
        for (const item of this.items) {
            console.log(item);

            if (productName === item.name) {
                console.log('yes!!!', productName);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() { 
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());


cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍑', price: 70 });
cart.add({ name: '🍋', price: 10 });
cart.add({ name: '🍋', price: 10 });
cart.add({ name: '🍋', price: 10 });


console.table(cart.getItems());

cart.remove('🍎');
console.log(cart.getItems());
console.log('Total: ', cart.countTotalPrice());
cart.clear();
console.log(cart.getItems());

