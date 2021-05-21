class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    hToString() {
        return `h:${this.height}`;
    }
}
class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        //property
        return this.calcArea();
    }
    set sideLength(newLength) {
        //property
        this.height = newLength;
        this.width = newLength;
    }
    calcArea() {
        //method
        return this.height * this.width;
    }
    toString() {
        return `${super.hToString()} w:${this.width}`;
    }
}
var square = new Square(2);
console.log(square.area); //4
console.log(square.calcArea()); //4