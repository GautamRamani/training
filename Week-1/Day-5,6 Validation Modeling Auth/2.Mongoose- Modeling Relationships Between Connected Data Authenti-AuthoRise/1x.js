
//Trade off between query performance vs consistancy

//using References (Normalization) ->CONSISTANCY
var author={
    name:'Yash'
}

var course={
    author:'id'
}

//using Embedded Documents (Denormalzation)
var course={
    author:{
        name:'yash'
    }
}

//Hybrid
var author={
    name:{
     //50 other property
    }
}

var course={
    author:{
        id:'ref',
        name:'yash'
    }
}