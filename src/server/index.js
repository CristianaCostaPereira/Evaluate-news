const dotenv = require('dotenv');
dotenv.config();
const textapi = {
    application_key: process.env.API_KEY
}

console.log(`API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

// console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})

//designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})