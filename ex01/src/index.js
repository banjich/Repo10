var myPet = {
    species: "Pudle",
    name: "Fluffy",
    legs: 4,
    friends: ["Bob", "Twinky"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet))

module.exports = {myPet, myFunction};