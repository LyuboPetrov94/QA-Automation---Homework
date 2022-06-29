
const mandatoryQuestions = {
    COUNT_PANS          : "Колко тигана има в кухнята?",
    COUNT_POTS          : "Колко тенджери има в кухнята?",
    KITCHEN_WIDTH_CM    : "Колко сантиметра е широка кухнята?",
    KITCHEN_LENGHT_CM   : "Колко сантиметра е дълга кухнята?",
    KITCHEN_HEIGHT_CM   : "Колко сантиметра е висока кухнята?",
    NAME_OF_CHEF        : "Как се казва главният готвач?",
    COUNT_COOKS         : "Колко готвачи работят в кухнята?",
    COUNT_WAITERS       : "Колко сервитьори работят в ресторанта?",
    NAME_SAUCE_PERSON   : "Как се казва отговорника на сосовете ?",
    MIN_TEMP_KITCHEN    : "Каква е минималната температура в кухнята?",
    MAX_TEMP_KITCHEN    : "Каква е максималната температура в кухнята?",
    BANK_BALANCE        : "Колко парички имате в банковата си сметка?",
    DAILY_TURNOVER      : "Колко парички е дневният оборот на ресторанта ви?",
    OPENING_HOURS       : "В колко часа отваряте?",
    CLOSING_HOURS       : "В колко часа затваряте?"
};

const addQuestions = {
    REFRIGERATOR_AVAILABLE   : "Разполагате ли с хладилник? (Y/N)",
    GAS_STOVE_AVAILABLE      : "Разполагате ли с газов котлон? (Y/N)",
    OVEN_AVAILABLE           : "Разполагате ли с конвектомат (Y/N)?",
    ELECTRIC_GRILL_AVAILABLE : "Разполагате ли с електрическа скара? (Y/N)",
    ASPIRATION_AVAILABLE     : "Разполагате ли с аспиратор (Y/N)?"
};


let countOfPans;
let countOfPots;
let kitchenWidthCm;
let kitchenLenghtCm;
let kitchenHeightCm;
let nameOfChef;
let countOfCooks;
let countOfWaiters;
let nameOfSaucePerson;
let minTempKitchen;
let maxTempKitchen;
let bankBalance;
let dailyTurnover;
let openingHours;
let closingHours;

let refrigeratorAvailable;
let gasStoveAvailable;
let ovenAvailable;
let electricGrillAvailable;
let aspirationAvailable;

let kitchenAreaSqM = (kitchenWidthCm * kitchenLenghtCm) * 0.0001;
let kitchenVolumeCubicM = (kitchenWidthCm * kitchenLenghtCm * kitchenHeightCm) * 0.000001;

let sumOfCashEndOfDay = bankBalance + dailyTurnover;

let answersCounter = 0;
let addAnswersCounter = 0;


alert ("Кухненски робот 101 е на Ваше разположение");
alert ("Моля отговорете на следващите въпроси");

while ( answersCounter == 0 ) {

    countOfPans         = prompt (mandatoryQuestions.COUNT_PANS);
    countOfPots         = prompt (mandatoryQuestions.COUNT_POTS);
    kitchenWidthCm      = prompt (mandatoryQuestions.KITCHEN_WIDTH_CM);
    kitchenLenghtCm     = prompt (mandatoryQuestions.KITCHEN_LENGHT_CM);
    kitchenHeightCm     = prompt (mandatoryQuestions.KITCHEN_HEIGHT_CM);
    nameOfChef          = prompt (mandatoryQuestions.NAME_OF_CHEF);
    countOfCooks        = prompt (mandatoryQuestions.COUNT_COOKS);
    countOfWaiters      = prompt (mandatoryQuestions.COUNT_WAITERS);
    nameOfSaucePerson   = prompt (mandatoryQuestions.NAME_SAUCE_PERSON);
    minTempKitchen      = prompt (mandatoryQuestions.MIN_TEMP_KITCHEN);
    maxTempKitchen      = prompt (mandatoryQuestions.MAX_TEMP_KITCHEN);
    bankBalance         = prompt (mandatoryQuestions.BANK_BALANCE);
    dailyTurnover       = prompt (mandatoryQuestions.DAILY_TURNOVER);
    openingHours        = prompt (mandatoryQuestions.OPENING_HOURS);
    closingHours        = prompt (mandatoryQuestions.CLOSING_HOURS);

    let mandatoryQuestionsAnswered = countOfPans && countOfPots && kitchenWidthCm && kitchenLenghtCm && kitchenHeightCm && nameOfChef && countOfCooks && countOfWaiters && nameOfSaucePerson
    && minTempKitchen && maxTempKitchen && bankBalance && dailyTurnover && openingHours && closingHours

    if(mandatoryQuestionsAnswered) {
            answersCounter = 1;
    //if(countOfPans && countOfPots && kitchenWidthCm && kitchenLenghtCm && kitchenHeightCm && nameOfChef && countOfCooks && countOfWaiters && nameOfSaucePerson
       // && minTempKitchen && maxTempKitchen && bankBalance && dailyTurnover && openingHours && closingHours) {
           // answersCounter = 1;
        }
        else {
            alert ("Има непопълнени въпроси. Моля, отговорете на всички въпроси");
            continue;
        }    

}

let addQuestionsOption = prompt ("Желаете ли да отговорите на допълнителните въпроси? (Y/N)");

if (addQuestionsOption == "Y"){

    while (addAnswersCounter == 0){
        refrigeratorAvailable   = prompt (addQuestions.REFRIGERATOR_AVAILABLE);
        gasStoveAvailable       = prompt (addQuestions.GAS_STOVE_AVAILABLE);
        ovenAvailable           = prompt (addQuestions.OVEN_AVAILABLE);
        electricGrillAvailable  = prompt (addQuestions.ELECTRIC_GRILL_AVAILABLE);
        aspirationAvailable     = prompt (addQuestions.ASPIRATION_AVAILABLE);

        let addQuestionsAnswered = refrigeratorAvailable && gasStoveAvailable && ovenAvailable && electricGrillAvailable && aspirationAvailable;

        if (addQuestionsAnswered) {
            addAnswersCounter = 1;
        }
        else {
            alert ("Моля попълнете всички допълнителни въпроси!");
            continue;
        }
    }
 }
 else {
    refrigeratorAvailable == "N";
    gasStoveAvailable == "N";
    ovenAvailable == "N";
    electricGrillAvailable == "N";
    aspirationAvailable == "N";
 }

let mealTypeSelection = prompt  ("Какво ястие желаете да хапвате?(1) - Месно ястие; (2) - Вегетарианско ястие; (3) - Десерт; Моля посочете само номера на ястието: 1,2 или 3.");

  if(mealTypeSelection == "1" || "Месно ястие"){

    let meatPortionSize = prompt ("Какъв размер порция месо желаете? (1) - малка порция(450 грама); (2) - средна порция(750 грама); (3) - голяма порция(950) грама;  Моля посочете само номера на порцията: 1,2 или 3.");
    let meatCookDegree = prompt ("Моля изберете начин на приготвяне на месото! (1) - RARE; (2) - MEDIUM; (3) - WELL DONE; Моля посочете само номера!")

    alert ("Вашата поръчка е взета. Моля, изчакайте!")

    let canCookRareMeat =  (gasStoveAvailable == "N") 
                        && (electricGrillAvailable == "Y") 
                        && (minTempKitchen >= 36) 
                        && (minTempKitchen <=48) 
                        && (maxTempKitchen >=36) 
                        && (maxTempKitchen <= 48) 
                        && (aspirationAvailable == "Y") 
                        && (meatPortionSize == "малка порция (450 грама)" || "1"); 

    let canCookMeduimMeat = (ovenAvailable == "Y") 
                         || (countOfCooks == 5) 
                         || (meatPortionSize =="средна порция (750 грама)" || "2") 
                         || (nameOfChef == "Иван");   
                         
    let canCookWellDoneMeat = ((closingHours <= 22) || (nameOfSaucePerson = "Петър" || nameOfSaucePerson == "Радо"))  
                            && ((kitchenAreaSqM == 45) || ((countOfPans == 3) || (countOfPots==2)));                      
   
   if (meatCookDegree == "1" && canCookRareMeat){
    alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
   }                         
    else if (meatCookDegree =="2" && canCookMeduimMeat){
    alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    }
    else if (meatCookDegree == "3" && canCookWellDoneMeat){
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    }
    else{
        alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.")
    }
 }

  if(mealTypeSelection == "2" || "Вегетарианско ястие"){

    let vegMealSelection = prompt ("Моля изберете един от следните варианти: (1) - Вегетарианско; (2) - Веганско; (3) - Пескатерианско");

    alert ("Вашата поръчка е взета. Моля, изчакайте!")

    let canCookVegetarianMeal = (ovenAvailable == "N") 
                             || (electricGrillAvailable == "N") 
                             || (aspirationAvailable == "N");

    let canCookVeganMeal = (refrigeratorAvailable == "Y") 
                        && (nameOfChef == "Манол") 
                        && (countOfCooks >= 3) 
                        && (countOfCooks < 11)
                        && (countOfWaiters != 7);

    let canCookPescMeal = ((electricGrillAvailable == "Y") || (addQuestionsOption == "Y"))
                        && ((kitchenVolumeCubicM <13) || (sumOfCashEndOfDay < 158000));


    if (vegMealSelection == "1" && canCookVegetarianMeal){
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    } 
    else if (vegMealSelection == "2" && canCookVeganMeal){
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    }                   
    else if (vegMealSelection == "3" && canCookPescMeal){
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    }
    else {
        alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.")
    }
 }

  if (mealTypeSelection == "3" || "Десерт"){

    let desertTypeSelection = prompt ("Какъв десерт желаете да хапнете? (1) - Торта; (2) - Сладолед;");
    let addictedToSugar = prompt ("Пристрастени ли сте към захарта? (Y/N)");

    let canCookCake = ((refrigeratorAvailable == "Y") && (closingHours == 19) && (aspirationAvailable == "N") && (bankBalance >=15000) && (bankBalance <=50000))
                    || (nameOfChef == "Румен");

    if (desertTypeSelection == "1" && canCookCake){
        alert ("Вашата поръчка е взета. Моля, изчакайте!")
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
    }   
    else {
        alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.")
    }             

    if(desertTypeSelection == "2"){
        
        let iceCreamType = prompt ("Какъв вкус сладолед желаете? (1) - Ягода; (2) - Банан; (3) - Ванилия;");
        let canCookIceCream = (addictedToSugar == "N")
                            ||(iceCreamType == "1" || "Ягода");

        alert ("Вашата поръчка е взета. Моля, изчакайте!")

        if(desertTypeSelection == "2" && canCookIceCream) {
        alert ("Вашата поръчка е изпълнена успешно! Благодаря Ви, че хапнахте при нас!")
     }    
     else {
        alert("Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.")
     }               
    }
  }
