const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/population")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))

const authorSchema=new mongoose.Schema({
    name:String,
    bio:String,
    website:String
});
const Author=mongoose.model('AuthorSchema',authorSchema)

const Course=new mongoose.model('Courseschema',new mongoose.Schema({
    name:String,
    authors:[authorSchema]
}));

async function createCourse(name,authors){
    const course=new Course({
        name,
        authors
    })

    const result=await course.save()
    console.log(result)
}

async function listCourses(){
    const courses=await Course.find()
    console.log(courses)
}

// createCourse('Node Course',
//     [
//        new Author({name:'Yash'}),
//        new Author({name:'rohit'}),
//        new Author({name:'karan'}),
//     ]
//         )  //1st step

// createCourse()


//add
// async function addAuthor(courseId,author){
//     const course=await Course.findById(courseId)
//     course.authors.push(author)
//     course.save();
// }
// addAuthor('633fb967c3eed5d73abec4bf',new Author({name:'new Added'}))

//remove
// async function removeAuthor(courseId,authorId){
//     const course=await Course.findById(courseId)
//     const author=course.authors.id(authorId)
//     author.remove()
//     course.save();
// }
// removeAuthor('633fb967c3eed5d73abec4bf','633fbb03e660bbb3dcf99d77') //objectId,AuthorId




