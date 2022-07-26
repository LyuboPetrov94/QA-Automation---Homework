
while ( answersCounter == 0 ) {
    questionAnswers.clientBirthYear = +prompt(questions.CUSTOMER_BIRTH_YEAR);

    let birthAnswered = questionAnswers.clientBirthYear;

    if(birthAnswered){
        answersCounter = 1;
    }
    else {
        alert ("Не сте въвели годин на раждане! Моля посочете");
        continue;
    }    
}
 // ПЪРВО ЧИСЛО ==>>
let currentYear         = +(new Date().getFullYear());
let customerAge = currentYear - (+questionAnswers.clientBirthYear);



if (questionAnswers.clientBirthYear == 1965)
{
    cardNumbers.firstNumber = 0;
}
else if(questionAnswers.clientBirthYear < 1965)
{
    cardNumbers.firstNumber = generateCardNumber1Before1965();
}
else if(questionAnswers.clientBirthYear > 1965)
{
    cardNumbers.firstNumber = generateCardNumber1After1965();
}
globalCardData.processOddPositionNumber(cardNumbers.firstNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.firstNumber);
console.log( `Първа цифра ${cardNumbers.firstNumber}` );
 // <<== ПЪРВО ЧИСЛО 


//ВТОРО ЧИСЛО ==>>

 if( cardNumbers.firstNumber == 0 )
 {
    cardNumbers.secondNumber = 9;
 }
 else
 {
    cardNumbers.secondNumber = generateSecondNumber();
 }
 globalCardData.processEvenPositionNumber(cardNumbers.secondNumber);
 globalCardData.accumulateCardNumberBarCode(cardNumbers.secondNumber);
 console.log( `Втора цифра ${cardNumbers.secondNumber}` );
 // <<== ВТОРО ЧИСЛО 


//ТРЕТО ЧИСЛО ==>>
cardNumbers.thirdNumber = generateThirdNumber();
globalCardData.processOddPositionNumber(cardNumbers.thirdNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.thirdNumber);
console.log( `Трета цифра ${cardNumbers.thirdNumber}` );
 // <<== ТРЕТО ЧИСЛО 



//ЧЕТВЪРТО ЧИСЛО ==>>
cardNumbers.fourthNumber = generateFourthNumber();
globalCardData.processEvenPositionNumber(cardNumbers.fourthNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.fourthNumber);
console.log( `Четвърта цифра ${cardNumbers.fourthNumber}` );
// <<== ЧЕТВЪРТО ЧИСЛО 


//ПЕТО ЧИСЛО ==>>
cardNumbers.fifthNumber = generateFifthNumber();
globalCardData.processOddPositionNumber(cardNumbers.fifthNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.fifthNumber);
console.log( `Пета цифра ${cardNumbers.fifthNumber}` );
// <<== ПЕТО ЧИСЛО 

//ШЕСТО ЧИСЛО ==>>
cardNumbers.sixthNumber = generateSixthNumber(cardNumbers.firstNumber, cardNumbers.secondNumber, cardNumbers.thirdNumber, cardNumbers.fourthNumber, cardNumbers.fifthNumber);
globalCardData.processEvenPositionNumber(cardNumbers.sixthNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.sixthNumber);
console.log( `Шеста цифра ${cardNumbers.sixthNumber}` );
// <<== ШЕСТО ЧИСЛО 

//СЕДМО ЧИСЛО ==>>
cardNumbers.seventhNumber = generateSeventNumber(cardNumbers.firstNumber, cardNumbers.secondNumber, cardNumbers.thirdNumber, cardNumbers.fourthNumber, cardNumbers.fifthNumber, cardNumbers.sixthNumber);
globalCardData.processOddPositionNumber(cardNumbers.seventhNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.seventhNumber);
console.log( `Седма цифра ${cardNumbers.seventhNumber}` )
// <<== СЕДМО ЧИСЛО 

//ОСМО ЧИСЛО ==>>
cardNumbers.eightNumber = generateEightNumber();
globalCardData.processEvenPositionNumber(cardNumbers.eightNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.eightNumber);
console.log( `Осма цифра ${cardNumbers.eightNumber}` );
// <<== ОСМО ЧИСЛО 

//ДЕВЕТО ЧИСЛО ==>>
cardNumbers.ninthNumber = generateNinthNumber();
globalCardData.processOddPositionNumber(cardNumbers.ninthNumber);
globalCardData.accumulateCardNumberBarCode(cardNumbers.ninthNumber);
console.log( `Девета цифра ${cardNumbers.ninthNumber}` );
// <<== ДЕВЕТО ЧИСЛО 

console.log(`Баркодът на вашата карта е ${globalCardData.getCardBarCode()}`);

