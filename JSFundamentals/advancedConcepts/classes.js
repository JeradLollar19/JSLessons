class Car {
    constructor(make, model, year, miles, color, vin){
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.color = color;
        this.vin = vin;
    }
}

let myCar = new Car('Toyota', 'Corolla', 2005, 200000, 'Red', 123456);

console.log(myCar);