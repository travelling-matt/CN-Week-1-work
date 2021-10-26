/* coffee order - works
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
    console.log(coffeeOrder);
    console.log(coffeeOrder[2]);
coffeeOrder[1] = "Ann - Vanila Latte"
    console.log(coffeeOrder);
    console.log(coffeeOrder.length); //number of items in array
coffeeOrder.push("Donna - espresso")
    console.log(coffeeOrder);
coffeeOrder.pop()
    console.log(coffeeOrder);
    */

//Array Activity 1 - favouriteSongs - works
/*let favSongs = [
    "Norman Bass - How U Like Bass",
    "Lynard Skynard - Freebird",
    "Rage Against The Machine - Killing In The Name Of",
];
    console.log(favSongs);
favSongs.push("Eminen - Rap God", "Demi Lovato - Solo");
    console.log(favSongs);
favSongs.pop();
    console.log(favSongs);
favSongs.unshift("John Coltrane - A Love Supreme");
    console.log(favSongs);
    */

//Array Activity 2 - other array methods - work
// let favSongs = [
//     "Norman Bass - How U Like Bass",
//     "Lynard Skynard - Freebird",
//     "Rage Against The Machine - Killing In The Name Of",
// ];
//     //console.log(favSongs);
// favSongs.push("Eminen - Rap God", "Demi Lovato - Solo");
//     //console.log(favSongs);
// favSongs.pop();
//     //console.log(favSongs);
// favSongs.shift();
//     //console.log(favSongs);
// favSongs.unshift("John Coltrane - A Love Supreme");
//     //console.log(favSongs);
// favSongs.splice(1);
//     //console.log(favSongs)

//FavouriteDrinks - works
/*
let favDrinks = [
    "Tea",
    "Pepsi Max",
    "Beer",
    "Rum and coke"
];
    //console.log(favDrinks);
    //console.log(favDrinks[0]);
    //console.log(favDrinks[1]);
    //console.log(favDrinks[2]);
for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}
*/

//loops + if
/*
let multiplesTwo = [];
for(let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
    console.log(multiplesTwo);
*/

//while loops
/*
let age = 15
while(age < 18){
    console.log("You're a child!");
    age++
}
console.log("You're an adult!");
*/

//Activity 1 - favFilms - works
/*
let favFilms = [
    "28 Days Later",
    "Bad Boys",
    "Moulin Rouge",
    "Interstellar",
    "Where Eagles Dare"
];
    //console.log(favFilms);
favFilms.push("On Her Majesties Secret Service", "True Romance");
    //console.log(favFilms);
for(let i = 0; i < favFilms.length; i++){
        console.log(favFilms[i]);
}
*/

//Activity 2 - 6 Randowm numbers between 1-50 - works
/*let randomNumbers = []; //create empty array
for(let i = 0; i < 6; i++ ){ //intial expression; condition; increment
   randomNumbers.push(j =(Math.ceil(Math.random()*50))); //do stuff - generate random number, round up and multiply by 50. Round up to ensure that random number is between 1 - 50. Math.floor would be between 0 - 49
}
console.log(randomNumbers); //console out the strings in the array
*/

//Activity 3 - loop 9-0 countdown - works
/*
let numDown = []; //create empty array
for(let i = 9; i >=0 ; i-- ){
   if (i <= 9){
       numDown.push(i);
}
}
console.log(numDown);
*/

//Activity 4 - fourFilms - works
/*
let fourFilms = [
    "28 Days Later",
    "Bad Boys",
    "Ghostbusters",
    "Interstellar",
];
console.log(fourFilms)
if (fourFilms[2] == "Ghostbusters"){
    console.log("Yay, it's Ghostbusters!")
    }
else{console.log("Boo! We want Ghostbusters!")
}
*/

//Activity 5 - random number between 1-30 and divisible by 7
/* workings
let ranNum = []; //create empty array
for(let i = 0; i < 6; i++ ){ //intial expression; condition; increment (loop)
    ranNum.push(j =(Math.ceil(Math.random()*30)))}
    if (j % 7 == 0){
    console.log(j);
    {
        else{
            console.log("Not divisible by 7")
        }
    }
    } 
console.log(ranNum);
*/
/*
let num = 0
for(let i = 0; i <= 6; i++) {
    num = Math.floor(Math.random()*30);
    let numDiv = num % 7; {
        if (numDiv == 0){
            console.log(`${numDiv}`)
        }
    }
    }
*/
//Activity 5 - works
/*
let currentNumber = 0;

for (let i = 0; i < 6; i++) {
    currentNumber = Math.ceil(Math.random() * 30);
    if (currentNumber % 7 == 0) {
        console.log(`Number ${currentNumber} is divisible by 7.`);
    }
    else {
        console.log(`Number ${currentNumber} is NOT divisible by 7.`)
    }
}
*/

//Activity 6 - Mutual followers - works - more research done on nested loops to improve code (below first code).
// let bobsFollowers = [
//     "Bill",
//     "Ben",
//     "Jill",
//     "Pen"
// ];
// let hannahsFollowers = [
//     "Peter",
//     "Pen",
//     "Wendy",
//     "Jill"
// ];
// let j = 0
// for (let i = 0; i < bobsFollowers.length; i++) {
//     if (bobsFollowers[i] == hannahsFollowers[j]){
//     console.log(bobsFollowers[i])
//     }
//     else {
//     for (let j = 1; j < hannahsFollowers.length; j++){
//     if (bobsFollowers[i] == hannahsFollowers[j]){
//         console.log(bobsFollowers[i])
//         }
// }
// }
// }

//more research done on nested loops. I now understand the code below
// let bobsFollowers2 = ["Jack", "John", "Paul", "Jill"];
// let hannahsFollowers2 = ["Borris", "Bill", "Jack", "Jill"];
// for(let i = 0; i < bobsFollowers2.length; i++){
//     for(let j = 0; j < hannahsFollowers2.length; j++){
//         if(bobsFollowers2[i] === hannahsFollowers2[j]){
//             console.log(hannahsFollowers2[j])
//         }
//     }
// }

//Activity 7
// Loops
// For – great for running a loop a defined number of times
// e.g. for (let i = 0; i >=10; i++)
// while – great for running a loop until a defined condition is reached (starting  point may be unknown or variable)
// do... while great for running a loop where the outcome is defined


