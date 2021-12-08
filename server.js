const express = require("express") 
const db = require("./db")
const Pizza = require("./models/pizzaModel")

const app=express()


app.use(express.json())

const port = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send(`server working on port ${port}` )
})

app.get("/getpizzas", (req, res)=>{
    Pizza.find( {}, (err,docs)=>{
        if(err){
            console.log(err);
        }else{
            res.send(docs)
        }
    })
})

app.listen(port , ()=>`server runing en puerto`)