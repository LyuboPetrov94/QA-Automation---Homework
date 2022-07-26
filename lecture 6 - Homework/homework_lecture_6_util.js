function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};


function isNumberSingleDigit (number)
{
    return number => 0 && number <= 9;
};

function isNumberTwoDigit (number)
{
    return number >= 10 && number <= 99 ;
};

function isNumberEven(number) {
    return number % 2 == 0;
}

function isNumberOdd(number) {
    // return number % 2 != 0;
    return !isNumberEven(number);
}
