const express = require('express');
const app = express();
const PORT = 3000;

// yaha pe  middleware token ke sath verify kar skta hai
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
});

app.get("/getUserData", (req,res)=>{
    try{
        //Logic of DB call and get user data
        res.status(200).send("user data  from getUserData route")

    }catch(err){

        res.status(500).send("some Error contact support team");

    }
})



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});