const config=require('config')
const debug=require('debug')('app:startup')
const morgan=require('morgan')
const helmet=require('helmet')
const express = require('express');
const logger=require('./logger')
const app = express();

// console.log(`NODE_ENV:${process.env.NODE_ENV}`) ;
// console.log(`app:${app.get('env')}`)  ;  //if not nod_env so its takes development environment by default

app.set('view engine','pug');
app.set('views','./views')  //default

app.use(express.json());
app.use(express.urlencoded({extended:true})); //key=value&key=value
app.use(express.static('public'));
app.use(helmet())

//Configuration
console.log('Application Name: '+config.get('name'))
console.log('Mail Server: '+config.get('mail.host'))
// console.log('Mail Password: '+config.get('mail.password'))

if(app.get('env')==='development'){
  app.use(morgan('tiny'))
  debug("Morgan enabled")
}

app.use(logger)

const user=require("./routes/index")
app.use(user);

const port=process.env.PORT||7788
app.listen(port, () => {
  console.log(`server listening the port number ${port}`)
});