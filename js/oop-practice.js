// STEP 1
/* class Cat {
    constructor(breed, color, name) {
        this._breed = breed
        this._color = color
        this._name = name 
    }
}

const Dog = class {
    constructor(breed, color, name) {
        this.breed = breed
        this.color = color
        this.name = name
    }
}
*/

// STEP 2
/* class Cat {
    constructor(breed, color, name) {
        this._breed = breed
        this._color = color
        this._name = name 
    }
}

const Dog = class {
    constructor(breed, color, name) {
        this.breed = breed
        this.color = color
        this.name = name
    }
}

const kittie = new Cat('Mainecoon', 'tabby', 'Snowy')
console.log(kittie.name)

const doggie = new Dog('Labrador', 'white', 'Will')
console.log(doggie.name)
*/
// STEP 3
/*
class Animal {
    constructor() {
        this.create()
    }
    create() {
        console.log("The Animal has been created")
    }
}
const myAnimal = new Animal()
*/

// STEP 4
/*
class Animal {
    constructor(message) {
        this.created(message)
    }
    created(message) {
        console.log(message)
    }
}
const myAnimal = new Animal("The Animal has been created")
*/

// STEP 5
/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}
const myAnimal = new Animal('Cat', 'Ragdoll', 'Brown', '15 inches', '24 inches')

console.log(myAnimal.type)
console.log(myAnimal.breed)
console.log(myAnimal.color)
console.log(myAnimal.height)
console.log(myAnimal.length) 
*/

// STEP 6
/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}
const myAnimal = new Animal('Cat', 'Ragdoll', 'Brown', '15 inches', '24 inches')
for (const property in myAnimal) {
    console.log(`${property}: ${myAnimal[property]}`)
}
*/

// STEP 7
/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }

    speak() {
        if (this.type.toLowerCase() === 'dog') {
            return `The ${this.color} dog is barking!`;
        } else if (this.type.toLowerCase() === 'cat') {
            return `The ${this.color} cat is meowing!`;
        } else {
            return "Unknown animal!";
        }
    }
}
const myAnimal = new Animal('Cat', 'Ragdoll', 'Brown', '15 inches', '24 inches')
console.log(myAnimal.speak())
*/

// STEP 8
/*class Animal {
    #type
    #breed
    #color
    #height
    #length

    constructor(type, breed, color, height, length) {
        this.#type = type
        this.#breed = breed
        this.#color = color
        this.#height = height
        this.#length = length
    }

    #checkType() {
        if (this.#type.toLowerCase() === 'dog') {
            return 'dog'
        } else if (this.#type.toLowerCase() === 'cat') {
            return 'cat'
        } else {
            return 'unknown'
        }
    }

    speak() {
        const animalType = this.#checkType()
        return `The ${animalType} has made a noise!`
    }
}
const myAnimal = new Animal('Cat', 'Ragdoll', 'Brown', '15 inches', '24 inches')
console.log(myAnimal.speak())
*/

// STEP 9
/*
String.prototype.findWords = function(word) {
    let wordSearch = new RegExp(`\\b${word}\\b`, 'g')
    let matches = this.match(wordSearch)
    let count = matches ? matches.length : 0
    alert(`The word "${word}" was found ${count} times.`)
    return count
}

let statement = "Why is it so gloomy in June in San Diego?"
let word = "is"
statement.findWords(word)
*/
