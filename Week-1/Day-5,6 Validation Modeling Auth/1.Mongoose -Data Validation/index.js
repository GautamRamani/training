const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/mongo-exercises")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))

    
const courseSchema=new mongoose.Schema({
    name:{
        type:String,        //simple valiadtion
        required:true,
        minlength:5,
        maxlength:255
    },
    category:{
        type:String,
        required:true,
        enum:['web','mobile','network'],
        // lowercase:true,
        // uppercase:true,
    },
    author:String,
   
   
    tags:{      //custom validation
        type:Array,
        validate:{
            validator:function(v){
                return v&&v.length>0;
            },
            message:"A course should have at least one tag"
        }
    },
   
//    tags:{      //custom validation
//         type:Array,
//         validate:{
//             validator:function(v,callback){
//                 setTimeout(()=>{
//                     const results=v&&v.length>0;
//                     callback(results)
//                 },4000)
//             },
//             message:"A course should have at least one tag"
//         }
//     },
   
    
    isPublished:Boolean,
    price:{
        type:Number,
        required:function(){return this.isPublished;},
        min:100,
        max:1000,
        ger:v=>Math.round(v),
        set:v=>Math.round(v)
    }
})

const Course=mongoose.model('Course',courseSchema)

// async function gateData(){
//     const findData=await Course.find()
//     console.log(findData)    
// }
// gateData();

async function getCourse(){
    const courses=await Course
    .find({_id:'633eae481373b8ceb5aa30fc'})
    .sort({name:1})
    .select({name:1,tags:1,price:1})
    console.log(courses[0].price)
}
getCourse();


// async function createCourse(){
//         const course=new Course({
//             name:'Node.js Course',
//             category:'web',
//             author:"validation",
//             tags:['frontend'],
//             isPublished:true,
//             price:299.5
//         })

//         try{
//             const result=await course.save();
//             console.log(result)
//         }catch(ex){
//             console.log(ex.message)
//             // for(field in ex.errors)   //validations error
//             // console.log(ex.errors[field].message)
//         }
// }
// createCourse();