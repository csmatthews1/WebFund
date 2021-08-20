
function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza () {

    var crustOptions = ["deep dish", "hand-tossed", "thin crust"];
    var sauceOptions = ["traditional", "marinara", "white sauce"];
    var cheeseOptions = ["mozzarella", "parmigiano", "feta", "ricotta"];
    var toppingOptions = ["pepperoni", "sausage", "mushrooms", "peppers", "fresh basil", "olives", "onion"];

    var randPizza = {
        crustType: "",
        sauceType: "",
        cheeses: [],
        toppings: [],
    };

    numCheeses = 0;
    selCheese = 0;
    numToppings = 0;
    selTopping = 0;

    randPizza.crustType = crustOptions[Math.floor(Math.random()*crustOptions.length)];
    randPizza.sauceType = sauceOptions[Math.floor(Math.random()*sauceOptions.length)];

    numCheeses = Math.ceil(Math.random()*3); //Pick random number of cheeses (max of 3)
    for (let i = 0; i < numCheeses; i++) {
        selCheese = Math.floor(Math.random()*cheeseOptions.length)
        randPizza.cheeses.push(cheeseOptions[selCheese]);
        cheeseOptions.splice(selCheese, 1);
    }

    numToppings = Math.ceil(Math.random()*5);  //Pick random number of toppings (max of 5)
    for (let i = 0; i < numToppings; i++) {
        selTopping = Math.floor(Math.random()*toppingOptions.length)
        randPizza.toppings.push(toppingOptions[selTopping]);
        toppingOptions.splice(selTopping, 1);
    }

    return randPizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"])
console.log("Pizza 1:",  p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms","olives", "onions"])
console.log("Pizza 2", p2);

var p3 = randomPizza();
console.log("Random Pizza 1:", p3)

var p4 = randomPizza();
console.log("Random Pizza 2:", p4)

