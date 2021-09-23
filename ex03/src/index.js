var myFood = {
    vegetable: "Carrot",
    fruit: "Orange",
    drink: "Water"
}

function myFunction(myObj) {
    vegetableValue = myObj["vegetable"]
    fruitValue = myObj["fruit"]
    drinkValue = myObj["drink"]
    return {
        vegetableValue : myObj["vegetable"],
        fruitValue : myObj["fruit"],
        drinkValue : myObj["drink"]
    }
}

console.log(myFunction(myFood));


module.exports = myFunction(myFood);