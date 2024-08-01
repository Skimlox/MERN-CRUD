if (process.env.NODE_ENV != "production") {
    require ("dotenv").config();
}



const mongoose = require("mongoose");
async function connectMongoDb() {
    await mongoose.connect(process.env.Database);
}
module.exports=connectMongoDb;