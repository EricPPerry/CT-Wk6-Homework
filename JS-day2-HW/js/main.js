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





function list_foods(person_obj){
    for(let i=0; i<Object.keys(person_obj).length; i++){
        console.log(`They listed their favorite ${Object.keys(person_obj)[i]} as: `)
        console.log(JSON.stringify(Object.values(person_obj)[i]))

        }
        
    }



list_foods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, 
-has a printInfo method,
-has a method that increments the persons age by 1 each time the method is called.
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo =()=>{
        return `This person is named ${this.name} and they are ${this.age} years old.`
    }

    this.addAge = () => {
        this.age++
        console.log(`Aging ${this.name} by 1 year...`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge_num = (num) => {
        this.age += num;
        console.log(`Aging ${this.name} by ${num} year(s)`)
    }
}
/*Create two people using the 'new' keyword, and print 
both of their infos*/

let me_person = new Person('Eric', 31)
console.log(me_person.printInfo())

let other_person = new Person('Tony', 45)
console.log(other_person.printInfo())
/*increment one persons
age by 3 years. Use an arrow function for both methods <--both methods inside of Prototype above
*/

me_person.addAge()
me_person.addAge()
me_person.addAge()

console.log(me_person.printInfo()) //Verifying that my age was updated by 3, after calling addAge twice

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

other_person.addAge_num(3)
console.log(other_person.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongString = (test_string) => {
    return new Promise( (resolve, reject) =>
    {
        //set it to check whether it is greater or equal to 10
        if(test_string.length >= 10){
            resolve(true)
        } else{
            reject(false)
        }
    })
}
//testing a short string/word
isLongString('123456789')
.then((result)=>{
    console.log('That was a big word')
})
.catch((error)=>{
    console.log('That was a small word')
})