const express = require('express');
const app = express();
const PORT = 3000;


//app.use("/route",RH1,RH2,RH3,RH4,RH5);
//RH: Route handler
// To go one route handler to another route handler we need to pass next as argument and call this argument in route handler


app.use("/user",(req,res,next)=>{
     next();
    res.send("response 1");
   

},
(req,res,next)=>{

    res.send("response 2");
})



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});