const express = require("express")
const db = require("./db")
const pizzaRoute = require("./routes/pizzasRoute")
const userRoute = require("./routes/usersRoute")


const app = express()

app.use(express.json())
const port = process.env.PORT || 5000;

app.use("/api/pizzas",pizzaRoute)
app.use("/api/users",userRoute)

app.get("/", (req, res) => {
    res.send(`server working on port ${port}`)
})


app.listen(port, () => `server runing en puerto`)