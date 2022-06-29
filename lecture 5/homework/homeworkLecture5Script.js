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
    MAX_TEMO_KITCHEN    : "Каква е максималната температура в кухнята?",
    BANK_BALANCE        : "Колко парички имате в банковата си сметка?",
    DAILY_TURNOVER      : "Колко парички е дневният оборот на ресторанта ви?",
    OPENING_HOURS       : "В колко часа отваряте?",
    CLOSING_HOURS       : "В колко часа затваряте?"
};

const kitchenAreaSqM = (mandatoryQuestions.KITCHEN_LENGHT_CM * mandatoryQuestions.KITCHEN_WIDTH_CM) * 0.0001;

const addQuestions = {
    REFRIGERATOR_AVAILABLE   : "Разполагате ли с хладилник? (Y/N)",
    GAS_STOVE_AVAILABLE      : "Разполагате ли с газов котлон? (Y/N)",
    OVEN_AVAILABLE           : "Разполагате ли с конвектомат (Y/N)?",
    ELECTRIC_GRILL_AVAILABLE : "Разполагате ли с електрическа скара? (Y/N)",
    ASPIRATION_AVAILABLE     : "Разполагате ли с аспиратор (Y/N)?"
};

const mealChoice = {
    MEAT_CHOICE     : "Месно ястие" || "1",
    VEG_CHOICE      : "Вегетарианско ястие" || "2",
    DESERT_CHOICE   : "Десерт" || "3"
};

const meatPortionSize = {
    SMALL_MEAT_PORTION_SIZE     : "малка порция (450 грама)" || "1",
    MEDIUM_MEAT_PORTION_SIZE    : "средна порция (750 грама)" || "2",
    LARGE_MEAT_PORTION_SIZE     : "голяма порция (950 грама)" || "3",
};

const meatCookDegree = {
    RARE_COOKED_MEAT        : "RARE",
    MEDUIM_COOKED_MEAT      : "MEDIUM",
    WELL_DONE_COOKED_MEAT   : "WELL DONE"
};

const canCookRareMeat =    (addQuestions.GAS_STOVE_AVAILABLE == "N") 
                        && (addQuestions.ELECTRIC_GRILL_AVAILABLE == "Y") 
                        && (mandatoryQuestions.MIN_TEMP_KITCHEN >= 36) 
                        && (mandatoryQuestions.MIN_TEMP_KITCHEN <=48) 
                        && (mandatoryQuestions.MAX_TEMO_KITCHEN >=36) 
                        && (mandatoryQuestions.MAX_TEMO_KITCHEN <= 48) 
                        && (addQuestions.ASPIRATION_AVAILABLE == "Y") 
                        && (meatPortionSize.SMALL_MEAT_PORTION_SIZE == "малка порция (450 грама)" || "1"); 

const canCookMeduimMeat =  (addQuestions.OVEN_AVAILABLE == "Y") 
                        || (mandatoryQuestions.COUNT_COOKS == 5) 
                        || (meatPortionSize.MEDIUM_MEAT_PORTION_SIZE =="средна порция (750 грама)" || "2") 
                        || (mandatoryQuestions.NAME_OF_CHEF == "Иван");

const canCookWellDoneMeat = (mandatoryQuestions.CLOSING_HOURS <= 22
                         || (mandatoryQuestions.NAME_SAUCE_PERSON = "Петър" || mandatoryQuestions.NAME_SAUCE_PERSON == "Радо"))  
                         && (kitchenAreaSqM == 45) 
                         || ((mandatoryQuestions.COUNT_PANS == 3) || (mandatoryQuestions.COUNT_POTS==2));                      

const vegMealOptions {
    VEGETARIAN_MEAL : "ВЕГЕТАРИАНСКО",
    VEGAN_MEAL      : "ВЕГАНСКО",
    PESC_MEAL       : "ПЕСКАТЕРИАНСКО"
};                         

const canCookVegetarianMeal = (addQuestions.OVEN_AVAILABLE == "N") 
                            || (addQuestions.ELECTRIC_GRILL_AVAILABLE == "N") 
                            || (addQuestions.ASPIRATION_AVAILABLE == "N");

const canCookVeganMeal = (addQuestions.REFRIGERATOR_AVAILABLE == "Y") 
                        && (mandatoryQuestions.NAME_OF_CHEF == "Манол") 
                        && (mandatoryQuestions.COUNT_COOKS >= 3) 
                        && (mandatoryQuestions.COUNT_COOKS < 11)
                        && (mandatoryQuestions.COUNT_WAITERS != 7);
                        
const canCookPescMeal = ()      

alert ("Кухненски робот 101 е на Ваше разположение");
alert ("Моля отговорете на следващите въпроси");















