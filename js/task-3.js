"use strict";

function filterArray(numbers, value) {
    let array = [];

    for (const arg of numbers) {
        arg > value ? array.push(arg) : false;
    }

    return array;
}

console.log("//Start of task 3.");

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

console.log("//End of task 3.");