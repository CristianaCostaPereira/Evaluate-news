const dotenv = require('dotenv');
dotenv.config();
console.log(`API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const textapi = new meaningCloudApi({
    application_key: process.env.API_KEY
});


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
