**Answers to yesterdays challenges**

||```
// // Activity 1
// let age = 16

// if (age > 17){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// // Activity 1 Stretch
// let age = 17
// let country = "UK"

// if (age > 17 && country === "UK"){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// // Activity 2
// let topping = "Pepperoni"

// switch (topping) {
//     case "Pepperoni":
//         console.log(`I don't mind ${topping} on my pizza!`)
//         break;
//     default:
//         console.log(`I don't like ${topping} on my pizza, go away!`)
// }

// // Activity 3

// let password = "123456789";

// if (password.length < 8){
//   console.log("This password is too short.");
// } else {
//   console.log(`Your new password is ${password}`);
// }

// // Activity 3 Stretch
// let num = 30;

// if (num % 3 == 0){
//   console.log("This number is divisble by 3.")
// } else if (num % 5 == 0){
//   console.log("This number is divisble by 5.");
// }

// // Switch Version
// let num = 25;
// switch(true) {
//   case num % 5 == 0:
//     console.log("This number is divisble by 5.")
//     break;
//   case num % 3 == 0:
//     console.log("This number is divisble by 3.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// // Activity 4
// let num = 31;

// switch(true) {
//   case num % 5 == 0 && num % 3 == 0:
//     console.log("Fizz Buzz.")
//     break;
//   case num % 3 == 0:
//     console.log("Fizz.")
//     break;
//   case num % 5 == 0:
//     console.log("Buzz.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// // Activity 5
// let num = 7337
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// // Activity 6
// let time = 7;
// let placeOfWork = "Manchester"
// let townOfHome = "Golborne"

// if (time == 8){
//   console.log(`I am commuting to work in ${placeOfWork}`);
// } else if (time == 7){
//   console.log(`I am at home in ${townOfHome}`);
// } else if (time == 9){
//   console.log(`I am at work in ${placeOfWork}`)
// } else {
//   console.log(`If it is between 9 and 5 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
// }

// // Activity 7
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // Activity 8
// let word = "evening";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // Challenge 8
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

```
||