const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://ajitk6168_db_user:nlBCEgX86cKCRgos@cluster0.3zjsjpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/devTinder"
    )
}

module.exports = connectDB;

