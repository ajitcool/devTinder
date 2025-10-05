const express = require('express');
const app = express();
const PORT = 3000;

// yaha pe  middleware token ke sath verify kar skta hai
const {adminAuth,userAuth}= require("./middlewares/auth");
app.use("/admin", adminAuth);

app.post("/user/login",(req,res)=>{
    res.send("user logged in successfully!");
})

// middle ware for user is userAuth
app.get("/user/data",userAuth,(req,res)=>{
    res.send("User Data sent");
});

app.get("/admin/getAllData", (req,res)=>{
    res.send("All Data Sent");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a User");
})



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});