// With ES6, JavaScript introduced object destructuring to make it easy to create variables from an object's properties.


// const user={
    //     'name':'John',
    //     'address':'Royal Homes',
    //     'age':30
    // }

    // console.log(user)
    // console.log(user.name)
    
    // let name=user.name;
    // let age=user.age;
    // console.log(name,age)
    
// ****************************************
    
    
// we can extract values from more than one object property

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

//Basic
// const {name}=user;
// console.log(name)

//multiple
// const {name,age}=user;
// console.log(name,age)

//Add a New Variable & Default Value
// const {name,age,salery=20000}=user;
// console.log(name,age,salery)


// const {name,address,fullname=`${name} ${address}`}=user;
// console.log(fullname)

//add Aliases (change the variable name)
// console.log(permanenentAddress)
// const{address:permanenentAddress}=user;


// Nested Object Destructuring

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     'department':{
//         'name': 'Sales',
//         'Shift': 'Morning',
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'zip': 560001
//         }
//     }
// }

// const { department } = user;
// console.log(department)

// const {department:{Shift}}=user;
// console.log(Shift)

// const {department:{address:{city}}}=user;
// console.log(city)

//Dynamic Name Property

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// const getValue = key => {
//     const { [key]: returnValue } = user;   
//     return returnValue;
// }
// console.log(getValue('name'))
// console.log(getValue('address'))
// console.log(getValue('age'))

//Destructure to the Function Parameter

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// function details({name,age}){
//     console.log(`${name} is ${age} year(s) old`)
// }
// details(user)

// Destructure Function Return Value

// const getUser=()=>{
//     return {
//         'name':'Alex',
//         'address':'15th Park Avenue',
//         'age':43
//     }
// }
// const {name,age}=getUser();
// console.log(name,age)

// Destructure in Loops

// const users=[
//     {
//         'name':'Alex',
//         'address':'15th Park Avenue',
//         'age':43
//     },
//     {
//         'name':'Bob',
//         'address':'Canada',
//         'age':40
//     },
//     {
//         'name':'Alex',
//         'address':'Banglore',
//         'age':23
//     }
// ];
// for(let {name,age} of users){
//     console.log(`${name} is ${age} year(s) old`)
// }


// const { log, warn, error } = console;

// log('I log into the browser console');
// warn('I am a warning');
// error('I am an error');

//spread Syntex
// The Spread Syntax (also known as the Spread Operator) is another excellent feature of ES6. As the name indicates, it takes an iterable (like an array) and expands (spreads) it into individual elements.

// Create a Clone of an Object
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const clone={...user};
// console.log(clone)
// console.log(user===clone)

// const add={...user,salery:22000};  // Add Properties to Objects
// console.log(add)

// console.log(user)  //Note that the actual object never gets changed.

// const updateuser={...user,name:'Virat'}  //Update Properties
// console.log(updateuser)

// Update Nested Objects
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     'department':{
//         'name': 'Sales',
//         'Shift': 'Morning',
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'zip': 560001
//         }
//     }
// }
// const update={...user,name:'virat'}
// console.log(update)

// const updated = {
//     ...user, 
//     department: {
//         ...user.department, 
//         'number': 7
//     }
// };
// console.log(updated);

// Combine (or Merge) two Objects

// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const department = {
//     'id': '001',
//     'Shift': 'Morning'
// }

// const merge={...user,...department}
// console.log(merge)

// The Rest Parameter in JavaScript
// The Rest parameter is kind of opposite to the spread syntax. While spread syntax helps expand or spread elements and properties, the rest parameter helps collect them together.


// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const {age, ...rest} = user;
// console.log(age, rest);