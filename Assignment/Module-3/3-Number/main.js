const checkPrimeNumber = number => {
    const n = Number(number);
    const isInteger = Number.isInteger(number);
    const isPositive = n > 0;
    const PositiveInteger= isInteger && isPositive;

    if(PositiveInteger===true){
        if (n===1){
            return false;
        }
        else if(n === 2){
            return true;
        }
        else{
            for(var x = 2; x < n; x++){
                if(n % x === 0){
                    return false;
                }
            }
            return true;  
        }
    }
    else{
        return console.log('Number is not PositiveInteger');
    }
}



console.log(checkPrimeNumber(37));


const ischeckPrimeNumber = number => {
    const n = Number(number);
    const isInteger = Number.isInteger(number);
    const isPositive = n > 0;
    const PositiveInteger= isInteger && isPositive;

    if(PositiveInteger===true){
        if (n===1){
            return console.log('is not a prime number');
        }
        else if(n === 2){
            return console.log('is a prime number');
        }
        else{
            for(var x = 2; x < n; x++){
                if(n % x === 0){
                    return console.log('is not a prime number');
                }
            }
            return console.log('is a prime number');  
        }
    }
    else{
        return console.log('Number is not PositiveInteger');
    }
}

console.log(ischeckPrimeNumber(37));
