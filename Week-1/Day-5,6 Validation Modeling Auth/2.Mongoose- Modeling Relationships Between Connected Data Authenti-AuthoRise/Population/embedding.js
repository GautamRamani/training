const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/population")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))


const Course=new mongoose.model('Courseembedd',new mongoose.Schema({
    name:String,
    author:authorSchema
}));


async function createCourse(name,author){
    const course=new Course({
        name,
        author
    })

    const result=await course.save()
    console.log(result)
}

async function listCourses(){
    const courses=await Course.find()
    console.log(courses)
}

createCourse('Node Course',new Author({name:'Yash'}))  //1st step

//update
// async function updateAuthor(courseId){
//     const course=await Course.findById(courseId)
//     course.author.name='Yash Patel'
//     course.save()
// }
// updateAuthor('633fb4981afd32f0ed9eb198')


//update directly
// async function updateAuthor(courseId){
//     const course=await Course.update({_id:courseId},{
//         $set:{
//             'author.name':'John Smith'
//         }
//     })
// }
// updateAuthor('633fb4981afd32f0ed9eb198')

//remove directly
// async function updateAuthor(courseId){
//     const course=await Course.update({_id:courseId},{
//         $unset:{
//             'author':''
//         }
//     })
// }
// updateAuthor('633fb4981afd32f0ed9eb198')

