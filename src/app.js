const express = require('express');
const app = express();
const PORT = 3000;


app.get("/user", (req,res)=>{
    res.send("Haaaaaaa");
})

app.get("/user", (req,res)=>{
    res.send({firstName:"Ajit", lastName:"Kumar"});
})

app.post("/user", (req,res)=>{
    res.send("Data successfully saved to the database!");
})

app.delete("/user",(req,res)=>{
    res.send("Data successfully deleted from the database");
})

app.use("/",(req,res)=>{
    res.send("Namaste Ajit");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});