class User {
	constructor(firstName, lastName) {
		this._name = firstName;
		this._surname = lastName;
	}

	get fullName() {
		return `${this._name} ${this._surname}`;
	}
}