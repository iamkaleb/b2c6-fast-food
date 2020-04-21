const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    collectOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)

// Invoke the function to return the list of all orders
restaurant.collectOrders()

// Output all orders to the console using console.table()
console.table(restaurant.orders)