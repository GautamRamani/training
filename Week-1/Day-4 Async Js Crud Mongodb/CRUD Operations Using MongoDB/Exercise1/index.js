const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/mongo-exercises")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))

    
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    isPublished:Boolean,
    price:Number
})

const Course=mongoose.model('Course',courseSchema)

async function gateData(){
    const findData=await Course.find()
    console.log(findData)    
}
gateData();

//Exercise1
// async function getCourse(){
//     return await Course
//         .find({isPublished:true,tags:'backend'})
//         .sort({name:1})
//         .select({name:1,author:1})
// }
// async function run(){
//     const courses=await getCourse()
//     console.log(courses)
// }
//run()

//Exercise2
// async function getCourse(){
//     return await Course
//         .find({isPublished:true,tags:'backend'})
//         .sort({price:-1})
//         .select({name:1,author:1})
// }
// async function run(){
//     const courses=await getCourse()
//     console.log(courses)
// }
// run()

//Exercise3
//in our record we dont have any 'by' word in name
// async function getCourse(){
//     return await Course
//         .find()
//         .or([
//             {price:{$gte:250}},
//             {name:/.*by.*/i}
//         ])
//         .sort({price:-1})
//         .select({name:1,author:1,price:1})
// }
// async function run(){
//     const courses=await getCourse()
//     console.log(courses)
// }
// run()

// update data(query first)
// async function updateCourse(id){
//     const course=await Course.findById(id)
//     if(!course) return;

//     course.author='Another Author'

//     const result=await course.save();
//     console.log(result)
// }
// updateCourse('633e8b85d57cc2fb75d84d33');


// update data(update first)
// async function updateCourse(id){
//     const course=await Course.findById(id)
//     if(!course) return;

//     course.author='Another Author'

//     const result=await course.save();
//     console.log(result)
// }
// updateCourse('633e8b85d57cc2fb75d84d33');

//update
// const updateDocument = async(_id) =>{
//   try{
//       const result =await Course.findByIdAndUpdate({_id},{
//           $set:{
//               name:"Another author update"
//           }
//       },{
//           new:true,
//           useFindAndModify:false
//       });
//       console.log(result)
//   }catch(err){
//       console.log(err)
//   }
// }
// updateDocument("633e8b85d57cc2fb75d84d33");

//delete
// const deleteDocument = async(_id) =>{
//   try{
//       const result =await Course.findByIdAndDelete({_id})
//       console.log(result)
//   }
// catch(err){
//   console.log(err)
// }
// }
// deleteDocument("633e8b85d57cc2fb75d84d35")