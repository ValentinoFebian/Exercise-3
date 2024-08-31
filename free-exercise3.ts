// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output : 
// 9 x 1
// 9 x 2
// …
// 9 x 10

// Math table

let integer: number = 9

for (let i = 1; i <= integer; i++) {
    let result = integer * i
    console.log(`${integer} * ${i} = ${result}`)
}


// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome

// Palindrome check

let word: string = "madam";

if (word === word.split("").reverse().join("")) {
    console.log("Is palindrome")
} else {
    console.log("Isn't palindrome")
}

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”

//Centimeter to kilometer converter

let centi: number = 100000
let kilo: number = centi / 100000

let display: string = kilo.toString()

console.log(`${centi} cm is equal to ${kilo} km`)

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

let currencyNum: number = 1000

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

let someWord: string = "Hello World!";
let wordProcessor: string = someWord.replace("ell", "");

console.log(wordProcessor);

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”

let wordContender: string = "hello world!";
let capitalize: string = wordContender.replace("h","H").replace("w", "W");

console.log(capitalize);

// Write a code to swap the case of each character from string 
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

let sentence = "The QuiCk BrOwN Fox"
let modified = ""

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === sentence[i].toUpperCase()) {
        modified = sentence[i].toLowerCase()
    } else {
        modified = sentence[i].toUpperCase()
    } 
    modified += sentence[i]
}

console.log(modified);


// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42

let randomNum: number = 42
let randomNum2: number = 27

console.log(Math.max(randomNum, randomNum2));

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let num1: number = 12
let num2: number = 11
let num3: number = 1

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log (`${num1}, ${num2}, ${num3}`)
    } else {
        console.log (`${num1}, ${num3}, ${num2}`)
    }
} else if (num2 > num1 && num2 > num3 ) {
    if (num1 > num3) {
        console.log(`${num2}, ${num1}, ${num3}`)
    } else {
        console.log(`${num2}, ${num3}, ${num1}`)
    }
} else {
    if (num2 > num1) {
        console.log(`${num3}, ${num2}, ${num1}`)
    } else {
        console.log(`${num3}, ${num1}, ${num2}`)
    }
}

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1

let input = "hello"

if (typeof input === "string") {
    console.log(1);

} else if (typeof input === "number") {
    console.log(2);

} else {
    console.log(3);
}

// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

let quotes: string = "An apple a day keeps the doctor away"
let replaced = quotes.replace(/a/g, "*").replace("A", "*");

console.log(replaced)



function alter(string: string) {
    var newString = ''
    for (var i = 0; i < string.length; i++) {
      newString += string[i] === string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase()
    }
    return newString
}

console.log(alter("AlaBaMa"))
