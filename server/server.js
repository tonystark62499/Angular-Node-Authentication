const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')

const PORT = 3000

const app = express()

app.use('/api', api)

app.get('/', function(request, response) {
    response.send("Hello from server !!");
})
app.listen(PORT, function() {
    console.log("Server running on the port : " + PORT);

})