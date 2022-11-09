// $match:- The $match stage allows us to choose just those documents from a collection that we want to work with. It does this by filtering out those that do not follow our requirements.

// db.getCollection("aggregate").aggregate([{$match:{country:"Spain"}}])
// db.getCollection("aggregate").aggregate([{$match:{name:"UPSC"}}])

// Size
// db.getCollection("aggregate").find({students:{$size:4}})

// Gropup :-

//    With the $group stage, we can perform all the aggregation or summary queries that we need, such as finding counts, totals, averages or maximums.

// $count	Calculates the quantity of documents in the given group.
// $max	Displays the maximum value of a document’s field in the collection.
// $min	Displays the minimum value of a document’s field in the collection.
// $avg	Displays the average value of a document’s field in the collection.
// $sum	Sums up the specified values of all documents in the collection.
// $push	Adds extra values into the array of the resulting document.

// db.getCollection("aggregate").aggregate([{$group:{_id:"$country"}}])

// group by nested field
// db.getCollection("aggregate").aggregate([{$group:{_id:"$location.type"}}])
// db.getCollection("aggregate").aggregate([{$group:{_id:"$students.year"}}])
// db.getCollection("aggregate").aggregate([{$group:{_id:"$students"}}])

// group by two field
// db.getCollection("aggregate").aggregate([{$group:{_id:{country:"$country",location:"$location"}}}])
// db.getCollection("aggregate").aggregate([{$group:{_id:{country:"$country",city:"$city",name:"$name"}}}])

// match and group together


// db.getCollection("aggregate").aggregate([
//    //stage 1
// {$match:{city:"Salamanca"}},
//    //stage 2
//    {$group:{_id:{country:"$country",name:"$name"}}}
// ])

// db.getCollection("aggregate").aggregate([
// {$match:{city:"Salamanca"}},
//    {$group:{_id:{name:"$name",location:"$location"}}}
// ])

//         Now group first...after match  wrong order....
// db.getCollection("aggregate").aggregate([
//    //stage 1
//    {$group:{_id:{country:"$country",name:"$name"}}},    
//    //stage 2
//    {$match:{city:"Salamanca"}},
// ])

//         group match
// db.getCollection("aggregate").aggregate([
//    //stage 1
//    {$group:{_id:{name:"$name",country:"$country",city:"$city"}}},    
//    //stage 2
//    {$match:{"_id.name":{$eq:"USAL"}}}
// ])        

// count
// db.getCollection("aggregate").aggregate([{$count:"allDocumentCount"}])

// methods of count
// below both are client side methos so it takes more time than count method
// aggregate([]).toArray().length  
// aggregate([]).itcount()    

// Group and Count
// db.getCollection("aggregate").aggregate([
// {$group:{_id:"$country"}},
// {$count:"Country Count"}
// ])

// db.getCollection("aggregate").aggregate([
// {$match:{name:{$eq:"USAL"}}},
// {$group:{_id:{country:"$country",name:"$name"}}},
// {$count:"countryAndname"}
// ])

// sort sorting the input document
// db.getCollection("aggregate").aggregate([{$sort:{country:1}}])
// db.getCollection("aggregate").aggregate([{$sort:{country:-1}}])

// Project stage It will project which you  want a perticulars field
// db.getCollection("aggregate").aggregate([
// {$project:{name:1,city:1,country:1}}
// ])

// project with new field
// db.getCollection("aggregate").aggregate([
// {$project:{
//    _id:0,
//    name:1,
//    info:{
//        name:"$name",city:"$city",country:"$country"
//    }}}
// ])

// limit stage
// db.getCollection("aggregate").aggregate([
// {$limit:2}
// ])

// limit match group
// db.getCollection("aggregate").aggregate([
// {$limit:2},
// {$match:{city:{$eq:"Salamanca"}}},
// {$group:{_id:{city:"$city",name:"$name"}}},
// ])

// Array
//    db.getCollection("aggregate").aggregate([
//    {$match:{country:{$eq:"Spain"}}},
//    {$group:{"_id":"$students"}}
//    ])

// $unwind
// Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
// unwind and project
// db.getCollection("aggregate").aggregate([
// {$match:{country:{$eq:"Spain"}}},
// {$unwind:"$students"},
// {$project:{name:1,city:1,country:1,students:1}}
// ])

// unwind and group
// db.getCollection("aggregate").aggregate([
// {$match:{country:{$eq:"Spain"}}},
// {$unwind:"$students"},
// {$group:{_id:"$students.number"}}
// ])


// Accumulators
// $sum,$avg,$max,$min  only use in group stage

// unwind group in aggregate 
// db.getCollection("aggregate").aggregate([

// {$unwind:"$students"},
// {$match:{country:{$eq:"Spain"}}},
// {$group:
//    {
//        _id:"$students",
//        count:{$sum:1}
//    }
// }
// ])

//add Field in Record 
    
//db.getCollection("aggregate").aggregate([
//{$match:{name:"USAL"}},
//{$addFields:{foundation_year:1999}}
//])

//db.getCollection("aggregate").aggregate([
//{$match:{name:"UPSA"}},
//{$addFields:{foundation_year:2004}}
//])

//skip
//db.getCollection("aggregate").aggregate([
//{$skip:1}
//])

//****************************Query Optimized******************************************************
//MongoDB Query optimized

//db.getCollection("aggregate").getIndexes()

//db.getCollection("aggregate").createIndex({author_name:1})

//db.getCollection("aggregate").getIndexes()

//db.getCollection("aggregate").find({name:"UPSA"}).explain("executionStats")









