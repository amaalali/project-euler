"use strict";
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


function makeArray(N) {
	return Array(N).fill().map((x,i)=>i)
};

function multipleOf(currentNumber) {
	return currentNumber % 3 === 0 || currentNumber % 5 === 0;
};

function filteredForMultiplesOf3And5(arr) {
	return arr.filter(multipleOf);
};

function sum(arr) {
	return arr.reduce((prev,next)=> { return prev + next },0);
};

function problem1(number) {
	// generate array , filter, sum
	let arr =  makeArray(number);
	let filteredArr = filteredForMultiplesOf3And5(arr);
	return sum(filteredArr);
}
