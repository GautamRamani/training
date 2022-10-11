const Joi=require('joi')
const express=require('express')
const app=express();
app.use(express.json())

const courses=[
    {id:1,name:'courses1'},
    {id:2,name:'courses2'},
    {id:3,name:'courses3'}
]

app.get("/",(req,res)=>{
    res.send('Hello World...')
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

//localhost:3000/api/courses/1
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})

//localhost:3000/api/posts/2018/1
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
})

//localhost:3000/api/posts/2018/1?sortBy=name
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query)
})


//localhost:3000/apis/courses/1
app.get('/apis/courses/:id',(req,res)=>{
    var course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('The course with the given ID was not found')
    res.send(course)
})

app.get('/apis/courses', (req, res) => {  
    res.status(200).send(courses);
   });
   

//localhost:3000/api/courses
app.post('/apis/courses',(req,res)=>{
    const {error}=validateCourse(req.body)
    if(error){
        //400 Bad request
        res.status(400).send(error.details[0].message)
        return;
    }

    const course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put('/apis/courses/:id',(req,res)=>{
    var course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('The course with the given ID was not found')
    
    const result=validateCourse(req.body)
    const {error}=validateCourse(req.body)
    if(error){
        //400 Bad request
        res.status(400).send(result.error.details[0].message)
        return;
    }

    course.name=req.body.name;
    res.send(course);

})

app.delete('/apis/courses/:id',async(req,res)=>{
    var course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) res.status(404).send('The course with the given ID was not found')
    
    const index=courses.indexOf(course)
    courses.splice(index,1);

    res.send(course);
  })


function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course,schema)
    
}

//PORT
const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})

