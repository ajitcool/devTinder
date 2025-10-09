const express = require('express');
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const PORT = 3000;

// yaha pe  middleware token ke sath verify kar skta hai

app.post("/signup",async (req,res)=>{
    try{
    const userObj={
        firstName: "Mohan",
        lastName: "Singh",
        emailId:"Mohan6168@gmail.com",
        password: "Mohan@1997",
    }
        const user = new User(userObj);
        await user.save();
        res.send("User Created successfully");
    }catch(err){
        res.status(400).send("Error saving the user ", err.message);
    }
    

   
})


connectDB().then(()=>{
    console.log("Database connection established...");
    app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
}).catch((err)=>{
    console.error("Database cannot be connected...");
});

// Start the server
