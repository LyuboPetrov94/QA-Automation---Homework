function operationTurnOn() {
    applicationManager.isSystemTurnOn = true;
}

function operationTurnOff(){
    applicationManager.isSystemTurnOn = false;
}



function operationLoad() {

    const activeHandHtmlSpan = document.getElementById("active-hand");
    const activeHandXHtmlSpan   = document.getElementById("active-hand-x");
    const activeHandYHtmlSpan   = document.getElementById("active-hand-y");


    let robotHandId         =   prompt("Въвдете идентификатор на роботска ръка");
    let isHandIdProcessable =   robotHandId == 'A' || 
                                robotHandId == 'B' || 
                                robotHandId == 'C';
    let isHandIdUnoperatable = !isHandIdProcessable;

    if(isHandIdUnoperatable) {
        //alert("Не разполагате с подобно устройство");
        terminal("Не разполагате с подобно устройство");
    }

    if(isHandIdProcessable) {
        applicationManager.activeHandId     = robotHandId;

        panelRender(
            applicationManager.activeHandId, 
            applicationManager[`hand${robotHandId}onX`], 
            applicationManager[`hand${robotHandId}onY`]
            );
        // activeHandHtmlSpan.innerHTML        = applicationManager.activeHandId;
        // activeHandXHtmlSpan.innerHTML       = applicationManager[`hand${robotHandId}onX`];
        // activeHandYHtmlSpan.innerHTML       = applicationManager[`hand${robotHandId}onY`];

    }
}

function operationUnload() {
    applicationManager.activeHandId = null;
}

function operationMoveX() {

    let direction               =   prompt("Въведете посока");
    let isDirectionProcessable  =   direction == 'left' || 
                                    direction == 'right';
    
    if(isDirectionProcessable) {
        // let moveStep = prompt("Въведете стойност на преместване");

        // // взимам посоката
        // let stepCoefficient = (direction == 'left') 
        //                       ? moveStep 
        //                       : (-moveStep);
        let stepCoefficient = getStepCoefficient(direction, "right");


        // взимам активната ръка 
        moveOperation(applicationManager.activeHandId, "X", stepCoefficient);

        // if(applicationManager.activeHandId == 'A') {
        //     applicationManager.handAonX = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'B') {
        //     applicationManager.handBonX = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'C') {
        //     applicationManager.handConX = stepCoefficient;
        // }
    }
}

function operationMoveY() {

    let direction               =   prompt("Въведете посока");
    let isDirectionProcessable  =   direction == 'up' || 
                                    direction == 'down';
    
    if(isDirectionProcessable) {
        // let moveStep = prompt("Въведете стойност на преместване");

        // // взимам посоката
        // let stepCoefficient = (direction == 'up') 
        //                       ? moveStep 
        //                       : (-moveStep);
        let stepCoefficient = getStepCoefficient(direction, "up");


        // взимам активната ръка 
        moveOperation(applicationManager.activeHandId, "Y", stepCoefficient);
        // if(applicationManager.activeHandId == 'A') {
        //     applicationManager.handAonY = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'B') {
        //     applicationManager.handBonY = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'C') {
        //     applicationManager.handConY = stepCoefficient;
        // }
    }
}

function moveOperation(handId, direction, stepCoefficient) {

    let dynamicKey = `hand${handId}on${direction}`;
    applicationManager[dynamicKey] = stepCoefficient;

    panelRender(
        applicationManager.activeHandId, 
        applicationManager[`hand${applicationManager.activeHandId}onX`], 
        applicationManager[`hand${applicationManager.activeHandId}onY`]
        );
}

function getStepCoefficient(direction, positiveDirection) {

    let moveStep = prompt("Въведете стойност на преместване");

    // взимам посоката
    let stepCoefficient = (direction == positiveDirection) 
                          ? moveStep 
                          : (-moveStep);

    return stepCoefficient;
}

function operationIdentify() {
    applicationManager.activeHoleCoefficient = getRandomNumber(1, 5);
}