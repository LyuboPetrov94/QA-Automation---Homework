function generateSeventNumber(n1, n2, n3, n4, n5, n6)
{
// ако ПЪРВА, ТРЕТА и ПЕТА цифра са четни, то седма цифра е 0
let isDigit0 = isNumberEven(n1) && isNumberEven(n3) && isNumberEven(n5);
if(isDigit0)
{
    return 0
};

// ако ПЪРВА, ТРЕТА и ПЕТА цифра са нечетни, то седма цифра е 1
let isDigit1 = isNumberOdd(n1) && isNumberOdd(n3) && isNumberOdd(n5);
if(isDigit1)
{
    return 1
};

// ако ПЪРВА или ТРЕТА или ПЕТА цифра са четни, то седма цифра е 2
let isDigit2 = isNumberEven(n1) || isNumberEven(n3) || isNumberEven(n5);
if(isDigit2)
{
    return 2
};

// ако ПЪРВА и ВТОРА цифра са четни, или ТРЕТА и ЧЕТВЪРТА и ПЕТА цифра са нечетни, то седма цифра е 3
let isDigit3 = (isNumberEven(n1) && isNumberEven(n2)) || (isNumberOdd(n3) && isNumberOdd(n4) && isNumberOdd(n5));
if(isDigit3)
{
    return 3
};

// ако и шестте генерирани цифри са равни, то седма цифра е 4
let isDigit4 = (n1 == n2 == n3 == n4 == n5 == n6);
if(isDigit4)
{
    return 4
};

// ако всяка следващо генерирана цифра е по-голяма от предишната, например 1 < 2 < 3 < 4 < 5 < 6, то седма цифра е 5
let isDigit5 = (n1 < n2 < n3 < n4 < n5 < n6);
if(isDigit5)
{
    return 5
};

let numbersSum = (n1 + n2 + n3 + n4 + n5 + n6);

//ако сборът на до момента генерираните 6 цифри е по-малък от 10, то седма цифра е 6
let isDigit6 = (numbersSum < 10);
if(isDigit6)
{
    return 6;
}

//ако сборът на до момента генерираните 6 цифри е по-голям от 10, то седма цифра е 7
let isDigit7 = (numbersSum > 10);
if(isDigit7)
{
    return 7;
}

//ако нито едно от правилата не са в сила, то седма цифра е 9
return 9;

};