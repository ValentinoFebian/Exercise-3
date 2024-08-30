// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”

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

let word: string = "helloolleh";

if (word === word.split("").reverse().join("")) {
    console.log("Is palindrome")
} else {
    console.log("Isn't palindrome")
}

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”

//Centimeter to kilometer converter

let centi: number = 100000
let kilo: number = centi/ 100000

let display: string = kilo.toString()

console.log(`${centi} cm is equal to ${kilo} km`)

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

let currencyNum: number = 1000

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

let someWord: string = "Hello World!";
let wordProcessor: string = someWord.slice()
