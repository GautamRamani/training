const EventEmitter=require('events')
var url='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL';

class Logger extends EventEmitter{
     log(message){
        //send HTTP Request
        console.log(message)
    
        //Raise an event
    this.emit('messageLogged',{id:1,url:'http://'})
    }
}

console.log(__filename)
console.log(__dirname)

module.exports=Logger;