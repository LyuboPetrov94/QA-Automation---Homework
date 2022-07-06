function operationTurnOn() {
    applicationManager.isSystemTurnOn = true;
}

function operationLoad() {

    let robotHandId         = prompt("Въведете идентофокатор на роботска ръка");
    let isHandIdProcessable = robotHandId == 'A' ||
                              robotHandId == 'B' || 
                              robotHandId == 'C';
    let isHandIdUnoperatable = !isHandIdProcessable;

    if(isHandIdUnoperatable) {
        alert("Не разполгате с подобно устройство");
    }

    if(isHandIdProcessable) {
        applicationManager.activeHandId = robotHandId;
    }
}

function operationUnload() {
    applicationManager.activeHandId = null;
}

function operationMoveX() {
    let direction              = prompt("Въведете посока");
    let isDirectionProcessable = direction == 'left' ||
                                 direction == 'right';

    if(isDirectionProcessable) {

        // let moveStep = prompt("Въведете стойност на преместване");

        // // взимам посоката
        // let stepCoefficient = (direction == 'right')
        //                     ? moveStep 
        //                     : (-moveStep);
        let stepCoefficient = getStepCoefficient (direction, "right");


        // взимам активната ръка

        moveOperation(applicationManager.activeHandId, "X",stepCoefficient);  // подаване на аргументи на функция, динамично се създава поведение на база на очаквания
        //
        //move operation заменя долният код

        // if (applicationManager.activeHandId == 'A'){
        //     applicationManager.handAonX = stepCoefficient;
        // }

        // if (applicationManager.activeHandId == 'B'){
        //     applicationManager.handBonX = stepCoefficient;
        // }

        // if (applicationManager.activeHandId == 'C'){
        //     applicationManager.handConX = stepCoefficient;
        // }

        // присвоявам коректната стойност

    }


}
function operationMoveY() {

    let direction              = prompt("Въведете посока");
    let isDirectionProcessable = direction == 'left' ||
                                 direction == 'right';

    if(isDirectionProcessable) {
        //let moveStep = prompt("Въведете стойност на преместване");

        // взимам посоката
        //let stepCoefficient = (direction == 'up')
        //                    ? moveStep 
        //                    : (-moveStep);
        let stepCoefficient = getStepCoefficient(direction,"up");



        // взимам активната ръка

        moveOperation(applicationManager.activeHandId, "Y",stepCoefficient);
        //move operation заменя долният код

        // if (applicationManager.activeHandId == 'A'){
        //     applicationManager.handAonY = stepCoefficient;
        // }

        // if (applicationManager.activeHandId == 'B'){
        //     applicationManager.handBonY = stepCoefficient;
        // }

        // if (applicationManager.activeHandId == 'C'){
        //     applicationManager.handConY = stepCoefficient;
        // }

        // присвоявам коректната стойност

    }


}

// в отварящата и затваряща скоба на функцията могат да се създадат параметри, те са променливи, които получавар стойност динамично в момента на извикване на функцията
// променливите, които се декларират като параметри, нямат ключова дума пред себе си let или var, може да се използва в рамките на функцията, но стойноста и не се знае докато не се извика ф-ята
function moveOperation(handId,direction, stepCoefficient){

    let dynamicKey = `hand${handId}on${direction}`;
    applicationManager[dynamicKey] = stepCoefficient;

    // if (applicationManager.activeHandId == 'A'){
    //     applicationManager[dynamicKey] = stepCoefficient;
    //     //applicationManager.handAonY = stepCoefficient;
    //     //applicationManager['handAonY'] = stepCoefficient;
    //     // когато се изплолза [] в посочването на ключ от обекта, дава възможност да заменим идентификатора със стринг
    //     // вторият вариант позволява да се конструират ключове динамично
    // }

    // if (applicationManager.activeHandId == 'B'){
    //     applicationManager.handBonY = stepCoefficient;
    // }

    // if (applicationManager.activeHandId == 'C'){
    //     applicationManager.handConY = stepCoefficient;
    // }

}

function getStepCoefficient(direction, positiveDirection) {

    let moveStep = prompt("Въведете стойност на преместване");

    // взимам посоката
    let stepCoefficient = (direction == positiveDirection)
                        ? moveStep 
                        : (-moveStep);

    return stepCoefficient;
    //през return - механизъм, който може да върне стойност
}

function operationIdentify(){
    applicationManager.activeHoleCoefficient = getRandomNumber(1,5);
    
    //Math.random()
    // Math.random връща число от интервала от 0 до 1
    // обект Math се изписва с главна буква, такива имат за цел да покажат, че са по-особени
    // Math съдържа в себе си функции, които могат да извършват мат. операции
    // Math.floor(закръгля надолу) и Math.ceil(закръгля нагоре) - закръглят стойности
}




