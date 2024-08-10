const mongoose = require("mongoose");

if (process.env.NODE_ENV != "production") {
    require ("dotenv").config();
}




async function connectToDb() {
    await mongoose.connect(process.env.DB_URL);
}
module.exports=connectToDb;