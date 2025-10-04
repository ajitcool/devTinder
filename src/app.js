const express = require('express');
const app = express();
const PORT = 3000;




app.get("/user/:userId", (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send({firstName:"Ajit", lastName:"Kumar"});
})

app.get("/user", (req,res)=>{
    console.log(req.query);
    res.send({firstName:"Ajit", lastName:"Kumar"});
})

app.post("/user", (req,res)=>{
    res.send("Data successfully saved to the database!");
})

app.delete("/user",(req,res)=>{
    res.send("Data successfully deleted from the database");
})

// app.use("/",(req,res)=>{
//     res.send("Namaste Ajit");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});