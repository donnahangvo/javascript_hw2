//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(dude){
    for (let i = 0; i < Object.keys(dude).length; i++){
        console.log(Object.values(dude)[i])
    }
}

console.log(favFood(person3))

console.log("End of Exercise #1")



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
  
class Person{
    constructor(name, age){
    this.name = name;
    this.age = age;
    }

    // Method insde of a JS Prototype
    
    addAge = () =>{
        return `The current age is ${this.age++}.`
    }

    printInfo = () => {    
        
        return `This is ${this.name}, and they are ${this.age} years old.`;

    }
}


// Use an arrow to create the printInfo method

let dudette = new Person('Dudette', 30);
console.log(dudette.printInfo());

let dude = new Person('Dude', 30);
console.log(dude.printInfo());

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

console.log(dude.addAge(30));
console.log(dude.addAge(30));
console.log(dude.addAge(30));
console.log(dude.addAge(30));

console.log("End of Exercise #2")



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (str) => {
    return new Promise( (resolve, reject) =>{
        if(str >= 10){
            resolve(true) 
        } else {
            reject(false)
        }
    })
}

// Using the JS Promise
isBigWord("01234567890")
// Happy path (Resolve)
.then((result) => {
    console.log(`Big word`)
})

// Sad reject path
.catch((error) => {
    console.log(`Small Number`)
})

isBigWord("JavaScript")
// Happy path (Resolve)
.then((result) => {
    console.log(`Big word`)
})

// Sad reject path
.catch((error) => {
    console.log(`Small Number`)
})

// console.log("End of Exercise #3")


// CODEWARS PROBLEMS


// Calculate BMI
// def bmi(weight, height):
//     bmi = weight/height**2
//     if bmi <= 18.5:
//         return "Underweight"
//     if bmi <= 25.0:
//         return "Normal"
//     if bmi <= 30.0:
//         return "Overweight"
//     if bmi > 30:
//         return "Obese"

function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
      case bmi <= 18.5:
        return "Underweight";
      case bmi <= 25.0:
        return "Normal";
      case bmi <= 30.0:
        return "Overweight";
      case bmi > 30:
        return "Obese";
     }
   }

console.log(bmi(80, 1.80))
console.log(bmi(150, 2.00))

console.log("End of CodeWars Problem #1")


// I love you, a little , a lot, passionately ... not at all
/* DESCRIPTION:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. 
The number of petals is always greater than 0. */

function howMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}

console.log(howMuchILoveYou(1))
console.log(howMuchILoveYou(10))

console.log("End of CodeWars Problem #2")