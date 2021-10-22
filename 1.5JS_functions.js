//Cinema Ticket Machine - else if - works
/*
let age = 60;

if (age < 18) {
    console.log("Ticket price £8.00")
}
else if (age >= 60) {
    console.log("Ticket price £7.50")
}
else {
    console.log("Ticket price £10.95")
}
*/

//Function - favColour - works
/*
const favColour = () => {
    console.log('My favourite colour is Blue');
}
favColour();
*/
//Function Parameter and template Literal - works
/*
//let colour = "green" //variable as parameter
const favColour = (colour) => {
    console.log(`My favourite colour is ${colour}`);
}
favColour("blue");
*/

//Return - ends function - 
/*
const addUp = (num1, num2) => {
    return num1 + num2
}
addUp(3, 7)
console.log(addUp(2, 7))
*/

// Activity1 - Change declaration to arrow function syntax - works
//declaration
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(18));
//arrow
// const factorial1 = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial1(n-1))
//     }
// } 
// console.log(factorial1(18))

// Activity2 include 2 paprameters and running order count
// original
// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }
// takeOrder("pineapple");

// updated - works
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }
// takeOrder("pineapple", "ham");
// takeOrder("peperoni")
// takeOrder("anchovies")
// console.log(`Order count ${orderCount}`)

//Activity3 Cash machine - works but doesn't update balance
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

