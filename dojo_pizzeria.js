function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1: " + pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2: " + pizza2);

var pizza3 = pizzaOven("stuffed crust", "traditional", ["mozzarella"], ["mushrooms", "olives", "pepperoni"]);
console.log("Pizza 3: " + pizza3);

var pizza4 = pizzaOven("thin crust", "garlic parmesan", ["mozzarella", "feta"], ["mushrooms", "olives", "spinach", "chicken"]);
console.log("Pizza 4: " + pizza4);


function randomizeCrust() {
    var crustArr = ["deep dish", "hand tossed", "stuffed crust", "thin crust", "gluten free"];
    return crustArr[Math.floor(Math.random() * crustArr.length)];
}

function randomizeSauce() {
    var sauceArr = ["marinara", "traditional", "garlic parmesan", "bbq", "spicy marinara"];
    return sauceArr[Math.floor(Math.random() * sauceArr.length)];
}

function randomizeCheese() {
    var cheeseArr = ["mozzarella", "feta", "cheddar", "parmesan", "pepperjack"];
    let rndNum = Math.floor(Math.random() * cheeseArr.length);
    var rndCheese = [];
    for(var i = 0; i <= rndNum; i++) {
        rndCheese.push(cheeseArr[Math.floor(Math.random() * cheeseArr.length)])
    }
    return rndCheese;
}

function randomizeToppings() {
    var toppingsArr = ["pepperoni", "sausage", "bacon", "chicken", "mushrooms", "olives", "onions", "banana peppers", "sardines", "pineapple"];
    let rndNum = Math.floor(Math.random() * toppingsArr.length);
    var rndToppings = [];
    for(var i = 0; i <= rndNum; i++) {
        rndToppings.push(toppingsArr[Math.floor(Math.random() * toppingsArr.length)])
    }
    return rndToppings;
}

var randomPizza = pizzaOven(randomizeCrust(), randomizeSauce(), randomizeCheese(), randomizeToppings());
console.log("Random pizza: " + randomPizza);