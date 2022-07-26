let answersCounter = 0;
//let isCustomerAdult = customerAge >= 18;

let remainderOfDivison = null;


const globalCardData = {

    _maxNumberOddPosition   : -1,
    _maxNumberEvenPosition  : -1,
    _barcode : "",

    processOddPositionNumber(number){

        if(number > globalCardData._maxNumberOddPosition) {
            globalCardData._maxNumberOddPosition = number;
        }
    },

    processEvenPositionNumber(number){

        if(number > globalCardData._maxNumberEvenPosition){
            globalCardData._maxNumberEvenPosition = number;
        }
    },

    getMaxNumberOddPosition(){
        return globalCardData._maxNumberOddPosition;
    },

    getMaxNumberEvenPosition(){
        return globalCardData._maxNumberEvenPosition;
    },


    processCardNumberToSymbol(number)
    {
        if(number == 0) return "*";
        if(number == 1) return "!";
        if(number == 2) return "@";
        if(number == 3) return "#";
        if(number == 4) return "$";
        if(number == 5) return "%";
        if(number == 6) return "^";
        if(number == 7) return "&";
        if(number == 8) return "/";
        if(number == 9) return "+";
    },

    accumulateCardNumberBarCode(number)
    {
        globalCardData._barcode = globalCardData._barcode + globalCardData.processCardNumberToSymbol(number);
    },

    getCardBarCode()
    {
        return globalCardData._barcode;
    }

};




const cardNumbers = {
    firstNumber     : 0,
    secondNumber    : 0,
    thirdNumber     : 0,
    fourthNumber    : 0,
    fifthNumber     : 0,
    sixthNumber     : 0,
    seventhNumber   : 0,
    eightNumber     : 0,
    ninthNumber     : 0
}


const userData = {

    massIndexCategory : -1,
    foodCategory      : -1,
    frequencyCategory : -1,

    isBodyTypeNormal : function()
    {
        return userData.massIndexCategory == 2 ||
               userData.massIndexCategory == 3 ||
               userData.massIndexCategory == 4; 
    },

    isBodyTypeOverweight : function()
    {
        return userData.massIndexCategory == 6 ||
               userData.massIndexCategory == 7 ||
               userData.massIndexCategory == 8; 
    },

    isBodySubTypeAthletic : function()
    {
        return userData.massIndexCategory == 3;
    },

    doesUserConsumeFruitsAndVegetables()
    {
        return userData.foodCategory == 1;
    },

    doesUserConsumeMeat()
    {
        return userData.foodCategory == 2;
    },

    doesUserConsumeAlchoholAndTobacco()
    {
        return userData.foodCategory == 3;
    },

    doesUserConsumeMilk()
    {
        return userData.foodCategory == 4;
    },

    doesUserConsumeSugar()
    {
        return userData.foodCategory == 5;
    },

    consumationRarely()
    {
        return userData.frequencyCategory = 1;
    },

    consumationSometimes()
    {
        return userData.frequencyCategory = 2;
    },

    consumationOften()
    {
        return userData.frequencyCategory = 3;
    },

}








const questions = {
    CUSTOMER_BIRTH_YEAR : "Моля посочете годината си на раждане!",

}

const questionAnswers = {
    clientBirthYear : null,
}