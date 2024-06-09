// Task 1

function favoriteFood() {
    let food = prompt("What is your favorite food?");
    
    switch (food){
        case "BBQ":
            return "I am not a fan of BBQ";
        case "Fruits":
            return "Fruits are healthy";
        case "Pizza":
            return "My favorite dish";
        case "Mexican food":
            return "Too spicy";
        default:    
            return "I have never heard of this food";
    }
}

// console.log( prompt(favoriteFood()));

// Task 2

function calculator(num1, num2, operator) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(5, 3, "add"));

// Task 3

for (i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} e deliv so 3 i 5`);
    } else if (i % 3 === 0) {
        console.log(`${i} e deliv so 3`);
    } else if (i % 5 === 0) {
        console.log(`${i} e deliv so 5`);
    } else {
        console.log(i);
    }
}


// Task 4

const countOfChar = (sentence, char) => {
    let count = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            count++;
        }
    }
    return count;
}

console.log (countOfChar("JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced", "a"))


// Task 5

let number;

do {
    // number = prompt("Vnesete pozitiven broj");
    number = Number(number);
}

while (number <= 0);

console.log(`Vie vnesovte pozitiven broj: ${number}`);



//Task 6

const countVowelsAndConsonants = (string) => {
    let vowels = 0;
    let consonants = 0;

    for (char of string) {
        if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char)) {
            vowels++;
        }
        
        else {
            consonants++;
        }
    } 
    
    return {vowels, consonants};
}

console.log(countVowelsAndConsonants("JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced"))
