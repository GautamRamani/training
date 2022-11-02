// let age: number =20;
// if(age<50)
//     age+=10;
// console.log(age)

//any

// let sales =123_456_789;
// let course ="TypeScript";
// let is_published =true;
// let level;

// function render(document){
//     console.log(document)
// }

//any::array

// let numbers:number[]=[1,2,3];
// let numbers=[1,2,3];

// let numbers1:number[]=[1,2,3];
// numbers.forEach(n=>n.)

//Tuples

// let user:[number,String,boolean,number]=[1,"GR",true,0]

// user[0].     //show number method
// user[1].     //show string method

// Enums

// const small=1;
// const medium=2;
// const large=3;

// const enum Size {small=1,Medium,Large}   //Pascal case
// let mySize: Size = Size.Medium
// console.log(mySize)

//Functions
// function calculateTax(income:number,taxYear=2022):number{
//     if(taxYear<2022)
//         return income * 1.2;
//         return income * 1.3;
// }

// console.log(calculateTax(10_000,2023))

// function cal(salery:number):number{
//     return salery*10000;
// }
// console.log(cal(5))


//Objects

// type Employee={
//     readonly id: number,
//     name: string,
//     retire: (date:Date)=>void
// }

// let employee:Employee={
//         id:1,
//         name:"GR",
//         retire:(date:Date)=>{
//             console.log(date)
//         }
//     }

// let obj={   //rough
//     id:1,
//     name:"Gr",
//     code:27017
// }
// console.log(obj)


//Union Types
//  function kgtoLbs(weight:number|string):number{
//     //Narrowing
//     if(typeof weight==='number')
//         return weight *2.2;
//     else
//         return parseInt(weight)*2.2;
//  }

//  console.log(kgtoLbs(10));

//InterSection type
// type UIWidget = Draggable & Resizable;
//  let textBox: UIWidget={
//     drag:()=>{},
//     resize:()=>{}
//  }

//Literal Type
// type Quantity=50|100;
// let quantity:Quantity=100;

//Nullable Types
// function greet(name:string|null|undefined){
//     if(name)
//     console.log(name.toUpperCase())
//     else
//     console.log("Hola!")
// }
// console.log(greet(undefined))
// console.log(greet("Hola"))

//Optional Chaining
// type Customer={
//     birthday?:Date
// };

// function getCustomer(id:number):Customer|null|undefined{
//     return id===0?null:{birthday:new Date()};
// }

// let customer = getCustomer(1);
//Optional property access operator
    // console.log(customer?.birthday?.getFullYear())

//Optional element access operator
//customer?.[0]

//Optional call
// let log:any =null;
// log?.("a")
