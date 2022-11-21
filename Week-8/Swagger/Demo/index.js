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
 *     summery: This api is used to check if get method s working or not
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
 *      schema: 
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
 * /api/course:
 *  get: 
 *      summery: To get all courses from mongodb
 *      description: This api is used to fetch data from mongodb
 *      responses:
 *       200:
 *           description: This api is used to fetch data from mongodb
 *           content:
 *               application/json:
 *                    schema:
 *                        type: array
 *                    items:
 *                        $ref:'#components/schema/Course
 */
app.get('/api/course', async(req, res) => {
  try {
    const courseget=await Course.find();
    res.send(courseget)
  } catch (error) {
    console.log(error)
  }
})


const PORT=1234;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
