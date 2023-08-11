// minimum

function someName() {
    console.log("first method");
}

someName();

let func = function () {
    console.log("second method");
}

func();

// third method
let sum = (x, y, z) => console.log(x + y + z);

sum(1, 2, 3);

// Create a function that will print the number of arguments passed to it.
function nums() {
    console.log(arguments.length);
}

nums(1, 2, 3, 4, 5, 6);
nums('Hello', 'some text', 56);

// Write a function that takes 2 numbers and returns some data
function takeNums(firtNum, secondNum) {
    if (firtNum < secondNum) {
        console.log(-1);
    } else if (firtNum > secondNum) {
        console.log(1);
    } else {
        console.log(0);
    }
}

takeNums(3, 3);

// Write a function that calculates the factorial of the number passed to it.

function factorialCalc(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// console.log(factorialCalc(4));

// Write a function that takes three separate digits and converts them to a single number.
let singleNum = (firstDigit, secondDigit, thirdDigit) => console.log(Number(`${firstDigit}` + `${secondDigit}` + `${thirdDigit}`));

singleNum(1, 2, 3);

// Write a function that takes the length and width of a rectangle and calculates its area.
function calcArea(width, height = width) {
    console.log(`Area is: ${width * height}`);
}

calcArea(2, 3);

// normal

// Write a function that checks if the number passed to it is a "perfect number"
let perfectNum = function (num) {
    if (num <= 0) {
        return false;
    }

    let divSum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divSum += i;
        }
    }

    return divSum === num;
}

// Write a function that takes the minimum and maximum values for a range and prints only those numbers in the range that are perfect
function perfectRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (perfectNum(i) === true) {
            console.log(i);
        }
    }
}

perfectRange(1, 10000);