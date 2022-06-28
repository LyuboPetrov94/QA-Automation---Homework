// Задача 1
alert("Мазе Бот v1 на Вашите услуги");

// Задача 2

let visitorFirstName    = prompt("Как се казваш(първо име)?");
let visitorLastName     = prompt("Каква е твоята фамилия?");
let visitorAge          = prompt("На колко години си?");
let visitorGender       = prompt("Какъв е твоят пол? (мъж/жена)");

let isVisitorUnderaged  = visitorAge < 18;
let isVisitorAdult      = visitorAge >= 18;

let isVisitorMale       = visitorGender == "мъж";
let isVisitorFemale     = visitorGender == "жена";


if(isVisitorMale && isVisitorAdult) {
    alert (`Здравейте г-н ${visitorLastName}`);
}
else if (isVisitorFemale && isVisitorAdult){
    alert (`Здравейте г-жо ${visitorLastName}`);
}
else if (isVisitorMale && isVisitorUnderaged){
    alert ("Здрасти малкия! Не пускаме дечица тука! Бягай за бира!")
}
else if (isVisitorFemale && isVisitorUnderaged){
    alert ("Здрасти малката! Не пускаме дечица тука! Отивай да си играеш!")
}

/*  - ВАРИАНТ 

if (isVisitorMale) {
    if (isVisitorAdult){
        alert (`Здравейте г-н ${visitorLastName}`);
    }
    else if (isVisitorUnderaged){
        alert ("Здрасти малкия! Не пускаме дечица тука! Бягай за бира!")
    }
}
else if (isVisitorFemale){
    if (isVisitorAdult){
        alert (`Здравейте г-жо ${visitorLastName}`);
    }
    else if (isVisitorUnderaged){
        alert ("Здрасти малката! Не пускаме дечица тука! Отивай да си играеш!")
    }
}
*/

/* - ВАРИАНТ

if (isVisitorMale) {
    if (isVisitorAdult){
        alert (`Здравейте г-н ${visitorLastName}`);
    }
    else {
        alert ("Здрасти малкия! Не пускаме дечица тука! Бягай за бира!")
    }
}
else if (isVisitorFemale){
    if (isVisitorAdult){
        alert (`Здравейте г-жо ${visitorLastName}`);
    }
    else {
        alert ("Здрасти малката! Не пускаме дечица тука! Отивай да си играеш!")
    }
}
*/


if (isVisitorMale) {
    //if (isVisitorAdult){
    //alert (`Здравейте г-н ${visitorLastName}`);
    //}
    //else {
     //  alert ("Здрасти малкия! Не пускаме дечица тука! Бягай за бира!")

    let message = isVisitorAdult;
    ? `Здравейте г-н ${visitorLastName}`
    : "Здрасти малкия! Не пускаме дечица тука! Бягай за бира!";
     // тернарен (троен) оператор - има три отделни обстоятелства, които участват в него, механизъм за връшане на стойност, полезни са за връщане на съобщение или 
     // тип true/false резултат или числова стойност
     // if/else конструкции се използват когато искаме да кажем на системата да изпълни серия от инструкции/функции/действия в рамките на програмата
     // тернарния оператор в случея може да облекчи малко програмата, понеже само връщаме съобщение
     // ? ако е true
     // : ако е false
    
    
    }
}
else if (isVisitorFemale){
    //if (isVisitorAdult){
    //    alert (`Здравейте г-жо ${visitorLastName}`);
    //}
    //else {
    //    alert ("Здрасти малката! Не пускаме дечица тука! Отивай да си играеш!")
    //}

    let message = isVisitorAdult;
    ? `Здравейте г-жо ${visitorLastName}`
    : "Здрасти малката! Не пускаме дечица тука! Отивай да си играеш!"
    alert(message);
}

// Задача 3

if(visitorMale){
    alert(`Добре дошъл в мазето на баба ${visitorFirstName} ${visitorLastName}!
Ти си на ${visitorAge} години`);
}
else{
    alert(`Добре дошла в мазето на баба ${visitorFirstName} ${visitorLastName}!
Ти си на ${visitorAge} години`);
}

// Задача 4

let productIdAppleWine          = "ябълково вино";
let productIdSmokedMeat         = "пушено месо";
let productIdPlumJam            = "сливов мармалад";
let productIdMarinatedPeppers   = "мариновани чушки";
let productIdPiggyBank          = "прасенце касичка";

// Задача 5

let productIdAppleWineCount         = 10;
let productIdSmokedMeatCount        = 5;
let productIdPlumJamCount           = 9;
let productIdMarinatedPeppersCount  = 4;
let productIdPiggyBankAmount        = 184.35;

// Задача 6

let productIdAppleWineSerialNumber         = `C7544_${productIdAppleWineCount}`;
let productIdSmokedMeatSerialNumber        = `M7441_${productIdSmokedMeatCount}`;
let productIdPlumJamSerialNumber           = `S6491_${productIdPlumJamCount}`;
let productIdMarinatedPeppersSerialNumber  = `P7485_${productIdMarinatedPeppersCount}`;
let productIdPiggyBankSerialNumber         = `B6584_${productIdPiggyBankAmount}`;

// Задача 7

console.log(productIdAppleWine, productIdAppleWineCount, productIdAppleWineSerialNumber);
// alternative option
// console.log(`${productIdAppleWine} ${productIdAppleWineCount} ${productIdAppleWineSerialNumber}`);
console.log(productIdSmokedMeat, productIdSmokedMeatCount, productIdSmokedMeatSerialNumber);
console.log(productIdPlumJam, productIdPlumJamCount, productIdPlumJamSerialNumber);
console.log(productIdMarinatedPeppers, productIdMarinatedPeppersCount, productIdMarinatedPeppersSerialNumber);
console.log(productIdPiggyBank, productIdPiggyBankAmount, productIdPiggyBankSerialNumber);

// Задача 8

if(isVisitorAdult){

    let donationRespone = prompt("Искате ли да направите дарение? (да/не)");
    let isDonationProcessable = donationRespone == "да";

    if(isDonationProcessable){

        let donationAmount = prompt("Сумата на вашето дарение?");
        console.log(donationAmount);

        let donationTax = (donationAmount * 20) / 100;
        console.log(donationTax);

        let totalAmount = (+donationAmount) + donationTax;
        alert (`Дължите сума от ${totalAmount}`);
    }
    else{
        alert ("ЗАСРАМИ СЕ! ТИ СИ ЛОЩ ЧОВЕК!")
    }
}

