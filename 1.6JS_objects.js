//Object
// const person = {
//     name : 'Matt',
//     age : 49,
//     height : 184,
//     eyeColour : 'Blue',
//     favSongs : [
//         'Freebird',
//         'Out of Space',
//         'Drop the Pressure'
//     ],
//     myName(){
//         return this.name
//     },
//     //Activity1 function
//     sayHi(){
//         return (`Hello my name is ${this.name}`)
//     }
// }
// console.log(person.name)
// console.log(person["age"])
// console.log(person.favSongs[0])
// console.log(person.myName())
// //Activity1
// console.log(person.sayHi())

//Activity2 - Pet - works
// const pet = {
//     name : 'Spot',
//     typeOfPet : 'Dog',
//     age : 4,
//     colour : 'Black and white',
//     eat(){
//         return (`${this.name} is eating.`)
//     },
//     drink(){
//         return (`${this.name} is drinking.`)
//     }
// }
// console.log(pet.eat())
// console.log(pet["drink"]())

// let day = 'Sunday';
// let alarm = '';

// let alarmMessages = {
//     weekendAlarm: 'no alarm needed',
//     weekdayAlarm: 'get up at 7am'
// };

// if(day == 'Saturday' || day == 'Sunday'){
//     alarm = alarmMessages.weekendAlarm
// } else {
//     alarm = alarmMessages.weekdayAlarm
// }
// console.log(alarm)

//Activity 3 - CoffeeShop - struggles a lot with this one. I can understand most of Johns code, but not all of it.

// // const coffeeShop = {
//     branch : 'Chester',
//     drinkTea : 1,
//     drinkWater: 0.5,
//     drinkCoffee: 2,
//     foodBurger: 5
//     foodPizza: 4
//     foodFries: 3,
//     drinksOrdered (){
//         return (`Your order is ${this.drinkTea} and is £${coffee}.`)
//             },
//     foodOrdered (){

//     }
    
//     eat(){
//         return (`${this.name} is eating.`)
//     },
//     drink(){
//         return (`${this.name} is drinking.`)
//     }
// }
// console.log(pet.eat())
// console.log(pet["drink"]())

// let order =  (`${drinksOrdered} + ${foodOrdered}`)


// console.log(Your order is) //all items priced individaully and then with total


//console.log(coffeeShop.drinksOrdered())

                // let accNumber = 5044921
// let pinNumber = 1221
// let balance = 1000

// const cashWithdrawal = (pinNum, balance, amount, accNum) => {
//     if (pinNum = pinNumber && balance >= amount) {
//     console.log(`Withdrawing ${amount} from account ${accNumber}`);
//     } else {
//         console.log("Sorry PIN wrong or balance too low")
//     }
// }
// cashWithdrawal(1221, balance, 300, 50449921)
// cashWithdrawal(1221, balance, 500, 50449921)
// cashWithdrawal(1221, balance, 1250, 50449921)
// cashWithdrawal(1222, balance, 1250, 50449921)

//Code from John @CN

// let coffeeShop = {
//     branch: 'Costa',
//     drinks: ['Coffee', 2.50, 'Tea', 1.50, 'Hot Chocolate', 3],
//     food: ['Croissant', 3.50, 'Sandwich', 2],
//     drinksOrdered(drink){
//         let order = ''
//         let cost = 0
//         for(let i = 0; i < drink.length; i++){
//             for(let j = 0; j < this.drinks.length; j++){
//                 if(drink[i] === this.drinks[j]){
//                     cost += this.drinks[j + 1]
//                     order = order + ` = ${drink[i]} £${this.drinks[j + 1]} = `
//                 }
//             }
//         }
//         return `Drink  ${order}\nCost  -  £${cost}\n`
//     },
//     foodOrdered(food){
//         let order = ''
//         let cost = 0
//         for(let i = 0; i < food.length; i++){
//             for(let j = 0; j < this.food.length; j++){
//                 if(food[i] === this.food[j]){
//                     cost += this.food[j + 1]
//                     order = order + ` = ${food[i]} £${this.food[j + 1]} = `
//                 }
//             }
//         }
//         return `Food  ${order}\nCost  -  £${cost}\n`
//     }
// }

// console.log(coffeeShop.foodOrdered(['Croissant', 'Sandwich']), coffeeShop.drinksOrdered(['Coffee', 'Tea']))
