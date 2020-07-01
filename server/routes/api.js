const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require("mongoose")
const db = "mongodb+srv://user_1:0BmhqIvGpyzolM9S@cluster0.vccgb.mongodb.net/eventsdb?retryWrites=true&w=majority"

console.log("before connecting database");

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

router.post('/register', (request, response) => {
    let userData = request.body //just getting data form request object
    let user = new User(userData) //making model from userData and store into user variable
        // now let's save that user model to the database
        //it will take callback function as an argument that runs after save method is executed
        //if it's save successfully then return registerdData,and if not then return error
    user.save((error, registredData) => {
        if (error) {
            console.log(error);
            response.send("error aavi")
        } else {
            console.log(registredData);

            response.status(200).send(registredData)
        }
    })
})

module.exports = router




// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//     console.log('Taking a break...');
//     await sleep(2000);
//     console.log('Two seconds later, showing sleep in a loop...');

//     // Sleep in loop
//     for (let i = 0; i < 5; i++) {
//         await sleep(2000);
//         console.log(i);
//     }

// }

// demo();