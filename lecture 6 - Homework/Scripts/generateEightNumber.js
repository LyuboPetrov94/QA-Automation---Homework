function generateEightNumber()
{
    let isNumberOdd = (customerAge >= 18) &&
                      userData.isBodyTypeOverweight() &&
                      userData.consumationOften() &&
                      userData.doesUserConsumeSugar();

    let isNumberEven = (customerAge < 18) &&
                        userData.isBodySubTypeAthletic() &&
                        userData.consumationRarely() &&
                        userData.doesUserConsumeFruitsAndVegetables();                 


    if(isNumberOdd)
    {
        while(true)
        {
            let result = getRandomIntInclusive(1, 9);
            if(isNumberOdd(result))
            {
                return result;
            };
        };
    };

    if(isNumberEven)
    {
        while(true)
        {
            let result = getRandomIntInclusive(1, 9);
            if(isNumberEven(result))
            {
                return result;
            };
        };
    };

    return 0;
};