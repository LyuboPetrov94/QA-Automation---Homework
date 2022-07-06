function generateFirstNumber(){

    const customerYear = +(prompt("Година на раждане"));
    // с + символ - prompt e стринг и с + може да се изваждат и числови стойности - трансформира стринга в положително число

    let isCardNumberOdd = customerYear < 1965;
    let isCardNumberEven = customerYear > 1965;
    let isCardNumberSpecial = customerYear == 1965;

    let processedNumber = processCustomerAge(customerYear);
    let cardNumber      = isNumberTwoDigits(processedNumber)
                         ? Math.floor(processedNumber / 10)
                         :processedNumber;
    



    if(isCardNumberOdd){
        
        // let processedNumber = processCustomerAge(customerYear);
        // let cardNumber      = isNumberTwoDigits(processedNumber)
        //                      ? Math.floor(processedNumber / 10)
        //                      :processedNumber;

        // // проверка за двуцифрено число 
        // if(isNumberTwoDigits(processedNumber)){ // if-a получава условие стойността на функцията
        //     //взимане на първа цифра от число
        //     let firstNumber = Math.floor(processedNumber / 10);

        // //     if(isOdd(firstNumber)){
        // //         return firstNumber;
        // //     }
        // //    // else{ - ненужен else при положение, че return приключва изпълнението на функцията
        // //         return (firstNumber +1);
        // // горното разписано като тернарен оператор
        // return isOdd(firstNumber) ? firstNumber : firstNumber + 1;
     //   }
                        // RETURN - приключва изпълнението на функцията; като break във функция
        // if(isOdd(processedNumber)){
        //     return processedNumber;
        // }
        // //else{- ненужен else при положение, че return приключва изпълнението на функцията
        //     return (processedNumber +1);
        // return isOdd(processedNumber) ? processedNumber : processedNumber + 1;
        return isOdd(cardNumber) ? cardNumber : cardNumber + 1;

    }
    
    if(isCardNumberEven){
        // let processedNumber = processCustomerAge(customerYear);
        // let cardNumber      = isNumberTwoDigits(processedNumber)
        //                      ? Math.floor(processedNumber / 10)
        //                      :processedNumber;
         return isEven (cardNumber) ? cardNumber : cardNumber + 1;

    }
    
    if(isCardNumberSpecial){
        return 0;
        
    }
}


function processCustomerAge (customerYear){

    let currentYear         = +(new Date().getFullYear());
    let customerAge         = currentYear - (+customerYear);
    globalUserData.isAdult  = customerAge >=18;

    let randomNumber = generateRandomNumber(1, 7);

    return customerAge / randomNumber;
}





