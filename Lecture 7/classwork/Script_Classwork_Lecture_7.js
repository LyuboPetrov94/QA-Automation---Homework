//while(applicationManager.isApplicationRunning) {

    //let commandId = prompt(statusMessages.ENTER_COMMAND);

const commandTurnOnButton       = document.getElementById("command-turnon"); 
    //правим ги с const за да не се сменя стойността

const textCommandHtmlInput      = document.getElementById("text-command");
const processCommandHtmlButton  = document.getElementById("process-command");


const state = {
    isTurnOn : false
};

// взема бутона за стартиране на приложението
//let commandTurnOnButton = document.getElementById("command-turnon");

//когато - бутона бъде натиснат - искам да направя нещо
// прави се чрез -- слушател за събития
//function sayHello
function bootstrapSystem(eventObject){
    console.log (eventObject);

    state.isTurnOn = !state.isTurnOn; //true

    if(state.isTurnOn){
        operationTurnOn();
    }
    else{
        operationTurnOff();
    }

    commandTurnOnButton.innerText       = state.isTurnOn ? "Turn off" : "Turn on";
    textCommandHtmlInput.disabled       = !textCommandHtmlInput.disabled;
    processCommandHtmlButton.disabled   = !processCommandHtmlButton.disabled; //processCommandHtmlButton.disabled  = false;
}

commandTurnOnButton.addEventListener ('click',bootstrapSystem)

processCommandHtmlButton.addEventListener('click', function(eventObject){ // анонимна функция, механизъм за създаване на код, който има логика само и единствено в едно конкретно място
    // ако няма да се вижда повече кога освен в рамките на EveneListnere, няма нужда да се създава външна функция като bootstrapSystem,
    // може да се разпише цялото тяло директно в рамките на аргумента
    // възможно е в JS и се нарича "функция като аргумент на функция", често се ползва
    // ползва се за да се избегне нуждата да се пише отделна функция, която ще се ползва само на едно място
    
    eventObject.preventDefault(); // страницата няма да се презарежда когато се кликне бутона Process , по default тя се презареждаше

    let commandId = textCommandHtmlInput.value; 

    if(commandId == commands.TURNON) {
        operationTurnOn();
    }

    if(commandId == commands.LOAD) {
        operationLoad();
    }

    if(commandId == commands.UNLOAD) {
        operationUnload();
    }

    if(commandId == commands.MOVE_X) {
        operationMoveX();
    }

    if(commandId == commands.MOVE_Y) {
        operationMoveY();
    }

    if(commandId == commands.IDENTIFY) {
        operationIdentify();
    }

    textCommandHtmlInput.value = '';
});


// addEventListener - ф-я съдържаща 2 аргумента - първия е стринг (какво е събитието), вторият аргумент ще е функция
// в JS е позволено една функция да е аргумент на друга функция



// console.log(textInput.value =='test');



//     if(commandId == commands.TURNON) {
//         operationTurnOn();
//     }

//     if(commandId == commands.LOAD) {
//         operationLoad();
//     }

//     if(commandId == commands.UNLOAD) {
//         operationUnload();
//     }

//     if(commandId == commands.MOVE_X) {
//         operationMoveX();
//     }

//     if(commandId == commands.MOVE_Y) {
//         operationMoveY();
//     }

//     if(commandId == commands.IDENTIFY) {
//         operationIdentify();
//     }


    // if(commandId == commands.EXIT) {

    //     alert(statusMessages.END_APP);
    //     isApplicationRunning = false;
    //     continue;
    // }

    // if(applicationManager.isSystemTurnOff) {

    //     let isCommandProcessable =  commandId == commands.TURNON 
    //                                 ||  
    //                                 commandId == commands.ON;

    //     if(isCommandProcessable) {

    //         applicationManager.isSystemTurnOn = true;
    //         alert(statusMessages.INIT_APP);
    //     }
    //     else {
    //         alert(statusMessages.TURNON_FAIL);
    //         continue;
    //     }
    // }

    // if(commandId == commands.FINISH) {
    //     alert(statusMessages.FINISH_END);    
    // }
    // else if(commandId == commands.STATUS) {
    //     alert(statusMessages.STATUS_END);    
    // }
    // else {
    //     alert(statusMessages.INCORECT_COMMAND);
    // }
//}