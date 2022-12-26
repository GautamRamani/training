// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday , Current time is : 10 PM : 30 : 38

// const date = new Date();
// console.log(`Today is: ${date.toLocaleString('en-us', { weekday: 'long' })} \n `)
// console.log(`Current time is: ${date.toLocaleString('en-US', { hour: 'numeric', hour12: true })} :${date.getMinutes()} :${date.getSeconds()}`)

//2. Write a JavaScript program to print the contents of the current window.
// function print_current_page() {
//     window.print();
// }

// 3. Write a JavaScript program to get the current date
// Expected Output : mm-dd-yyyy
// const date=new Date()
// console.log(`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`)

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// function triangle(arg1,arg2,arg3){
//     let s=(arg1+arg2+arg3)/2;
//     let area=Math.sqrt(s*((s-arg1)*(s-arg2)*(s-arg3)))
//     return area;
// }
// console.log(triangle(5,6,7).toFixed(3))

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// const numberOfDays = (year) => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 366 : 365;
// console.log(numberOfDays(2022))

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
// let year = 2014;
// function findYear() {
//     while (year <= 2050) {
//         if (new Date(year, 0, 1).getDay() === 0) {
//             console.log(year)
//         }
//         year++;
//     }
// }
// findYear(year);

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

// function getRandomInt(min,max){
//     let result=Math.floor(Math.random()*((max-min)+min));
//     console.log(result)
//     let promptNumber=window.prompt("Enter Number: ");
//     if(promptNumber==result){
//         console.log("Good Work")
//     }else{
//         console.log("Not matched")
//     }
// }

//9. Write a JavaScript program to calculate days left until next Christmas.

let today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
console.log(cmas)
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     cmas.setFullYear(cmas.getFullYear() + 1);
// }
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");

// 23-12-2022
// 24-12-2022