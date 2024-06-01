// Task 1

function tipsForService (billAmount, tipPercentage) {
    let tips = billAmount * (tipPercentage / 100);
    return tips;
}

console.log(tipsForService(100, 10));

// Task 2

function personAge(birthYear) {
    let currentYear = 2024;
    let age = currentYear - birthYear;
    return age;
}

console.log(personAge(2000));

// Task 3

function perimeterNaTriagolnik(a, b, c,) {

    if (a !==b && a !==c && b !==c) {
        let perimetar = a + b + c;
        return "L= " + perimetar + "cm " + "Raznostran Triagolnik";
    }

    else if (a === b && a === c && b === c) {
        let perimetar = a + b + c;
        return "L= " + perimetar + "cm " + "Ramnostran Triagolnik";
    }

    else{
        let perimetar = a + b + c;
        return "L= " + perimetar + "cm " + "Ramnokrak Triagolnik";
    }
}
    console.log(perimeterNaTriagolnik(3, 2, 3));

    // Task 4

function daysInSeconds(days) {

    let seconds = days * 24 * 60 * 60;
    return seconds;
}  
    console.log(daysInSeconds(10));

    // Task 5

const numberComparison = (number1, number2) => {

    let biggerNumber = (number1 > number2) ? number1 : number2;
    return biggerNumber;
}

console.log(numberComparison(10, 5));

    // Task 6

function isEvenOrOdd() {
    
    let randomNumber = Math.floor (Math.random() * 100);

    if (randomNumber % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(isEvenOrOdd());

    // Task 7

 function lettersInString(letterA) {
     let str = "Linkin Park - In The End";
     let count = str.split(letterA);
     return count.length - 1;
      
 }
 
 console.log(lettersInString("a"));

    // Task 8

function numberLength(number) {
    return number.toString().length;
}

console.log(numberLength(12345));

    // Task 9

function randomGreeting() {
    let random = Math.floor(Math.random() * 5);
    let greetings = ["Hello", "Hi", "Hey there!", "Greetings", "Salutations"];
    return greetings[random];
}

console.log(randomGreeting());


    // Task 10

function passwordValidator(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    else if (password.length >= 8) {
        if (password.includes(" ")) {
            return "Password must not contain spaces.";
        }
        else {
            return "Password is valid";
        }
    }

    else{
        return "Password is valid";
    }
}

console.log(passwordValidator("12345678"))

