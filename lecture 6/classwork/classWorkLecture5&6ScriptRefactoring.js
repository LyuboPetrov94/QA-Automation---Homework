while (applicationManager.isApplicationRunning){

    let commandId = prompt(statusMessages.ENTER_COMMAND);

    if(commandId == commands.TURNON) {
        // ще извикаме подпрограма - механизъм за организиране на код / функионалност   = ФУНКЦИЯ
        operationTurnOn();
    }

    if(commandId == commands.LOAD) {
        operationLoad();
    }

    // 0 , "" - празен стринг, и null са falsey стойности
    //числа, стринг са truty стойности - truthy са всички стойности допринасящи за запълване на данни
    // undefined - означава не знам, дигиталната репрезентация в несигурност на системата, default-на стойност в JS на данни
    // null - няма стойност

    if(commandId == commands.UNLOAD) {
        operationUnload();
    }

    if(commandId == commands.MOVEX) {
        operationMoveX();
    }

    if(commandId == commands.MOVEY) {
        operationMoveY();
    }

    if(commandId == commands.IDENTIFY){
        operationIdentify();
    };