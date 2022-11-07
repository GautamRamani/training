//1.Create Object with the help of Constructor

// function Bike(model,color){
//     this.model=model
//     this.color=color
// }
// this.getDetails=function(){
//     return this.model+"bike is "+this.color;
// }
// var bikeObj1= new Bike("BMW","Black")
// var bikeObj2= new Bike("BMW","White")

// console.log(bikeObj1,bikeObj2)

//With the help of ProtoType

// function Bike(model,color){
//     this.model = model,
//     this.color = color
//   }
//   Bike.prototype.getDetails = function(){
//    return this.model+" bike is "+this.color;
//   }
//   var bikeObj1 = new Bike("BMW","Black");
//   var bikeObj2 = new Bike("BMW","white");
//   console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
//   console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
//   console.log(bikeObj1,bikeObj2) // attacheced below image as output


// *********************************************************************

// Class:

// existing Prototype based inheritance:

// function Bike(model,color) {
//     this.model = model;
//     this.color = color;
// }
 
// Bike.prototype.getInfo = function() {
//     return this.color + ' ' + this.model+ ' bike';
// };


// ES6 class:

// class Bike{
//   constructor(color, model) {
//     this.color= color;
//     this.model= model;
//   }
// }


// ***********************************************************************

// 3. IIFE  Immediate Invokes functional expression
// (()=>{
//     console.log("Hello...")
// })();

// ***********************************************************************

// 4.understanding Scope:

//Local Scope 
//Global Scope

//Global Scope
// var Greeting='Welcome to blog';
// (function(){
//   console.log(Greeting); //Output: Welcome to blog
// })();


// (function(){
//     var greeting = 'Welcome to blog';
//       console.log(greeting); //Output: Welcome to blog
//     })();
// console.log(greeting)

// ***********************************************************************

// 5. JavaScript Closures
// What is Closure?

// A closure is the combination of a function and the lexical environment within which that function was declared.

// A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

// function User(name){
//     var displayName = function(greeting){
//      console.log(greeting+' '+name);
//     }
//   return displayName;
//   }
//   var myFunc = User('Raj');
//   myFunc('Welcome '); //Output: Welcome Raj
//   myFunc('Hello '); //output: Hello Raj

//  ***********************************************************************

// 6. The Module Pattern
// In JavaScript, a module is a small unit of independent, reusable code. Modules are the foundation of many JavaScript design patterns and are critically necessary when building any non-trivial JavaScript-based application.

// var myModule = (function() {
//     'use strict';
 
//     var _privateProperty = 'Hello World';
     
//     function _privateMethod() {
//         console.log(_privateProperty);
//     }
     
//     return {
//         publicMethod: function() {
//             _privateMethod();
//         }
//     };
// }());
  
// myModule.publicMethod();                    // outputs 'Hello World'   
// console.log(myModule._privateProperty);     // is undefined      
// protected by the module closure
// myModule._privateMethod();                  // is TypeError protected by the module closure

// these modules can have exported to the other JS files using the export keyword,

//myMOdule.js file
// export default myModule;

// modules can import to another JS file

//second.js file 
// import myModule from ‘./myModule’;


// Why do we need to use a Module?

// There are a lot of benefits to using modules in favor of a sprawling,

// some are,

// reusability
// Namespacing
// maintainability

//  ***********************************************************************

// 7. Hoisting:
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(quote)
// var quote="All glory comes..."

// var Hoist;
// console.log(Hoist);
// Hoist ='The variable Has been hoisted';


//  ***********************************************************************
// 8. Currying:

// Currying is a technique of evaluating the function with multiple arguments, into a sequence of function with a single argument.

// var add=function(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add(2)(3)(4))
// console.log(add(3)(4)(5))

// Why Useful Currying?
//  helpful in event handling.

//  ***********************************************************************
// 9. Memoization:
// Memoization is a programming technique that attempts to increase a function’s performance by caching its previously computed results.

// const memoizedAdd = () => {
//     let cache = {};
//     return (value) => {
//         if (value in cache) {
//             console.log('Fetching from cache');
//             return cache[value];
//         } else {
//             console.log('Calculating result');
//             let result = value + 10;
//             cache[value] = result;
//             return result;
//         }
//     }
// }
// // returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9)); //output: 19 calculated
// console.log(newAdd(9)); //output: 19 cached


//  ***********************************************************************

// 11. The apply, call, and bind methods:
// In traditionally JS have object, Properties, and methods, so each object has properties and methods.

// In JavaScript, we can do some magic using call, apply, bind methods

// var obj={
//     num : 2
//  }
//  var add = function(num2,num3,num4){
//     return this.num + num2 + num3 + num4;
//  }
//  var arr=[3,4,5];
 //Call method 
//  console.log(add.call(obj,3,4,5));  //Output : 14
 //Apply method
//  console.log(add.apply(obj,arr));   //Output : 14
 //bind Method
//  var bound = add.bind(obj);
//  console.log(bound(3,4,5));         //output : 14 


//  ***********************************************************************

// 11. Polymorphism in JavaScript:

// var employee = new Employee('raja');
// //override function
// //this method going to execute
// Employee.prototype.getDetails = function() {
//     return this.name.toUpperCase();
// }
// console.log(employee.getDetails()); //outPut: RAJA
// //object and prototype function
// function Employee(name) {
//     this.name = name;
// }
// Employee.prototype.getDetails = function() {
//     return this.name;
// }

//  ***********************************************************************

// 12. Asynchronous Js :

// In JavaScript Code Execution done By two separate ways:

// Browser JS Engine (popular V8 JS Engine)
// NodeJs V8 Engine
// Browser JS Engine parse Html file and executes JavaScript by three patterns,

// synchronous
// Asynchronous
// defer
// index.html
// <script src='index.js'>           //default Synchronous
// <script async src='index.js'>      //parse as Asynchronously
// <script defer src='index.js'>      //parse as deferred

// while browser JS Engine parsing HTML file if <Script > tag occurs means there will be blocking, so how it gets execute JavaScript Code for that above three patterns.

// If synchronous <script > tag occurs, JS engine will download the code and execute that code and after that only parsing the below HTML code, generally Synchronous is a blocking script execution.
// If Asynchronous <script async> tag occurs, while downloading the code JS engine will parse the HTML and once If JS code gets downloaded pause the parsing and back into the JS Code Execution, generally Asynchronous is a Non-blocking script execution.
// If Asynchronous <script defer> tag occurs, JS Engine will parse the all HTML code and after that only executes the JS Code,

// NodeJS V8 engine executes its JavaScript Code as single-threaded based on the Event loop!….. know more about NodeJS execution from the below links.

//  ***********************************************************************

// 13. Callback Function:

// function one(arg){
//     return arg()
// }
// function two(){
//     return "All glory comes from daring to Begin !!"
// }
// console.log(one(two))

// function greeting(name) {
//     console.log('Hello ' + name);
//     }
//     function processUserInput(callback) {
//         //var name = prompt('Please enter your name.');
//         name = 'raja';
//         callback(name);
//     }
//     processUserInput(greeting); //output Hello Raja

//  ***********************************************************************

// 14. Understand Promises :

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// rough:-promise object represent the status of completion or failure of an asyncronous operation and its resulting value.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//     - Promises divided into two categories.

//     1) Promise Creation

//     2) Promise Consumption

//     - Producer will create the Promises

//     - Consumer will consume the Promises

//     "Promise" is the Predefined class, used to create the "Promises"

//     we can consume Promises in two ways

//     1) then()

//     2) async & await keywords

//     Promises are alternative solution of Callback hell

// new:-
// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// let promise1 = new Promise((resolve, reject) => {
    // resolve("tomarrow we will discuss async & await keyword");
//   reject("cant do that not clear promises");
// });
// console.log(typeof Promise);
// console.log(typeof promise1);

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

//  ***********************************************************************

// 15. Async & Await:
// Babel now supporting async/await out of the box, and ES2016 (or ES7) just around the corner, async & await basically just syntactic sugar on top of Promises, these two keywords alone should make writing asynchronous code in Node much more bearable.

// ES5 -> Callback

// ES6 -> Promise

// ES7 -> async & await

//Make a Object via..........


// var obj={
//     name:"Gautam"
// }
// console.log(obj.name)

// var obj=Object.create(new Object)
// obj.name='Gutam'
// obj.surname='Ramani'
// console.log(obj.name,obj.surname)

// class bio{
//     constructor (name,surname){
//         this.name=name
//         this.surname=surname
//     }
//     getdeatil(){
//         return `my name is ${this.name} ${this.surname}`
//     }
// }
// const detail=new bio("Gautam","Ramani")
// console.log(detail.getdeatil())
