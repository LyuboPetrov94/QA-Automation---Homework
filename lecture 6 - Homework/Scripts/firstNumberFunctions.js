
    function generateCardNumber1Before1965()
    { // задължително НЕЧЕТНА цифра
        let remainderOfDivison = 0;
        var randomNumber;
        var divisonResult;
        console.log(`възраст ${customerAge}`);
        while(remainderOfDivison == 0)
        {
            randomNumber = getRandomIntInclusive(1,7);
            console.log(`random number ${randomNumber}`);
            divisonResult = Math.floor(customerAge / randomNumber);
            console.log(`divisonResult ${divisonResult}`);
            remainderOfDivison = (divisonResult % 2);
            console.log(`remainderOfDivison ${remainderOfDivison}`);
        }

        if(divisonResult > 9)
        {
            divisonResult = +(divisonResult.toString()[1]);
        }

        return divisonResult;
    }

    function generateCardNumber1After1965()
    {// задължително ЧЕТНА цифра
        let remainderOfDivison = 1;
        var randomNumber;
        var divisonResult;
        console.log(`възраст ${customerAge}`);

        while(remainderOfDivison == 1)
        {
            randomNumber = getRandomIntInclusive(1,7);
            divisonResult = customerAge / randomNumber;
            divisonResult = Math.floor(divisonResult);
            remainderOfDivison = (divisonResult % 2);
        }

        if(divisonResult > 9)
        {
            divisonResult = +(divisonResult.toString()[1]);
        }

        return divisonResult;
    }

