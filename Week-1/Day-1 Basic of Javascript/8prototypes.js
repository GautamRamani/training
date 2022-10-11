// Prototypes:-

    // JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which JavaScript practitioners need to know.

// function Point2D(x,y){
//     this.x=x;
//     this.y=y;
// }

// Point2D.prototype.move=function(dx,dy){
//     this.x+=dx;
//     this.y+=dy;
// }

// var p1=new Point2D(1,2);
// p1.move(3,4);

// console.log(typeof Point2D)
// console.log(typeof p1)

// console.log(p1.x)
// console.log(p1.y)

// ********************************************

// var obj1={
//     a:1,
//     b:2
// };

// var obj2=Object.create(obj1);

// console.log(typeof obj2)

// console.log(obj2.a)
// console.log(obj2.b)
// console.log(obj2.c)

// Classes
    // In ES2016, we now get to use the Class keyword as well as the methods mentioned above to manipulate prototype. The JavaScript Class appeals to developers from OOP backgrounds, but it’s essentially doing the same thing as above.


    // class rectangle{
    //     constructor (height,width){
    //         this.height=height
    //         this.width=width
    //     }

    //     get area(){
    //         return this.calcArea()
    //     }

    //     calcArea(){
    //         return this.height*this.width
    //     }
    // }

    // const square=new rectangle(10,10);
    // console.log(square.area)
    // console.log(square.calcArea())

    //short
    // function rectangle(height,width){
    //     this.height=height
    //     this.width=width
    // }
    // rectangle.prototype.calcArea=function calcArea(){
    //     return this.height*this.width
    // }

    // const square=new rectangle(10,10);
    // console.log(square.calcArea())

    // class rectangle{
    //     constructor (height,width){
    //         this.height=height;
    //         this.width=width;
    //     }
    //     calArea(){
    //         return this.height*this.width;
    //     }
    // };
    // const square=new rectangle(12,12)
    // console.log(square.calArea())
    
