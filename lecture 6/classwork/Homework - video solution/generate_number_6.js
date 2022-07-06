function generateSixthNumber(n1, n2, n3, n4, n5){

    let sum = n1 +n2 + n3 + n4 + n5;

    if(isNumberTwoDigits(sum)){
        let firstDigit = Math.floor (sum/10);
        let secondDigit = sum % 10;
        return firstDigit + secondDigit;
    }

    return sum;

}

