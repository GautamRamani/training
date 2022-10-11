//every file in node apllication is consider as a module

// console.log(module)
const EventEmitter=require('events')

var Logger=require("./3logger");
const logger=new Logger();

//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg)
})

logger.log('message')