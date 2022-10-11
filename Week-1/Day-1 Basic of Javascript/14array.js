            //Create an array

// 'fruits' array created using array literal notation.
// const fruits = ['Apple', 'Banana'];
// console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
// const fruits2 = new Array('Apple', 'Banana');
// console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
// const fruits3 = 'Apple, Banana'.split(', ');
// console.log(fruits3.length);
// 2

            // Create a string from an array
// const fruits = ['Apple', 'Banana'];
// const fruitsString = fruits.join(', ');
// console.log(fruitsString);
// // "Apple, Banana"

            // Access an array item by its index
// const fruits = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
// fruits[0]; // Apple

// The index of an array's second element is always 1.
// fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
// fruits[fruits.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
// fruits[99]; // undefined

            // Find the index of an item in an array
// const fruits = ['Apple', 'Banana'];
// console.log(fruits.indexOf('Apple')); // 1

            // Check if an array contains a certain item
// const fruits = ['Apple', 'Banana'];

// fruits.includes('Banana'); // true
// fruits.includes('Cherry'); // false
            
// // If indexOf() doesn't return -1, the array contains the given item.
// fruits.indexOf('Banana') !== -1; // true
// fruits.indexOf('Cherry') !== -1; // false

            // Append an item to an array
// const fruits = ['Apple', 'Banana'];
// const newLength = fruits.push('Orange');
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// // 3

            // Remove the last item from an array

// const fruits = ['Apple', 'Banana', 'Orange'];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange

            // Remove multiple items from the end of an array
// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]

            // Truncate an array down to just its first N items

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// const start = 2;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherr]

            // Remove the first item from an array

// const fruits = ['Apple', 'Banana'];
// const removedItem = fruits.shift();
// console.log(fruits);
// // ["Banana"]
// console.log(removedItem);
// // Apple

            // Remove multiple items from the beginning of an array
// const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// ["Banana", "Mango"]
// console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]

            // Add a new first item to an array
// const fruits = ['Banana', 'Mango'];
// const newLength = fruits.unshift('Strawberry');
// console.log(fruits);
// // ["Strawberry", "Banana", "Mango"]
// console.log(newLength);
// // 3

            // Remove a single item by index
// const fruits = ['Strawberry', 'Banana', 'Mango'];
// const start = fruits.indexOf('Banana');
// const deleteCount = 1;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Strawberry", "Mango"]
// console.log(removedItems);
// // ["Banana"]

            // Remove multiple items by index

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango'];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]

            // Replace multiple items in an array
// const fruits = ['Apple', 'Banana', 'Strawberry'];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
// console.log(fruits);
// // ["Apple", "Mango", "Cherry"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]

            // Iterate over an array
// const fruits=['apple','banana','mango']
// for(let fruit of fruits){
//     console.log(fruit)
// }

            // But for...of is just one of many ways to iterate over any array; for more ways, see Loops and iteration, and see the documentation for the every(), filter(), flatMap(), map(), reduce(), and reduceRight() methods — and see the next example, which uses the forEach() method.

// Call a function on each element in an array            
// const fruits = ['Apple', 'Mango', 'Cherry'];
// fruits.forEach((item, index, array) => {
//   console.log(item, index);
// });
// Apple 0
// Mango 1
// Cherry 2

            // Merge multiple arrays together

// const fruits = ['Apple', 'Banana', 'Strawberry'];
// const moreFruits = ['Mango', 'Cherry'];
// const combinedFruits = fruits.concat(moreFruits);
// console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
// console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// ["Mango", "Cherry"]

// Copy an array

// const fruits = ['Strawberry', 'Mango'];

// Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]

// If you instead want a deep copy of an array, you can use JSON.stringify() to convert the array to a JSON string, and then JSON.parse() to convert the string back into a new array that's completely independent from the original array.

// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
// console.log(fruitsDeepCopy)

            //shallow copy
// const fruits = ['Strawberry', 'Mango'];
// const fruitsAlias = fruits;
// // 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
// fruits === fruitsAlias // true
// // Any changes to the 'fruits' array change 'fruitsAlias' too.
// fruits.unshift('Apple', 'Banana');
// console.log(fruits);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']
// console.log(fruitsAlias);
// // ['Apple', 'Banana', 'Strawberry', 'Mango']

            // Grouping the elements of an array

// const inventory = [
//   { name: 'asparagus', type: 'vegetables' },
//   { name: 'bananas', type: 'fruit' },
//   { name: 'goat', type: 'meat' },
//   { name: 'cherries', type: 'fruit' },
//   { name: 'fish', type: 'meat' },
// ];

// const result = inventory.group(({ type }) => type);
// console.log(result.vegetables);
// expected output: Array [Object { name: "asparagus", type: "vegetables" }]

// console.log(inventory)

            // Using an array to tabulate a set of values

// const values = [];
// for (let x = 0; x < 10; x++) {
//   values.push([
//     2 ** x,
//     2 * x ** 2,
//   ]);
// }
// console.table(values);

// The copyWithin():-

                // The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin.
                
                // (insert position, start position, end position)

// let arr1 = [10,20,30,40,50,60,70,80,90,100];
// arr1.copyWithin(2);
// console.log(arr1);          //[10,20,10,20,30,40,50,60,70,80]

// let arr2 = [10,20,30,40,50,60,70,80,90,100];
// arr2.copyWithin(5);
// console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]

// let arr3 = [10,20,30,40,50,60,70,80,90,100]
// arr3.copyWithin(8);
// console.log(arr3);    //[10,20,30,40,50,60,70,80,10,20]

// let arr4 = [10,20,30,40,50,60,70,80,90,100];
// arr4.copyWithin(2,4);
// console.log(arr4);          //[10,20,50,60,70,80,90,100,90,100]

// let arr5 = [10,20,30,40,50,60,70,80,90,100];
// arr5.copyWithin(3,6);
// console.log(arr5);    //[10,20,30,70,80,90,100,80,90,100]

// let arr6 = [10,20,30,40,50,60,70,80,90,100];
// arr6.copyWithin(2,4,7);
// console.log(arr6);      //[10,20,50,60,70,60,70,80,90,100]

// let arr7 = [10,20,30,40,50,60,70,80,90,100];
// arr7.copyWithin(1,5,8);
// console.log(arr7);          //[10,60,70,80,50,60,70,80,90,100]