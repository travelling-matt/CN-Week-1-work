/*
let i = 10;
console.log(i);
i += 2;
console.log(i);
*/

/*
let favouriteDrink = "Pepsi Max";
let name = "Matt";
let age = 49;
//console.log(favouriteDrink);
//console.log("My favourite drink is " + favouriteDrink + ".");
console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favouriteDrink}.`);

age = 50;
favouriteDrink = "Tea";
console.log(`Hello, my name is ${name}. I'm ${age} and my favourite drink is now ${favouriteDrink}.`)
*/

/* activity1 - favourite colour
let name = "Matt";
let age = 49;
let favColour = "Blue";
console.log(`My name is ${name}, I'm ${age} and my favourite colour is ${favColour.toLowerCase()}.`)
age += 1;
favColour = "Green"
console.log(`My name is ${name}, I am ${age}. This year my favourite colour is ${favColour.toLowerCase()}`)
*/

/*Activity2 - breakfast, lunch, tea
let name = "Matt";
let breakfast = "Green Juice";
let lunch = "Porridge";
let tea = "Lasagne";
console.log(`My name is ${name}. Today I had ${breakfast.toLowerCase()} for breakfast. I am going to have ${lunch.toLowerCase()} for lunch and I will be having ${tea.toLowerCase()} for tea.`)
breakfast = "A Bacon Sandwich";
lunch = "left-over Pizza";
tea = "Fish and Chips";
console.log (`My name is ${name}. I love food and hate waste. Tomorrow I will be having ${breakfast.toLowerCase()}, ${lunch.toLowerCase()} and ${tea.toLowerCase()} for breakfast, lunch and tea. Not necessarily in that order!`)
*/

//Activity3 - days from today to your birthday

//let today = new Date();
//let birthdate = new Date(1972, 07, 30);
//let nextBirthday = new Date(2022, 07, 30);
//console.log(`My name is Matt and my date of birth is ${birthdate}`)

/*
let start = Date.now();
doSomethingForALongTime();
let end = new Date(2021, 07, 30);
let elapsed = end.getTime() - start.getTime();
console.log(`It is ${elapsed} days until my next birthday.`)
*/

//let startDate = new Date();
//let endDate = new Date();
//let seconds = (endDate.getTime() - startDate.getTime()) / 1000

/* works - activity 3
let today = new Date();
let birthday = new Date (2022, 07, 30);
let days = Math.round((birthday - today) / 86400000);
console.log(`The number of days until my next birthday is ${days}`);
*/

/*
let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "
*/


/*From CN
// Activity 3
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,3,22")
const todaysDate = new Date("2021, 10, 19");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);
*/

/* Activity 4 - Expected Answer
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);
*/