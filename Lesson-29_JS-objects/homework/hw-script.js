// normal
// let car = {
//     manufacturer: "Volkswagen",
//     model: "Passat",
//     year: 2013,
//     averageSpeed: 120,
//     fuelTank: 50,
//     fuelConsumption: 13,
//     drivers: {},
// };

// car.info = function () {
//     console.log(`Manufacturer: ${this.manufacturer}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Average Speed: ${this.averageSpeed} km/h`);
//     console.log(`Fuel Tank Capacity: ${this.fuelTank} liters`);
//     console.log(`Fuel Consumption: ${this.fuelConsumption} liters/100 km`);
//     console.log(`Drivers: ${Object.keys(this.drivers)}`);
// };

// car.addDriver = function (driverName) {
//     this.drivers[driverName] = true;
// };

// car.checkDriver = function (driverName) {
//     if (this.drivers.hasOwnProperty(driverName)) {
//         console.log(`${driverName} is in a list`);
//     } else {
//         console.log(`${driverName} isn't in a list`);
//     }


// };

// car.travel = function (distance) {
//     let time = distance / car.averageSpeed;
//     let consumption = distance / 100 * car.fuelConsumption;
//     let rest = Math.floor(time / 4);
//     let travelTime = time + rest;
//     console.log(`Travel time is ${travelTime.toFixed(1)} hours, consumption is ${consumption.toFixed(1)} liters`);
// }

// car.addDriver("Ivan");
// car.addDriver("Ivan56");

// car.info();

// car.checkDriver("Ivan");
// car.checkDriver("Kolya");

// car.travel(621);


// let clock = {
//     hours: 24,
//     minutes: 0,
//     seconds: 0,
//     display: function () {
//         console.log(`Time is ${clock.hours}:${clock.minutes}:${clock.seconds}`);
//     },

//     changeHours: function (hour = 0) {
//         let hourHand = hour % 24;
//         if ((clock.hours + hourHand) >= 24) {
//             clock.hours = (clock.hours + hourHand) % 24;
//         } else {
//             clock.hours += hourHand;
//         }
//     },

//     changeMinutes: function (minutes = 0) {
//         if ((clock.minutes + minutes) >= 60) {
//             let additionalHours = Math.floor((clock.minutes + minutes) / 60);
//             clock.changeHours(additionalHours);
//             clock.minutes = (clock.minutes + minutes) % 60;
//         } else {
//             clock.minutes += minutes;
//         }
//     },

//     changeSeconds: function (seconds = 0) {
//         if ((clock.seconds + seconds) >= 60) {
//             let additionalMinutes = Math.floor((clock.seconds + seconds) / 60);
//             clock.changeMinutes(additionalMinutes);
//             clock.seconds = (clock.seconds + seconds) % 60;
//         } else {
//             clock.seconds += seconds;
//         }
//     }
// };


// clock.changeHours(30);
// clock.changeMinutes(60);
// clock.changeSeconds(360);
// clock.display();

//maximum

let firstFraction = {
    numerator: +prompt("Enter first numerator"),
    denominator: +prompt("Enter first denominator")
}

let secondFraction = {
    numerator: +prompt("Enter second numerator"),
    denominator: +prompt("Enter second denominator")
}

let fractionsMath = {
    commonDenominator: function () {
        return firstFraction.denominator * secondFraction.denominator;
    },

    sum: function () {
        let numeratorSum;

        if (firstFraction.denominator === 0 || secondFraction.denominator === 0) {
            console.log("Wrong fraction! Denominator can't be a 0!");
        } else if (firstFraction.denominator === secondFraction.denominator) {
            numeratorSum = firstFraction.numerator + secondFraction.numerator;
            console.log(`Addition: ${numeratorSum}/${firstFraction.denominator}`);
        } else {
            numeratorSum = firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator;
            console.log(`Addition: ${numeratorSum}/${fractionsMath.commonDenominator()}`);
        }
    },

    sub: function () {
        let numeratorSub;

        if (firstFraction.denominator === 0 || secondFraction.denominator === 0) {
            console.log("Wrong fraction! Denominator can't be a 0!");
        } else if (firstFraction.denominator === secondFraction.denominator) {
            numeratorSub = firstFraction.numerator - secondFraction.numerator;
            console.log(`Subtracting : ${numeratorSub}/${firstFraction.denominator}`);
        } else {
            numeratorSub = firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator;
            console.log(`Subtracting : ${numeratorSub}/${fractionsMath.commonDenominator()}`);
        }
    },

    mult: function () {
        let numeratorMult;
        let denominatorMult;

        if (firstFraction.denominator === 0 || secondFraction.denominator === 0) {
            console.log("Wrong fraction! Denominator can't be a 0!");
        } else {
            numeratorMult = firstFraction.numerator * secondFraction.numerator;
            denominatorMult = firstFraction.denominator * secondFraction.denominator;
            console.log(`Multiplication : ${numeratorMult}/${denominatorMult}`);
        }
    },

    div: function () {
        let numeratorDiv;
        let denominatorDiv;

        if (firstFraction.denominator === 0 || secondFraction.denominator === 0) {
            console.log("Wrong fraction! Denominator can't be a 0!");
        } else {
            numeratorDiv = firstFraction.numerator * secondFraction.denominator;
            denominatorDiv = firstFraction.denominator * secondFraction.numerator;
            console.log(`Dividing : ${numeratorDiv}/${denominatorDiv}`);
        }
    },

    red: function () {
        let divider1 = 0;
        let divider2 = 0;

        for (let i = 1; i <= firstFraction.numerator && i <= firstFraction.denominator; i++) {
            if (firstFraction.numerator % i === 0 && firstFraction.denominator % i === 0) {
                divider1 = i;
            }
        }

        for (let i = 1; i <= secondFraction.numerator && i <= secondFraction.denominator; i++) {
            if (secondFraction.numerator % i === 0 && secondFraction.denominator % i === 0) {
                divider2 = i;
            }
        }

        console.log(`Reduce: ${firstFraction.numerator / divider1}/${firstFraction.denominator / divider1} and ${secondFraction.numerator / divider2}/${secondFraction.denominator / divider2}`
        )
    }

}


fractionsMath.sum();
fractionsMath.sub();
fractionsMath.mult();
fractionsMath.div();
fractionsMath.red();