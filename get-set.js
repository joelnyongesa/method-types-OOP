// Using get and set with private fields.
// We can use get and set to update private properties.
class Square{
    #sideLength
    constructor(sideLength){
        if(this.sideLength > 0){
            this.#sideLength = sideLength
        }
        else{
            throw new Error("A square's side length must be a positive value")
        }
    }

    get sideLength(){
        this.#sideLength
    }

    set sideLength(sideLength){
        if(sideLength > 0){
            this.#sideLength = sideLength
        }
        else{
            throw new Error("A square's side length must be a positive number")
        }
    }
}

// const square = new Square(10)
// console.log(square.sideLength)

class Student{
    #firstName;
    #lastName;

    constructor(firstName, lastName){
        this.#firstName = this.sanitize(firstName);
        this.#lastName = this.sanitize(lastName)
    }

    get firstName(){
        return this.capitalize(this.#firstName)
    }

    set firstName(firstName){
        this.#firstName = this.sanitize(firstName)
    }

    capitalize(string){
        // Capitalize the first letter.
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    sanitize(string){
        // Removes any alphanumeric characters except dash and single quotes (apostrophes)
        return string.replace(/[^A-Za-z0-9-']+/g, "");
    }
}

let student = new Student("Carr@ol-Ann", ")Freel*ing");
console.log(student.firstName)

student.firstName = 'Hea@)@(!$)ther'
console.log(student.firstName)