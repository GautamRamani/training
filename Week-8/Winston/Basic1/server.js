const express = require('express')
const app = express()
const {logger}=require("./logger")
const port = 3000

app.use(express.json());
app.use(function(error,req,res,next){
    res.json({message:error.message})
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () =>{    
    logger.info(`Express server is running on ${port}`)
    // console.log(`Example app listening on port ${port}!`)
})
