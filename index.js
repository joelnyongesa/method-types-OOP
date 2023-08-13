// Four methods: standard, statc, getter, setter methods.
// Standard or instant methods.
// class Square{
//     constructor(sideLength){
//         this.sideLength = sideLength
//     }

//     area(){
//         return this.sideLength * this.sideLength
//     }
//     areaMessage(){
//         return `The area of this square is ${this.area()}`
//     }
// }

// const square = new Square(5)
// console.log(square.area())
// console.log(square.areaMessage())



/*
STATC METHODS - Class level methods.
Not callable on instances of a class, but by the class itself
*/

class CommonMath{
    static triple(number){
        return number*number*number
    }
    static findHypotenuse(a, b){
        return Math.sqrt(a*a + b*b)
    }
}


// // Don't need to be instantiated.
// const num = CommonMath.triple(3);
// const c = CommonMath.findHypotenuse(3,4)
// console.log(num)
// console.log(c)


/*
GET keyword.
Purpose: Retrieving data from an instance
*/

// class Rectangle{
//     constructor(length, width){
//         this.length = length
//         this.width = width
//     }

//     get area(){
//         return this.length * this.width
//     }

//     get perimeter(){
//         return 2*(this.length + this.width)
//     }
    
//     get logArea(){
//         return `The area of this rectangle is ${this.area}`
//     }

//     get logPerimeter(){
//         return `The perimeter of this rectangle is ${this.perimeter}`
//     }
// }

// const rect = new Rectangle(5,4)
// console.log(rect.area)
// console.log(rect.logArea)
// console.log(rect.perimeter)
// console.log(rect.logPerimeter)


class Triangle{
    constructor(base, height, hypotenuse){
        this.base = base
        this.height = height
        this.hypotenuse = hypotenuse
    }

    get perimeter(){
        return this.base + this.height + this.hypotenuse
    }

    get logPerimeter(){
        return `The perimeter of this triangle is ${this.perimeter}`
    }

    get area(){
        return 0.5 * this.base * this.height
    }

    get logArea(){
        return `The area of this triangle is ${this.area}`
    }
}

// const triangle = new Triangle(3,4,5)
// console.log(triangle.perimeter)
// console.log(triangle.logPerimeter)
// console.log(triangle.area)
// console.log(triangle.logArea)


/*
SET keyword
Allows us to write a method that interacts like a property being assigned a value
*/
// class Square{
//     constructor(sideLength){
//         this.sideLength = sideLength;
//     }

//     get area(){
//         return this.sideLength * this.sideLength;
//     }

//     set area(newArea){
//         this.sideLength = Math.sqrt(newArea)
//     }
// }

// const square = new Square(5)
// console.log(square.sideLength)
// console.log(square.area)

// square.area = 64
// console.log(square.sideLength)
// console.log(square.area)

// We can apply the same knowledge on the Square class once again and apply conditional statements

class Square{
    constructor(side){
        this.side = side
    }

    get area(){
        return this.side * this.side
    }

    set area(newArea){
        newArea > 0 ? this.side = Math.sqrt(newArea) : console.warn("Area cannot be less than 0")
    }
}

const square = new Square(5)
console.log(square.area)

square.area = -64
console.log(square.side)