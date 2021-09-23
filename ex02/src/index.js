var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
}

function myClothes(myClothes) {
    hatValue = myClothes.hat;
    shirtValue = myClothes.shirt;
    shoesValue = myClothes.shoes;
    return {hatValue, shirtValue, shoesValue}
}

console.log(myClothes);

module.exports = myClothes;