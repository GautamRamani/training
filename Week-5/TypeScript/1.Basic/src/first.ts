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

// **********************************************************Extra************************************

// class :- Blue print of an object

// class Account{
//     readonly id:number;
//     owner:string;
//     balance:number;

//     constructor(id:number,owner:string,balance:number){
//         this.id=id;
//         this.owner=owner;
//         this.balance=balance;
//     }

//         deposit(amount:number):void{
//             if(amount<=0)
//                 throw new Error("Invalid Amount")
//                 //Record a Transaction
//             this.balance+=amount;
//     }
// }

//object       --upper class and object code merge

// let account=new Account(1,"GR",0)
// account.deposit(100);
// console.log(account.balance)

// console.log(account)
// console.log(typeof account)
// console.log(account instanceof Account)


//Read only and optional property

// account.id=0;   //Cannot assign to 'id' because it is a read-only property.   --> readonly id:number

//Access Specifier      //Modify Upper Code
//Type Script has Three Access Specifier Public,Private,Protected

// class Account{
//     nickname?:string

//     constructor(
//         public readonly id:number,
//         public owner:string,
//         private _balance:number){
//     }

//         deposit(amount:number):void{
//             if(amount<=0)
//                 throw new Error("Invalid Amount")
//                 //Record a Transaction
//             this._balance+=amount;
//     }
// }

//Getter Setter

// class Student {
//     private _name:string="Gautam Ramani";

//     //get
//     public get detail(){
//         return this._name;
//     }
// }
// //access any property of Student class
// let getall=new Student();

// console.log(getall.detail)

// class  Account{
//     private _balance=1000;

//     get balance():number{
//         return this._balance;
//     }

//     set balanced(value:number){
//         if(value<0)
//         throw new Error();
//         this._balance=value;
//     }
// }
// let showbal=new Account();
// console.log(showbal.balance)

//Index Signature
// class SeatAssignment{
//     //A1,A2...
//     //Yash,Rohan
//     //Index Signature Property
//     [seatNumber:string]:string
// }

// let seats =new SeatAssignment();
// seats.A1="Yash"
// seats["A2"]="Rohan"             //Another way to access
// seats.A1=1                      //we can not use number because we already identify seatNumber as a string

//Static Members
// class Ride{
//     private static _activeRides:number=0;
//      start() {Ride._activeRides++;}
//      stop() {Ride._activeRides--;}

//      static get activeRides(){
//         return Ride._activeRides;
//      }
// }

// let ride1=new Ride()
// ride1.start();

// let ride2=new Ride()
// ride2.start();

// let ride3=new Ride()
// ride3.stop();

// console.log(Ride.activeRides)

//Inheritance
//Parent/Base/Super
//Child/Derived/sub

//     class Person
//     {
//         constructor(public firstName:string,public lastName:string){}

//             get fullName(){
//                 return this.firstName+ ' ' +this.lastName;
//             }

//             walk(){
//                 console.log("Walking")
//             }
//         }


//     class Student extends Person{
//         constructor(public studentId:number,firstName:string,lastName:string){
//         super(firstName,lastName)

//     }
//         takeTest(){
//             console.log("taking a test")
//     }
// }

// let student= new Student(1,'john','john@gmail.com')

//Method Overriding   //add above code

// class Teacher extends Person{
//     override get fullName(){
//         return 'Professor ' +super.fullName;
//     }
// }

// class Principle extends Person{
//     override get fullName(){
//         return 'Principle ' +super.fullName;
//     }
// }
// let teacher=new Teacher('Gautam','Ramani');
// console.log(teacher.fullName)

//PolymerPhism  //add upper code
// printNames([
//     new Student(1,'John','Smith'),
//     new Teacher('gautam','Ramani'), 
//     new Principle('Raju','Rastoki') 
// ])

// function printNames(people:Person[]){
//     for (let person of people)
//     console.log(person.fullName)
// }    


///Abstarct
// abstract class Shape{
//     constructor(public color:string){}

//     abstract render():void;
// }

// class Circle extends Shape{
//     constructor (public radius:number,color:string){
//         super(color)
//     }

//     override render(): void {
//         console.log("Rendering a circle")
//     }
// }

// let shape=new Shape("red")
// shape.render()

//Interfaces  
//Define shape of object

// abstract class Calender{
//     constructor (public name:string){}

//     abstract addEvent():void;
//     abstract removeEvent():void;
// }

// interface Calender {
//     name: string;
//     addEvent(): void;
//     removeEvent(): void;
// }

// interface CloudCalender extends Calender {
//     sync(): void;
// }

// class GoogleCalender implements Calender {
//     constructor (public name:string){}

//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEvent(): void {
//         throw new Error("Method not implemented.");
//     }
// }

//Type Assertion
// let phone=<HTMLInputElement> document.getElementById("phone");
// phone.value

//The Unknown Type
// function render(document:unknown){
//     //Narrowing
//     // if(typeof document==="string"){
//     //     document.toUpperCase();
//     // }
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

