// Object:-
    // JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

    // example:- A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. 

// const myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;
// console.log(myCar)
// console.log(typeof myCar)

// console.log(myCar.color)  //undefined

// myCar['color']='silver'
// myCar['performance']='Good';

// console.log(myCar.color)
// console.log(myCar.performance)

// four variables are created and assigned in a single go,
// separated by commas
// let myObj = {},
//       str = 'myString',
//       rand = Math.random(),
//       anotherObj = {};

// // Now, creating additional properties.
// myObj.type              = 'Dot syntax for a key named type';
// myObj['date created']   = 'This key has a space';
// myObj[str]              = 'This key is in variable str';
// myObj[rand]             = 'A random number is the key here';
// myObj[anotherObj]       = 'This key is object anotherObj';
// myObj['']               = 'This key is an empty string';

// console.log(myObj);
// console.log(myObj.myString);

// str = 'myString';
// myObj[str] = 'This key is in variable str';

// console.log(myObj.str); //[Log] undefined
// console.log(myObj[str]); //[Log] This key is in variable str
// console.log(myObj.myString); //[Log] This key is in variable str



// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
//   };

// let propertyName = 'make';
// myCar[propertyName] = 'Ford';

// access different properties by changing the contents of the variable
// propertyName = 'model';
// myCar[propertyName] = 'Mustang';

// console.log(myCar);

// [Log] {make: 'Ford', model: 'Mustang'}


// function showProps(obj, objName) {
//     let result = '';
//     for (const i in obj) {
//       // obj.hasOwn is used to exclude properties from the object's prototype chain and only show "own properties"
//       if (Object.hasOwn(obj, i)) {
//         result += `${objName}.${i} = ${obj[i]}\n`;
//       }
//     }
//     console.log(result);
// }
// console.log({'name':'swift'},'car')

// Enumerate the properties of an object
// There are three native ways to list/traverse object properties:

// for...in loops. This method traverses all of the enumerable string properties of an object as well as its prototype chain.

// Object.keys(myObj). This method returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.

// Object.getOwnPropertyNames(myObj). This method returns an array containing all the own string property names in the object myObj, regardless of if they are enumerable or not.

// Creating new objects

// const obj = {
//     property1: 'value1',   // property name may be an identifier
//     2: 'value2',   // or a number
//     'property n': 'value3'    // or a string
//   };
//   console.log(obj)

// const myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
// console.log(myHonda)

// Using a constructor function
// Alternatively, you can create an object with these two steps:

// Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
// Create an instance of the object with new.

// function Car(make,model,year){
//     this.make=make,
//     this.model=model,
//     this.year=year
// }
// const myCar=new Car('Eagle','talon TSi','1993')
// console.log(myCar)

// const kenscar = new Car('Nissan', '300ZX', 1992);
// const vpgscar = new Car('Mazda', 'Miata', 1990);
// console.log(kenscar)
// console.log(vpgscar)

// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }

//   const rand = new Person('Rand McKinnon', 33, 'M');
//   const ken = new Person('Ken Jones', 39, 'M');

//   console.log(rand)
//   console.log(ken)

// Using the Object.create method

// Animal properties and method encapsulation
// const Animal = {
//     type: 'Invertebrates', // Default value of properties
//     displayType() {  // Method which will display type of Animal
//       console.log(this.type);
//     }
//   };
  
//   // Create new animal type called animal1
//   const animal1 = Object.create(Animal);
//   animal1.displayType(); // Output: Invertebrates
  
//   // Create new animal type called fish
//   const fish = Object.create(Animal);
//   fish.type = 'Fishes';
//   fish.displayType(); // Output: Fishes


// *******************************************

// Inheritance
// All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the prototype object of the constructor.

// Using this for object references

// const Manager = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer"
//   }
//   const Intern = {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern"
//   }

//   function sayHi(){
//     console.log(`Hello, my name is ${this.name}`)
//   }

// Manager.sayHi=sayHi;
// Intern.sayHi=sayHi;
 
// Manager.sayHi()
// Intern.sayHi()

// Defining getters and setters
// const myObj = {
//     a: 7,
//     get b() {
//       return this.a + 1;
//     },
//     set c(x) {
//       this.a = x / 2;
//     }
//   };
  
//   console.log(myObj.a); // 7
//   console.log(myObj.b); // 8 <-- At this point the get b() method is initiated.
//   myObj.c = 50;         //   <-- At this point the set c(x) method is initiated
//   console.log(myObj.a); // 25


// const myObj = { a: 0 };

// Object.defineProperties(myObj, {
//   b: { get() { return this.a + 1; } },
//   c: { set(x) { this.a = x / 2; } },
// });

// myObj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
// console.log(myObj.b); // Runs the getter, which yields a + 1 or 6

// Deleting properties
// Creates a new object, myobj, with two properties, a and b.
// const myobj = new Object();
// myobj.a = 5;
// myobj.b = 12;

// // Removes the a property, leaving myobj with only the b property.
// delete myobj.a;
// console.log ('a' in myobj); // output: "false"

// Comparing objects

// Two variables, two distinct objects with the same properties
// const fruit = {name: 'apple'};
// const fruitbear = {name: 'apple'};

// fruit == fruitbear; // return false
// fruit === fruitbear; // return false


// *********************************

// Two variables, a single object
// const fruit = {name: 'apple'};
// const fruitbear = fruit;  // Assign fruit object reference to fruitbear

// // Here fruit and fruitbear are pointing to same object
// fruit == fruitbear; // return true
// fruit === fruitbear; // return true

// fruit.name = 'grape';
// console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }

