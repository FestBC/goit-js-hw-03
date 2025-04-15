"use strict";

function makeArray(firstArray, secondArray, maxLength) {
    // Если новый массив больше maxLength — вернуть новый массив с ограничением по maxLength.
    // Иначе вернуть целиком новый массив.
    return firstArray.length + secondArray.length >= maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);
}

console.log("//Start of task 2.");

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

console.log("//End of task 2.");