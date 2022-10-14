const mongooose = require('mongoose');


const connectDB = async () => {
    await mongooose.connect('mongodb://localhost:27017/phoneBookApi',{
        useUnifiedTopology: true
    });
    console.log('connected database');

    mongooose.set('debug', true);
}


module.exports = connectDB;