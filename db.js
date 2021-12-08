const mongoose = require("mongoose")

let mongoURl = `mongodb+srv://fabrogabrielandres:reactmongodb@cluster0.mcjbq.mongodb.net/MernPizza`

mongoose.connect(mongoURl, {useUnifiedTopology: true, useNewUrlParser: true})

let db = mongoose.connection

db.on("connected", ()=>{
    console.log("mongodb coneccion successfull");
})
console.log("hola server");
db.on("error", ()=>{
    console.log("mongo db conecction failed");
})

module.exports = mongoose