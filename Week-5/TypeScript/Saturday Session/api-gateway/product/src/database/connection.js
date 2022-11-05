const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
    try {
        console.log("DB_URL",DB_URL);
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Db Connected");
        mongoose.set('debug', true);
    } catch (error) {
        console.log("Error ============");
        console.log(error);
    }
};