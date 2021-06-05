var peopleConstructor = function(name, age, state) {
    var temp = {};
    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function() {
        console.log(`${this.name} , ${this.age} , ${this.state}`);
    };
    return temp;
};
const person1 = new peopleConstructor("Ali", 25, "single");
person1.printPerson();