const express = require("express")
require("./Db/connection")
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan=require("morgan")
const Course =require("./Model/schema")


app.use(express.json());
app.use(morgan("tiny"))

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Node JS API Project for mongodb',
        version: '1.0.0',
      },
      servers:[
        {
            url:'http://localhost:1234/'
        }
      ]
    },
    apis: ['./index.js'], // files containing annotations as above
  };
  
const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(openapiSpecification))

/**
 * @swagger
 * /:
 *   get:
 *     summary: This api is used to check if get method s working or not
 *     description: This api is used to check if get method s working or not
 *     responses:
 *       200:
 *         description: To test Get method.
 */

app.get("/",(req,res)=>{
    res.send("Welcome to mongodb API")
})

/**
 * @swagger
 *  components:
 *      schemas: 
 *          Course:
 *                type: object
 *                properties:
 *                    _id:
 *                        type: string
 *                    name:
 *                        type: string
 *                    author: 
 *                        type: string
 *                    tags:
 *                        type: array
 *                    ispublished:
 *                        type: boolean  
 */

/**
 * @swagger
 * /api/courses:
 *  get: 
 *      summary: To get all courses from mongodb
 *      description: This api is used to fetch data from mongodb
 *      responses:
 *       200:
 *           description: This api is used to fetch data from mongodb
 *           content:
 *               application/json:
 *                    schema:
 *                        type: array
 *                    items:
 *                        $ref: '#components/schemas/Course'
 */
app.get('/api/courses', async(req, res) => {
  try {
    const courseget=await Course.find();
    res.send(courseget)
  } catch (error) {
    console.log(error)
  }
})


/**
 * @swagger
 * /api/course/{_id}:
 *  get: 
 *      summary: To get perticular course from mongodb
 *      description: This api is used to fetch data from mongodb
 *      parameters:
 *          - in: path
 *            name: _id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *      responses:
 *       200:
 *           description: This api is used to fetch data from mongodb
 *           content:
 *               application/json:
 *                    schema:
 *                        type: array
 *                    items:
 *                        $ref: '#components/schemas/Course'
 */
app.get('/api/course/:id', async(req, res) => {
  try {
    const coursegetid=await Course.findById(req.params.id);
    if(!coursegetid) return res.status(404).send('the genre with the given ID was not found')
    res.send(coursegetid)
  } catch (error) {
    console.log(error)
  }
})

/**
 * @swagger
 * /api/addcourse:
 *  post: 
 *      summary: used to insert data to mongodb
 *      description: This api is used to fetch data from mongodb
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schemas/Course'
 *      responses:
 *       200:
 *           description: Added Successfully
 */

 app.post('/api/addcourse', async(req, res) => {
  try {

      let courseadd = new Course({
        name:req.body.name,
        author:req.body.author,
        tags:req.body.tags,
        isPublished:req.body.isPublished
      })
      courseadd=await courseadd.save();

    res.status(200).send(courseadd)
  } catch (error) {
    console.log(error)
  }
})

/**
 * @swagger
 * /api/putcourse/{_id}:
 *  put: 
 *      summary: used to update data to mongodb
 *      description: This api is used to fetch data from mongodb
 *      parameters:
 *          - in: path
 *            name: _id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schemas/Course'
 *      responses:
 *       200:
 *           description: Added Successfully
 *           content:
 *               application/json:
 *                    schema:
 *                        type: array
 *                    items:
 *                        $ref: '#components/schemas/Course'
 */

  //put
  app.put('/api/putcourse/:id',async(req, res) => {
    try {  
      const courseupdate=await Course.findByIdAndUpdate(req.params.id,
        {
        name:req.body.name,
        author:req.body.author,
        tags:req.body.tags,
        isPublished:req.body.isPublished,
        new:true
      })
    
      if (!courseupdate) res.status(404).send('The genre with the given id is not available')
      res.send(courseupdate);

    } catch (error) {
      console.log(error)
    }
  })

/**
 * @swagger
 * /api/delcourse/{_id}:
 *  delete: 
 *      summary: this api is use to delete record from mongodb database 
 *      description: This api is used to fetch data from mongodb
 *      parameters:
 *          - in: path
 *            name: _id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *      responses:
 *       200:
 *           description: This api is used to fetch data from mongodb
 */
  app.delete('/api/delcourse/:id',async (req, res) => {
    try {
      // deleting a record 
      let _id= req.params.id;
      await Course.findByIdAndDelete(_id)
          .then((course) => {
              if (!course) {
                  res.status(404).send();
              }
              res.send(course);
          }).catch((e) => {
              res.status(400).send(e);
          });
    } catch (error) {
      console.log(error)
    }
});
  

const PORT=1234;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
