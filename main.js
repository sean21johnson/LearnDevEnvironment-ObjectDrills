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

//4 Array of objects
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

let objFour = {
    name: "bossman",
    jobTitle: "boss"
}

let arr = [objOne, objTwo, objThree, objFour];


//5 Properties that aren't there
objOne["boss"] = "bossman"
objTwo["boss"] = "bossman"
objThree["boss"] = "bossman"


// for (let num of arr) {

//     if (num.boss === undefined) {
//         console.log(`${num.jobTitle} ${num.name} doesn't report to anybody`)
//     }
//     else {
//     console.log(`${num.jobTitle} ${num.name} reports to ${num.boss}`)
//     }
// }


//6 Cracking the code


