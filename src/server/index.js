const axios = require("axios");
const dotenv = require('dotenv').config({
    path: '../../.env'
});

const apiKey = process.env.API_KEY;

console.log(apiKey);

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));
console.log(JSON.stringify(mockAPIResponse));

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

console.log("gfdfgd");

app.post('/evaluate-articles', async (req, res) => {

    let params = {
        key: apiKey,
        lang: 'en',
        url: req.body.formUrl
        // txt: req.body.formUrl
    };
    
    const result = await axios({
        url: 'http://api.meaningcloud.com/sentiment-2.1',
        method: "post",
        params: params,
    })
    
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