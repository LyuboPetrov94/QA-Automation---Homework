function generateThirdNumber(){
    
    if(globalUserData.isAdult){
        return 0;
    }

    let motherBirthYear = +prompt("Дата на раждане на майка?");
    let fatherBirthYear = +prompt("Дата на раждане на баща?");
    let isParentBirthDaySameTime = motherBirthYear == fatherBirthYear;

    let lastDigitMotherBirthYear = motherBirthYear % 10;
    let lastDigitFatherBirthYear = fatherBirthYear % 10;
    let isProcessable            = lastDigitMotherBirthYear == lastDigitFatherBirthYear;

    let secondToLastDigitMotherBirthYear = Math.floor ((motherBirthYear % 100) % 10);

    return (isProcessable) 
    ? secondToLastDigitMotherBirthYear
    : lastDigitFatherBirthYear

    
    // if(isProcessable){
    //     return secondToLastDigitMotherBirthYear;
    // }
    // return lastDigitFatherBirthYear;



}
