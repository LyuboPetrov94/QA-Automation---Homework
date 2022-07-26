function generateThirdNumber()
{
    if( customerAge >= 18){
        return 0;
    };

    let customerMotherBirthYear = +prompt("Година на раждане на майката");
    console.log(`maika ${customerMotherBirthYear}`);

    let customerFatherBirthYear = +prompt("Година на раждане на бащата");
    console.log(`bashta ${customerFatherBirthYear}`);

    let lastDigitMotherBirthYear    =  customerMotherBirthYear.toString()[3];
    let lastDigitFatherBirthYear    =  customerFatherBirthYear.toString()[3];
    let sameLastDigits              =  lastDigitMotherBirthYear == lastDigitFatherBirthYear;

    let secondToLastDigitMotherBirthYear = customerMotherBirthYear.toString()[2];

    if (sameLastDigits)
    {
        return secondToLastDigitMotherBirthYear;
    }
     else
        {
            return lastDigitFatherBirthYear;
        };
}