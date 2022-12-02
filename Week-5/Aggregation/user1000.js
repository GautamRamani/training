
// db.getCollection('persons').find({eyeColor:"green"}).count()
// db.getCollection('persons').find({$or:[{gender:"male"},{favoriteFruit:"apple"}]})
// db.getCollection('persons').find({$and:[{gender:"male"},{favoriteFruit:"apple"}]}).count()
// db.getCollection('persons').find({age:{$eq:35}}).count()
// db.getCollection('persons').find({age:{$lt:35}}).count()
// db.getCollection('persons').find({age:{$gt:35}}).count()
// db.getCollection('persons').find({age:{$lte:35}}).count()
// db.getCollection('persons').find({age:{$gt:35}}).count()


                                    //Aggregation

//match
// db.getCollection('persons').aggregate([{$match:{gender:"male"}}]).itcount()
// db.getCollection('persons').aggregate([{$match:{gender:"female"}}]).itcount()

//group
// db.getCollection('persons').aggregate([{$group:{_id:"$gender"}}])
// db.getCollection('persons').aggregate([{$group:{_id:"$favoriteFruit"}}])

//group by nested
//db.getCollection('persons').aggregate([{$group:{_id:"$company.title"}}])

////group by two field
// db.getCollection('persons').aggregate([{$match:{gender:"female"}},{$group:{_id:{eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit"}}}])

//count
// db.getCollection('persons').aggregate([{$count:"CountedDocs"}])

// Group and Count
// db.getCollection('persons').aggregate([{$group:{_id:"$gender"}},{$count:"Total Gender::"}])

//Group and match
// db.getCollection('persons').aggregate([{$match:{gender:"male"}},{$group:{_id:{name:"$name",age:"$age"}}},{$count:"Total Gender::"}])

//sort
// db.getCollection('persons').aggregate([{$sort:{index:-1}}])

//Project
// db.getCollection('persons').aggregate([{$project:{_id:0,name:1,info:{name:"$name",age:"$age",gender:"$gender"}}}])
// db.getCollection('persons').aggregate([{$project:{name:1,info:{name:"$name",age:"$age",gender:"$gender"}}}])
//db.getCollection('persons').aggregate([{$match:{gender:"male"}},{$project:{info:{name:"$name",age:"$age"}}}])

//limit skip
// db.getCollection('persons').aggregate([{$limit:100}])
// db.getCollection('persons').aggregate([{$skip:500}]).itcount()

// db.getCollection('persons').aggregate([{$limit:10},{$match:{gender:"female"}},{$group:{_id:{name:"$name",age:"$age"}}}])

// db.getCollection('persons').aggregate([{$match:{gender:"female"}},{$group:{_id:{name:"$name"}}}])

//unwind
// db.getCollection('persons').aggregate([{$match:{gender:"male"}},{$unwind:"$tags"},{$group:{_id:"$tags"}}])
// db.getCollection('persons').aggregate([{$match:{gender:"male"}},{$unwind:"$tags"},{$project:{name:1,age:1}}])

                                        //Accumulator

//$avg,$sum,$min,$max

// db.getCollection('persons').aggregate([{$group:{_id:"$gender",totalAge:{$sum:"$age"},person:{$sum:1}}}])
// db.getCollection('persons').aggregate([{$group:{_id:"$gender",avgAge:{$avg:"$age"}}}])
// db.getCollection('persons').aggregate([{$group:{_id:"$gender",maxAge:{$max:"$age"}}}])
// db.getCollection('persons').aggregate([{$group:{_id:"$gender",maxAge:{$min:"$age"}}}])


//****************************Query Optimized******************************************************
//MongoDB Query optimized

//db.getCollection("persons").getIndexes()

//db.getCollection("persons").createIndex({author_name:1})

//db.getCollection("persons").getIndexes()

//db.getCollection("persons").find({index:1}).explain("executionStats")