const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();

const textapi = {
    application_key: process.env.API_KEY
}
console.log(process.env.API_KEY);
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const cors = require('cors');
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

app.post('/evaluate-articles', async (req, res) => {
    
    const result = await axios.post(
        // `http://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=Main dishes were quitdddde good, but desserts were too sweet for me.`
        `http://api.meaningcloud.com/sentiment-2.1?key=a4b2aedd784e251f2ad8dfe200b28efe&lang=en&txt=Main dishes were quitdddde good, but desserts were too sweet for me.`
    );

    const { data } = result;
    const { code } = data.status;

    const { score_tag } = data;
    const { agreement } = data;
    const { subjectivity } = data;
    const { confidence } = data;
    const { irony } = data;

    // storing the api response
    sentiment = {
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony,
    };

    res.send(sentiment);
})




