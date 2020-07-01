const express = require('express')
const router = express.Router()

const mongoose = require("mongoose")
const db = "mongodb+srv://user_1:0BmhqIvGpyzolM9S@cluster0.vccgb.mongodb.net/eventsdb?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.log("Error!" + err);
    } else {
        console.log('connectecd to mongodb');

    }
})
router.get('/', (req, res) => {
    res.send("From API route");
})

module.exports = router