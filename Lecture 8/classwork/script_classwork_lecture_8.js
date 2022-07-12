// Xpath --->>>  /html/body/table/tbody/tr[1]/td/div

//const calculatorDisplayHtmlDiv = document.getElementById("calculator-display");
//document.querySelector("#calculator-display"); - quertySelector - получава специфичната номенклатура със специфичен знак отпред
//по-препоръчителен в съврем. контекст защото можем да изпълняваме и друг тип повиквания на елементи
const calculatorDisplayHtmlDiv = document.querySelector("#calculator-display");
console.log(calculatorDisplayHtmlDiv);

//const numberCollectionHtmlButton = document.getElementsByClassName("number");
//document.querySelector(".number");
// const numberCollectionHtmlButton = document.querySelector(".number");
// console.log(numberCollectionHtmlButton);
const numberCollectionHtmlButton = document.querySelectorAll(".number"); // numberCollectionHtmlButton - МАСИВ, еквивалентно на обекта, обекта има ключ(текст) и стойност, МАСИВА има число(индекс) и стойност
// console.log(numberCollectionHtmlButton);
// console.log(numberCollectionHtmlButton[0]);// нотация за избиране на елемент от МАСИВ, ограждане с средна скоба []
// ВСИЧКИ МАСИВИ В JS ЗАПОЧВАТ ОТ 0!!!!


// querySelector връща първият елемент, който намери - излиза в console.log като HTML collection
// querySelectorAll - когато искаме да вземем всички елементи, които могат да попаднат в логиката - излиза в console.log като NodeList

// const xpathElementSelected = document.querySelector("/html/body/table/tbody/tr[3]/td[3]/button");
// console.log(xpathElementSelected); 
// с Xpath не става 


//let numberofHtmlElementsInCollection = 10;
//специално property на масивите - .lenght - пази количеството не елементите които са в масива в момнета

const Calculator = {

    // leftOperand : null,
    // rigtOperand : null,

    memory      : null,
    operand     : '',
    operation   : null,


    getmemory(){
        return Calculator.memory;
    },

    getOperad(){
        return Calculator.operand;
    },

    addOperand(element){

        Calculator.operand = Calculator.operand + element;

        // if(Calculator.leftOperand == null){
        //     Calculator.leftOperand = Calculator.leftOperand + element;
        // }

        // if(Calculator.rigtOperand == null){
        //     Calculator.rigtOperand = Calculator.rigtOperand + element;
        // }
    },

    processOperation(){
        if(Calculator.operation){
            if(Calculator.operation == '+'){
                return Calculator.memory = Calculator.memory + (+Calculator.operand);
            }
            if(Calculator.operation == '-'){
                return Calculator.memory = Calculator.memory - (+Calculator.operand);
            }
            if(Calculator.operation == '*'){
                return Calculator.memory = Calculator.memory * (+Calculator.operand);
            }
            if(Calculator.operation == '/'){
                return Calculator.memory = Calculator.memory / (+Calculator.operand);
            }
        }  
    },

    addOperation(operation){

        Calculator.memory = (Calculator.operation) ? Calculator.processOperation() : +Calculator.operand;
        Calculator.operation = operation;
        Calculator.operand = '';


        // if(Calculator.operation){
        //     Calculator.memory = this.processOperation();

        //     if(Calculator.operation == '+'){
        //         Calculator.memory = Calculator.memory + (+Calculator.operand);
        //     }
        //     if(Calculator.operation == '-'){
        //         Calculator.memory = Calculator.memory - (+Calculator.operand);
        //     }
        //     if(Calculator.operation == '*'){
        //         Calculator.memory = Calculator.memory * (+Calculator.operand);
        //     }
        //     if(Calculator.operation == '/'){
        //         Calculator.memory = Calculator.memory / (+Calculator.operand);
        //     }
        // //Calculator.memory = +Calculator.operand;
        // }
        // else{
        //     Calculator.memory = +Calculator.operand;
        // }

        // //Calculator.memory = +Calculator.operand;
        //  Calculator.operation = operation;
    }
};



//let finalResult = null;
//let activeAritmeticOperation = null;



 // Всички числа
 // =================================

const numberQueryCollectionHtmlButton = document.querySelectorAll(".number");

let currentElementIndex = 0;

while( currentElementIndex < numberQueryCollectionHtmlButton.length) {
    
    const buttonElement = numberQueryCollectionHtmlButton[currentElementIndex];
    buttonElement.addEventListener('click', function(e) {

        //calculatorDisplayHtmlDiv.innerHTML = '';
        Calculator.addOperand(buttonElement.innerText);
        calculatorDisplayHtmlDiv.innerHTML = Calculator.getOperad();

        //const numberData = +buttonElement.innerText;

        // if(activeAritmeticOperation){
        //     if(activeAritmeticOperation == '+'){
        //         finalResult = finalResult + numberData;
        //     }

        //     if(activeAritmeticOperation == '-'){
        //         finalResult = finalResult - numberData;
        //     }
        //     if(activeAritmeticOperation == '*'){
        //         finalResult = finalResult * numberData;
        //     }
        //     if(activeAritmeticOperation == '/'){
        //         finalResult = finalResult / numberData;
        //     }
        // }

        // if (finalResult == null){
        //     finalResult = numberData;
        //     calculatorDisplayHtmlDiv.innerHTML = finalResult;
        // }

        // //console.log(e);
        // console.log(buttonElement.innerText);
    });

    //console.log(numberCollectionHtmlButton[currentElementIndex]);
    // увеличаване на индекса
    currentElementIndex = currentElementIndex + 1;
}
 // Всички операции
 // =================================

const operationQueryCollectionHtmlButton = document.querySelectorAll(".operation");

let index = 0;
while(index < operationQueryCollectionHtmlButton.length) {

    const buttonElement = operationQueryCollectionHtmlButton[index];
    buttonElement.addEventListener('click', function() {
        //console.log(buttonElement.innerText);
        //activeAritmeticOperation = buttonElement.innerText;
        Calculator.addOperation(buttonElement.innerText);
        calculatorDisplayHtmlDiv.innerHTML = Calculator.getmemory();
        //calculatorDisplayHtmlDiv.innerHTML = finalResult;

    });
    index = index + 1;
}








