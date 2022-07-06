const applicationManager = {
    isApplicationRunning : true,
    isSystemTurnOn       : false,
    isSystemTurnOff      : true,
    activeHandId         : null    // стойност NULL - означава, че в момента няма стойност

    handAonX                : 1,
    handAonY                : 1,

    handBonX                : 1,
    handBonY                : 1,

    handConX                : 1,
    handConY                : 1,

    activeHoleCoefficient   :-1 // ползва -1 за да не ползва null или 0, но може да се ползва и null

}
// свърани са идеино с цялото приложение, съдържа стойности свързани с цялата информация към данните в системата
// обектите създават ключови думи, речник, който можем да ползваме

//let isApplicationRunning = true;
//let isSystemTurnOn       = false;
//let isSystemTurnOff      = true;


const applicationData = {
    oxigenQuantity  : 168,
    gasQuantity     : 90
};

//let oxigenQuantity  = 168;
//let gasQuantity     = 90;
// - и двара варианта са до голяма степен идентични. варината с const и обект дава допълнителна обвивка, с която може да се разграничават стойностите и да се 
// свържат с applicationData, на този етап просто организация; дава възможност да се класифицират нещата



const commands = {
    EXIT    : "exit",
    TURNON  : "turnon",
    ON      : "on",
    LOAD    : "load",
    UNLOAD  : "unload",
    MOVE_X  : "movex",
    MOVE_Y  : "movey",
    IDENTIFY : "identify",
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