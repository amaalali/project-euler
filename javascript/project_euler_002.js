"use strict";

function fibonacciSumOfEven(maxValue) {
    // gen fib seq, reduce
    x1 = fibonacci(maxValue);
    x2 = selectEvenNumbers(x1);
    return sumArray(x2);


}

function fibonacci(value) {
    var fibArr = [1, 2];

    while ( fibArr[fibArr.length-1] < value ) {
        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }

    if ( fibArr[fibArr.length-1] > value ) {
        fibArr.pop()
    }

    return fibArr;
}

function selectEvenNumbers(arr) {
    return arr.filter(isEven);
}

function isEven(value) {
    return value%2===0
}

function sumArray(arr) {
    return arr.reduce(
        (total,next) => { return total += next; }
    );
}
