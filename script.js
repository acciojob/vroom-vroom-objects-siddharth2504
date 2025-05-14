// Complete the js code
// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;

class Car{
	constructor(make, model){
		this.make = make
		this.model = model
	}
	getMakeModel(){
		return `${this.make} ${this.model}`
	}
}

class SportsCar extends Car{
	constructor(make, model, topSpeed){
		super(make, model)
		this.topSpeed = topSpeed
	}
	getTopSpeed(){
		return this.topSpeed
	}
}

const car = new SportsCar("Ferrari", "Testarossa", 200)
console.log(car.getMakeModel())
console.log(car.getTopSpeed()) 