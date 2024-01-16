const numbers = [2,6,12,7,22,35];
// console.log(numbers);

/* 1 */
let firstNbr = numbers[0];
console.log(firstNbr);

/* 2 */
// let lastNbr = numbers[numbers.length - 1];
let lastNbr = numbers.at(-1);
console.log(lastNbr);

/* 3 */
let forthNbr = numbers.at(3);
console.log(forthNbr);

/* 4 */
const nbrSecond = numbers.at(1);
const nbrFifth = numbers.at(4);
const newArray = [nbrSecond, nbrFifth];

console.log(newArray);

/* 5 */
const count = numbers.length;
console.log(`Lenght: ${count}`);


/* 6 */
const newCount = numbers.push(99);
// The method returns the new length of the array
console.log(newCount);


/* 7 */
const newestCount = numbers.unshift(88);
console.log(newCount);


/* 8 */
const popped = numbers.pop();
// popped is now the former last item in the array
console.log(popped);


/* 9 */
const shifted = numbers.shift();
console.log(shifted);


/* 10 */
console.log(numbers);


