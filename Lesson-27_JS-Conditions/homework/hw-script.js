// Minimum
// age
const age = +prompt("Enter your age");
if (age >= 0 && age < 12) {
    alert("You are a child");
} else if (age >= 12 && age < 18) {
    alert("You are a teenager");
} else if (age >= 18 && age < 60) {
    alert("You are an adult");
} else if (age >= 60 && age < 100) {
    alert("You are a pensioner");
} else if (age > 100) {
    alert("You are a vampire or highlander!");
} else {
    alert("Enter a correct data please");
}

// numbers and symbols
const userNumber = +prompt("Enter a number between 0 and 9");
if (userNumber === 1) {
    alert(`Your symbol is "!"`);
} else if (userNumber === 2) {
    alert(`Your symbol is "@"`);
} else if (userNumber === 3) {
    alert(`Your symbol is "#"`);
} else if (userNumber === 4) {
    alert(`Your symbol is "$"`);
}  else if (userNumber === 5) {
    alert(`Your symbol is "%"`);
} else if (userNumber === 6) {
    alert(`Your symbol is "^"`);
} else if (userNumber === 7) {
    alert(`Your symbol is "&"`);
} else if (userNumber === 8) {
    alert(`Your symbol is "*"`);
} else if (userNumber === 9) {
    alert(`Your symbol is "("`);
} else if (userNumber === 0) {
    alert(`Your symbol is ")"`);
}else {
    alert("Enter a correct data please");
}

// sum range
let result = 0;
let x = +prompt("Enter first number of the range"); 
let y = +prompt("Enter second number of the range");
while (x <= y) {
  result += x;
  x++
}

// The greatest common denominator
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    alert("Please, enter numbers!");
  } else {
while (b !== 0) {
    let c = b;
    b = a % b;
    a = c;
  }
}
alert(`The greatest common denominator is ${a}`);

// Divisors
let userNumber1 = +prompt("Enter a number");

if (isNaN(userNumber1)) {
  alert("Please, enter number");
} else {
  let div = `Divisors ${userNumber1}: `;
  for (let i = 1; i <= userNumber1; i++) {
    if (userNumber1 % i === 0) {
      div += i + ", ";
    }
  }

  div = div.slice(0, -2);
  alert(div);
}

// Normal
// palindrome

let userFive = (prompt("Enter five-digit number")); 

if (isNaN(userFive) || userFive.length !== 5) {
  alert("Please enter correct five-digit number.");
} else {
  let isPalindrome = true;
  let leftIndex = 0;
  let rightIndex = userFive.length - 1;

  while (leftIndex < rightIndex) {
    if (userFive[leftIndex] !== userFive[rightIndex]) {
      isPalindrome = false;
      break;
    }
    leftIndex++;
    rightIndex--;
  }

  if (isPalindrome) {
    alert("This is palindrom!");
  } else {
    alert("This isn't palindrom!");
  }
}

// discount
let sum = +prompt("Enter your purchase amount");
if (sum >= 200  && sum < 300) {
  alert(`Your purchase amount with discount is ${sum = sum - sum * 0.03}`);
} else if (sum >= 300  && sum < 500) {
  alert(`Your purchase amount with discount is ${sum = sum - sum * 0.05}`);
} else if (sum >=500) {
  alert(`Your purchase amount with discount is ${sum = sum - sum * 0.07}`);
} else {
  alert(`You have no discount .Your purchase amount is ${sum}`);
}

// 10 numbers
let positiveCounter = 0;
let negativeCounter = 0;
let zeroCounter = 0;
let evenCounter = 0;
let oddCounter = 0;
let num = 0;

for (let i = 0; i < 10; i++) {
    num = +prompt(`Enter ${i + 1} number`, 0);
    if (num < 0) {
        negativeCounter++;
    } else if (num === 0) {
        zeroCounter++;
    } else  {
        positiveCounter++;
    } 
    
    if (num % 2 === 0 && num !== 0) {
        evenCounter++;
    } else if (num % 2 !== 0 && num !== 0) {
        oddCounter++;
    }
}
alert(`You enter ${positiveCounter} positive numbers, 
${negativeCounter} negative numbers, ${zeroCounter} zeros,
${evenCounter} even numbers and ${oddCounter} odd numbers`);

// week
let currDay = 0;

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Понеділок';
    case 1:
      return 'Вівторок';
    case 2:
      return 'Середа';
    case 3:
      return 'Четвер';
    case 4:
      return `П'ятниця`;
    case 5:
      return 'Субота';
    case 6:
      return 'Неділя';
  }
}

while (confirm(`${getDayOfWeek(currDay)}. Хочеш побачити наступний день?`)) {
  currDay = (currDay + 1) % 7;
}

// maximum
// guess a number

    const s = 0;
    const e = 100;
    let start = s;
    let end = e;
    while (true) {
      let n = Math.floor((start + end) / 2);
      let answr = prompt(`${n} Is it your number ? - y (yes), - b (biger), -  l (lower)`);
      if (answr == "y") {
        alert("I guess, cool!!!");
        break;
      }
      if (answr == "l") {
        end = n - 1;
      }
      if (answr == "b") {
        start = n + 1;
      }
    }

    // multiple table

    for (let i = 2; i <= 9; i++) {
        console.log(`multiple table for ${i}:`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log("\n"); // Порожній рядок для відділення таблиць
      }

    // date
    
const inputDay = +prompt("Введіть день:");
const inputMonth = +prompt("Введіть місяць:");
const inputYear = +prompt("Введіть рік:")   ;

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

if (
  isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear) ||
  inputDay < 1 || inputDay > 31 || inputMonth < 1 || inputMonth > 12 || inputYear < 1
) {
  alert("Ви ввели некоректні дані.");
} else {
  let day = inputDay;
  let month = inputMonth;
  let year = inputYear;

  day++;
  if (day > 31 || (day === 31 && [4, 6, 9, 11].includes(month))) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  } else if (day === 30 && month === 2) {
    day = 1;
    month++;
  } else if (day === 29 && month === 2 && !isLeapYear(year)) {
    day = 1;
    month++;
  }
  alert(`Наступна дата: ${day}.${month}.${year}`);
}


    
      