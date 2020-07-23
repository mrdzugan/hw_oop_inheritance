'use strict';

class User {
	constructor(firstName, lastName) {
		this._name = firstName;
		this._surname = lastName;
	}

	get fullName() {
		return `${this._name} ${this._surname}`;
	}
}

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this._year = year;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		this._year = value;
	}

	get course() {
		return new Date().getFullYear() - this.year;
	}
}

const st1 = new Student('Andrei', 'Dzugan', 2017);

console.log(`${st1.fullName} is studying on ${st1.course} course`);
