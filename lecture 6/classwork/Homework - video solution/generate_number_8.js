function generateEightNumber(){

    let isOdd   =   globalUserData.isUserAdult() && 
                    globalUserData.isBodyTypeOverWeight() &&
                    globalUserData.doesUserConsumeSugar() &&
                    globalUserData.isConsumeOften;

    let isEven  =   globalUserData.isUserUnderaged() &&
                    globalUserData.isBodySubTypeAthletic() &&
                    globalUserData.isConsumeRarely() &&
                    globalUserData.doesUserConsumeFruitsAndVegetables;

    if (isOdd){

        while(true){
            let result = generateRandomNumber(1, 9);
            if(isOdd(result)) return result;
        }
    }

    if(isEven){
        while(true){
            let result = generateRandomNumber(1, 9);
            if(isEven(result)) return result;
        }
    }

    return 0;
}