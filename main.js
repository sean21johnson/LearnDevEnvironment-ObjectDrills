//1 Object initializers and methods

let loaf = {
    flour: 300,
    water: 210,
    hydration() {
        return loaf.water / loaf.flour * 100;
    }
}

//2 Iterating over an object's properties

let newObject = {
    foo: 10,
    bar: 20,
    fum: 30,
    quux: 40,
    spam: 50
}

// for (let key in newObject) {
//     console.log(key, newObject[key])
// }

//3 Arrays in objects

let anotherObject = {
    meals: [
        "breakfast",
        'second breakfast',
        'elevenses',
        'lunch',
        'afternoon tea',
        'dinner',
        'support'
    ]
}

// console.log(anotherObject.meals[3])

let objOne = {
    name: "sean",
    jobTitle: "student"
}

let objTwo = {
    name: "ben",
    jobTitle: "sugarboy"
}

let objThree = {
    name: "mark",
    jobTitle: "teacher"
};

let arr = [objOne, objTwo, objThree];

for (let element of arr) {
    console.log(element.name, element.jobTitle)
}


