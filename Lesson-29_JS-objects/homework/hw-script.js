let car = {
    manufacturer: "Volkswagen",
    model: "Passat",
    year: 2013,
    averageSpeed: 120,
    fuelTank: 50,
    fuelConsumption: 13,
    drivers: []
}

car.info = function () {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
    console.log(`Fuel Tank Capacity: ${this.fuelTank} liters`);
    console.log(`Fuel Consumption: ${this.fuelConsumption} liters/100 km`);
    console.log(`Drivers: ${this.drivers.join(', ')}`);

}

car.info();