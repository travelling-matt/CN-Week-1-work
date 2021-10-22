/* not working yet
let weather ="summer";

if (weather == "sunny") {
    console.log("Yay, better grab a hat!")
}else if (weather == "rainy") {
    console.log("Better grab a brolly")
}else if (weather == "windy") {
    else 
        console.log ("I'm sorry I don't understand!")    }
*/


// == equal
// === strict equal (tyoe needs to be the same, as well as value)

/*
let i = 10;
let j = "10";

if (i === j) {  
  console.log("True")
} else {
  console.log("False")
}
*/

/* works
let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Sounds right");
}
else {
    console.log("When will it start raining?")
}
*/

//Activity 1 - Age Variable - both work

/*
let age = 20;

if (age > 17) {
    console.log("Yes, I can serve you")
}
else {
    console.log("You aren't old enough")
}
*/
//plus country

/*let age = 20;
let country = "USA";

if (age > 17 && country == "UK") {
    console.log("Yes, I can serve you")
}
else if (age >20 && country == "USA") {
    console.log("Yes, I can serve you")
}
else {
    console.log("You aren't old enough")
}
*/

//Activity 2 - Pizza Topping - works
/*
let topping = "cheese";

switch (topping){
    case "ham and pineapple":
    case "pepperoni":
    case "anchovies":
    case "cheese":
        console.log("These are important ingredients for my pizza");
        break;
    case "mushrooms":
    case "peppers":
    case "onion":
        console.log(`I don't mind having ${topping} on my pizza`);
        break;
    case "olives":
    case "jalapenos":
        console.log(`${topping} should never be on a pizza!`);
        break;
    default:
        console.log(`What is ${topping}?`);
    }
*/

//Activity 3 - Password length - works
/*
let password = "peterpan"

if(password.length < 8){
    console.log("Password is too short!");
}
else{
    console.log(`${password}`);
}
*/

//Activity 4 - Fizz Buzz - works
/*
let num = 15
let numFizz = num % 3
let numBuzz = num % 5
if(numFizz == 0 && numBuzz == 0){
    console.log("fizz buzz")
}
else if(numFizz == 0){
    console.log("fizz")
}
else if(numBuzz == 0){
    console.log("buzz")
}
*/

//Activity 5 - Palindrome Check - works
/*
let num = 5115
let n = num.toString();
let nSplit = n.split("");
//    console.log(nSplit) // put in to check the result of the above line
let nBack = n.split("").reverse().join("");
if(n === nBack){
    console.log(`${num} is a palindrome`)
}
else
    console.log(`${num} is not a palindrome`)
*/

//Activity 6 - placeOfWork - works
/*
let time = 19;
let placeOfWork = "Liverpool";
let townOfHome = "Chester";

if(time < 8) {
    console.log(`I'm at home in ${townOfHome}`);
}
else if(time >= 8 && time < 9) {
    console.log("I'm commuting");
}
else if(time >= 9 && time < 18) {
    console.log(`I'm at work in ${placeOfWork}`);
}
else if(time >= 18 && time < 19) {
    console.log("I'm commuting");
}
else {
    console.log(`I'm at home in ${townOfHome}`);
}
*/

//Activity 7 - last vowel

/*const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let strLength = (str.length);
    console.log(strLength)
//let array1 = str1.split('');
//console.log(`${array1}`)
const vowel = "a"||"e"||"i"||"o"||"u"
let i = str.length;
    console.log(i)
if(charAt(i) = vowel){
    console.log(i)
}
else if
*/

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
    console.log(str.lastIndexOf("a"||"e"||"i"||"o"||"u"))


//start at end
//if character is a vowel find position and console log else -1 and try again 
//Logic.
//Go to last character. Is it a a vowel? If yes console.log character position. If no i--1 and repeat.
//If yes break.
//When i < 0 break

//console.log(str1.endsWith(vowel));
//if(array1.charAt(str1Length) = vowel){
 //   console.log(array.charAt())
//}
//else {
//    console.log(false)
//}





//Activity 8 - 1st and last letters the same? - works
/*
let word = "chimp";
let wordBack = word.split("").reverse().join("");
//    console.log(`${word} ${wordBack}`)
let word1 = word.charAt(0)
let wordBack1 = wordBack.charAt(0)
//    console.log(`${word1} ${wordBack1}`)
if(word1 == wordBack1){
    console.log(`The first and last letters of ${word} are the same (${word1})`)
}
else{
    console.log(`The first and last letters of ${word} are not the same (${word1} and ${wordBack1})`)
}
*/

//Activity 9 - Sum or multiply - works
/*
let num1 = 2;
let num2 = 2;
let numSum = (num1 + num2);
let numSumEven = (numSum % 2);
//  console.log(`${numSum}`)
//  console.log(`${numSumEven}`)
if(numSumEven === 0){
    console.log(num1 + num2)
}
else {
    console.log(num1 * num2)
}
*/