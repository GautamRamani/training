const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/demo")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))

    
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})

const Course=mongoose.model('Course',courseSchema)


// async function createCourse(){
//         const course=new Course({
//             name:'Node.js Course',
//             author:"Yash",
//             tags:['angular','frontend'],
//             isPublished:true
//         })

//         const result=await course.save();
//         console.log(result)
// }

// createCourse();

async function getCourse(){
    const result=await Course.find();
    console.log(result)
}
getCourse();

// async function getCourse(){
//     const courses=await Course.
//     find({author:'Yash',isPublished:true})
//     // .skip(1)
//     .limit(1)
//     .sort({name:1})   //-1 for descending
//     .select({name:1,tags:1})
//     // .count()
//     console.log(courses)
// }
// getCourse();

