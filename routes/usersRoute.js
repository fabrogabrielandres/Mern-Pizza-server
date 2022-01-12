const express = require("express")
const router = express.Router()
const User = require("../models/userModel");

router.post("/register", async (req, res) => {

    const { email, password } = req.body;
    const newUser = new User({ email, password })
    try {
        newUser.save()
        res.send("User registered successfull")
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

module.exports = router