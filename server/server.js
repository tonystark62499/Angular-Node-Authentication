const express = require('express')
const bodyParser = require('body-parser')
console.log("before api requried");

const api = require('./routes/api')

const PORT = 3000

const app = express()

console.log("before api use");
app.use('/api', api)
console.log("after api use");

app.get('/', function(request, response) {
    response.send("Hello from server !!");
})
console.log("after get ");

app.listen(PORT, function() {
    console.log("Server running on the port : " + PORT);

})
console.log("After listen");