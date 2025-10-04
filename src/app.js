const express = require('express');
const app = express();
const PORT = 3000;

// yaha pe  middleware token ke sath verify kar skta hai
app.use("/admin", (req,res,next)=>{
    console.log("Admin auth is getting checked");
    const token = "xyz";
    const isAdminAuthorised = token ==="xyz";

    if(!isAdminAuthorised){
        res.status(401).send("Unauthorized request");
    }else{
        next();
    }

});

app.get("/user",(req,res)=>{
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