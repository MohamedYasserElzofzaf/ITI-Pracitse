var peopleProto = function() {};

// default values
peopleProto.prototype.name = "no name";
peopleProto.prototype.age = 0;
peopleProto.prototype.state = "no state";

peopleProto.prototype.printType = function() {
    console.log(`${this.name} , ${this.age} , ${this.state}`);
};
const person1 = new peopleProto();
person1.name = "Ali";
person1.age = 27;
person1.state = "cairo";

person1.printType();