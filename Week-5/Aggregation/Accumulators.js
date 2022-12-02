//db.getCollection("Accumulator").find({})

//Accumulators
//$sum,$avg,$max,$min  only use in group stage

//sum
//db.getCollection("Accumulator").aggregate([
//{$group:
//        {
//         _id:"$age",
//         totalQuantity:{$sum:"$quantity"},
//         count:{$sum:1}}}
//])


//unwind group in aggregate script

//avg
//db.getCollection("Accumulator").aggregate([
//{
//    $group:{
//        _id:"$age",
//        avgQuantity:{$avg:"$quantity"}
//    }
//}
//])

//max
//db.getCollection("Accumulator").aggregate([
//{
//    $group:{
//        _id:"$age",
//        MaxQuantity:{$max:"$quantity"}
//    }
//}
//])


//min
//db.getCollection("Accumulator").aggregate([
//{
//    $group:{
//        _id:"$age",
//        MinQuantity:{$min:"$quantity"}
//    }
//}
//])

//Unary Oprator used in project and group stage
//type,or,lt,gt,and,multiply

// db.getCollection("Accumulator").aggregate([
// {
//    $project:{
//        _id:"$age",
//        ageType:{$type:"$age"},
//        quantityType:{$type:"$quantity"},
//    }
// }
// ])

//out stage
//The $out operation creates a new collection if one does not already exist. The collection is not visible until the aggregation completes.

// db.getCollection("Accumulator").aggregate([
//    {$group:{_id:{age:"$age",quantity:"$quantity"}}},
//    {$out:"aggrigationResults"}
// ])

//allowDiskUse:true
//all aggregation stages can use maximum 100 mb of RAM,server will return error if RAM limit is exceeded
//Following option will enable MongoDB to write stages data to the temproral files {allowDiskUse:true}
// db.getCollection('persons').aggregate([{$match:{index:0}},{$project:{_id:"$gender",ageType:{$type:"$age"},tagsType:{$type:"$tags"}}}])

// db.getCollection('persons').aggregate([{$group:{_id:{index:"$index",name:"$name",isActive:"$isActive",registered:"$registered",age:"$age",gender:"$gender",eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit",company:"$company",tags:"$tags"}}},{$out:"OutStage"}])
