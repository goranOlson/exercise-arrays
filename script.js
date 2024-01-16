const numbers = [2,6,12,7,22,35];

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