const express = require('express')
const app = express()
const port = parseInt(process.argv[2])

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//npx nodemon app.js 3001  
//npx nodemon app.js 3002  