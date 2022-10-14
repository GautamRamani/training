const express= require('express');
const connectDB=require('./db/db')
const app= express();
require('express-async-errors');

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/routes'));

app.listen(3000,()=>{
    console.log('server listen')
})