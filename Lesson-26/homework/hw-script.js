// Minimum
const a = 0.1;
const b = 0.2;
const sum = a + b;
alert(`Summ is: ${+sum.toFixed(1)}`);

const str = `1`;
const num = 2;
const summ = +str + num;
alert(`Summ of string and number is: ${summ}`);

// Flash-drive
let fileSize = 820;
let storageGb= +prompt("How much Gb is your flash-drive?");
let storageMb = storageGb * 1024;
let filesNumber = storageMb / fileSize;
alert(`You can write ${Math.floor(filesNumber)} on your drive`);

// Normal
// Chocolate bars
const moneyAmount = +prompt("How much money do you have?");
const chocolateCost = +prompt("How much does one chocolate bar cost?");
const moneyChange = moneyAmount % chocolateCost;
const chocolateNumber = (moneyAmount - moneyChange) / chocolateCost;
alert(`You can buy ${chocolateNumber} chocolate bars and you'll have ${moneyChange} change left`);

// Backwards
const userNumber = prompt("Enter triple digit number");
const dozens = userNumber % 100;
const lastDigit = String(dozens % 10);
const firstDigit = String(userNumber - dozens) / 100;
const secondDigit =  String(dozens - lastDigit) / 10;
const backwards = lastDigit + secondDigit + firstDigit;
alert(`Your triple digit number backwards is ${backwards}`);

// Maximum
// deposit
const deposit = prompt("Enter the amount of the deposit in the bank for 2 months. " +
    "Deposit interest rate of 5% per annum");
const year = 12;
const monthNumber = 2;
const percentsRate = 0.05;
const accruedInterest = deposit * percentsRate / year * monthNumber;
alert(`The amount of accrued interest is ${+accruedInterest.toFixed(2)}`);

// boolean
const firstExpression = 2 && 0 && 3;
alert(` 2 && 0 && 3 result is: ${firstExpression}`);
// Результат буде 0, оскільки оператору && необхідні обидва операнди true, тобто відмінні від 0

const secondExpression = 2 || 0 || 3;
alert(`2 || 0 || 3 result is: ${secondExpression}`);
/*Результат буде 2, оскільки оператору || необхідний хоча б один операнд зі значенням true,
тобто відмінний від 0. Після чого виконання операції завершується, бо отримано необхідний алгоритму результат*/

const thirdExpression = 2 && 0 || 3;
alert(`2 && 0 || 3 result is: ${thirdExpression}`);
/*
Результатом буде 3. В першій частині отримаємо 0, бо необхідно, щоб обидва операнди були true, а в другій
порівнюється 0 або 3 і повертається значення 3, бо воно true*/
