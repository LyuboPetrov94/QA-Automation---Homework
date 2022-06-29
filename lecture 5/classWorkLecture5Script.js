let isApplicationRunning = true;
let isSystemTurnOn       = false;
let isSystemTurnOff      = true;

const commands = {
    EXIT    : "exit",
    TURNON  : "turnon",
    ON      : "on",
    STATUS  : "status",
    FINISH  : "finish",
};
// commands  - ОБЕКТ - обвивка - дава контекст 

const statusMessages = {
    ENTER_COMMAND : "Въведи команда?",
    END_APP       : "Програмата приключи",
    INIT_APP      : "Системата стартира успешно",
    TURNON_FAIL   : "Грешна команда! Трябва да включите системата",
    FINISH_END    : "Запълвам дупката",
    STATUS_END    : "Всичко е ОК",
    INCORRECT_COMMAND : "Грешна команда"

};

while (isApplicationRunning){
// безкраен цикъл
    let commandId = prompt(statusMessages.ENTER_COMMAND);

    if (commandId == commands.EXIT) {
        //break;
        alert(statusMessages.END_APP);
        isApplicationRunning = false;
        continue; 
        // обратното на break, fast-forward инструкция, прескача всичките конструкции които се намират непосредствено след него
        // и отива в началото на цикъла за повторна оценка, връща в началото на  цикъла, избягват се другите конструкции, които са след него
    }

    if (isSystemTurnOff){ 

        let isCommandProcessable = commandId == commands.TURNON 
                                    ||
                                    commandId == commands.ON;
            // && - логическо И - логически е еквивалентно на събиране, математически на умножение
            // || - логическо ИЛИ

        //if (!isSystemTurnOn == false){
        // ! - удивителен знак - означава обратното/ false/ логическо отрицание/ НЕ Е
        //if (isSystemTurnOn == false){
            // друг вариант е да се направи променлива, която да очаква, че ще бъде true само и единствено, когато това, което се очаква е false
            // пример : let isSystemTurnOff = true; - да се пише по-малко код и по-лесно да се чете

        if(isCommandProcessable){

           // let message = (isSystemTurnOn) ? "Системата е вече включена" : "Системата стартира успешно";
            isSystemTurnOn = true;
            alert (statusMessages.INIT_APP);
            //alert (message);
            //console.log("Системата стартира успешно");
            }
            else{
                alert(statusMessages.TURNON_FAIL);
                continue;
            }
    }


    
    

    if (commandId == commands.EXIT) {
        //break;
        alert(statusMessages.END_APP);
        isApplicationRunning = false;
        continue; 
        // обратното на break, fast-forward инструкция, прескача всичките конструкции които се намират непосредствено след него
        // и отива в началото на цикъла за повторна оценка, връща в началото на  цикъла, избягват се другите конструкции, които са след него
    }

   // if (isSystemTurnOn){
     if(commandId == commands.FINISH){
         alert(statusMessages.FINISH_END);
     }
    else if(commandId = commands.STATUS){
        alert(statusMessages.STATUS_END);
     }
    else {
        alert(statusMessages.INCORRECT_COMMAND);
    }
    //}
    // else {
    //     alert("Системата не е включена! Ползвай командата turnon");
    // }




    // else if (commandId == "finish" && isSystemTurnOn){
    //     alert("Запълвам дупката");
    //     //console.log("Запълвам дупката");
    // }
    // else if (commandId == "status" && isSystemTurnOn){
    //     alert("Всичко е ОК");
    //     //console.log("Всичко е ОК");
    // }
    // else if (commandId == "exit"){
    //     alert("Програмата приключи");
    //     isApplicationRunning = false; // с променлива се прави по-разбираемо за какво става на въпрос в цикъла
    //     //break; // break - част от езика за програмиране - означава напусни цикъла, forced exit/break, при безкраен цикъл
    // }

    // else {
    //     alert("Невалидна команда");
    //     //console.log("Невалидна команда");
    // }

}
// while - повтарящ се if, if се изпълнява само веднъж, докато while е if, който проверява дали условието в него е вярно,
// изпълнява програмата и се връща за повторна проверка, безкраен цикъл
//безкрайните цикли са трудни за менажиране - те блокират т.н UI нишка
// безкрайният цикъл не дава възможност на Console (отделен процес свързан с UI) да се актуализира

