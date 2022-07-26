function generateSecondNumber()
{
    let customerGender = prompt("Посочете вашият пол. мъж/жена");
    let customerGenderMale = customerGender == "мъж";
    let customerGenderFemale = customerGender == "жена";

    if(customerGenderMale)
    {
        return 1;
    }

    if(customerGenderFemale)
    {
        return 3;
    }

    while( true )
    {
        let randomNumber = getRandomIntInclusive( 1, 9 );
        let isRandomNumberValid = randomNumber != 1
                                && randomNumber != 3;
        if( isRandomNumberValid )
        {
            return randomNumber;
        }
    }
}