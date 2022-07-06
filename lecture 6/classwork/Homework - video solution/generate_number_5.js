function generateFifthNumber(){

    let categoryNumber  = +prompt("Коя категория продукти пазарувате?");
    let frequency       = +prompt("Колко често?");

    globalUserData.foodCategory      = categoryNumber;
    globalUserData.frequencyCategoty = frequency;

    return categoryNumber + frequency;


}