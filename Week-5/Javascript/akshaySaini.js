//***********print x before declaration************

// console.log(x)  //here x is undefined because it is not store in memory component

// var x=7;

//Shortest js Program
//  Empty File 

//not defined and undefined

// console.log(a)
// var a=10;

// console.log(x)

//Event

// let count=0;
// document.getElementById("clickMe")
//     .addEventListener("click", function xyz() {
//         console.log("Button Clicked",count++)
//     })

// 


// const radius=[1,2,3,4,5]

// var calArea=(radius)=>{
//     let arr=[];
//     for (let i = 0; i < radius.length; i++) {
//         arr.push(Math.PI*radius[i]*radius[i])
//     }
//     return arr;
// }
// console.log(calArea(radius))

//map for transformation

// const arr=[1,2,3,4,5]

// const output=arr.map((element)=>{
//     return element*2
// })
// console.log(output)

// const users=[
//     {name:"mihir",lastname:"timbadiya",age:22},
//     {name:"piyush",lastname:"raiyani",age:23},
//     {name:"yogesh",lastname:"devani",age:24},
//     {name:"parag",lastname:"riyan",age:25}
// ]
// var output=users.map((element)=>{
//     return element
// })
// console.log(output)

//filter for filteraion

// const arr = [1, 2, 3, 4, 5, 6]

// const output = arr.filter((element) => {
//     if (element % 2!==0){
//         return element;
//     }
// })
// console.log(output)

//reduce

// const arr = [1, 2, 3, 4, 5]
// const output=arr.reduce((fisrt, next) => {
//     return fisrt + next
// },100)
// console.log(output)

//reduce right

// const arr = [" begin !!"," to"," daring"," from"," comes"," glory","All"]
// const output=arr.reduceRight((fisrt, next) => {
//     return fisrt + next
// })
// console.log(output)

// const users = [
//     { name: "mihir", lastname: "timbadiya", age: 22 },
//     { name: "piyush", lastname: "raiyani", age: 23 },
//     { name: "yogesh", lastname: "devani", age: 24 },
//     { name: "parag", lastname: "riyan", age: 22 }
// ]

// const output = users.filter((x) => x.age >= 23).map((x) => x.name)
// console.log(output)

// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{})
// console.log(output)