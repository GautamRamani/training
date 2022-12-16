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


//Prototype

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// let object ={
//     name:"gautam",
//     city:"surat",
//     getIntro:function(){
//         console.log(this.name+" from "+this.city)
//     }
// }

// let object2={
//     name:"yaman"
// }

// object2.__proto__=object;

//Callback hell

// const cart = ['dhiraj','raj','indore',22]

// const intro=()=>{
//     setTimeout(()=>{
//         console.log(`my name is ${cart[0]} ${cart[1]}`)
//         setTimeout(()=>{
//             console.log(`from ${cart[2]}`)
//             setTimeout(()=>{
//                 console.log(`i am  ${cart[3]} year old`)    
//             },1000)    
//         },1000)
//     },1000)
// }
// intro()

//Promise
// let promise = new Promise((resolve, reject) => {
//     resolve("resolved")
//     // reject("rejected")
// })

// promise.then(
//     (posres) => {
//         console.log(posres)
//     },
//     (errres) => {
//         console.log(errres)
//     }
// )


// let stocks={
//     Fruits:['Strawbary','grapes','banana','apple'],
//     liquid:['Water','ice'],
//     holder:['cone','cup','stick'],
//     toppings:['chocolate','peanuts'],
// };
// let is_shop_open=false;
// let order = ( time, work ) => {
//     return new Promise( ( resolve, reject )=>{ 
//      if( is_shop_open ){
//           setTimeout(()=>{
//           resolve( work() )
//          }, time)
//       }
//       else{
//         reject( console.log("Our shop is closed") )
//       }
//     })
//   }

// // step1
//   order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
  
// // step 2
// .catch(()=>{
//     console.log("Customer left")
//   })

// // step 3
// .then(()=>{
//       return order(0000,()=>console.log('production has started'))
//     })
    
// // step 4
// .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 5
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// // step 6
// .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
// })

// // step 7
// .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// // step 8
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// // Step 9
// .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
// })

// // step10
// .finally(()=>{
//     return console.log('\nEnd of the day\nOur Shop is Closed')
// })

