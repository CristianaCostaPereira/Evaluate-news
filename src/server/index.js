const dotenv = require('dotenv');
dotenv.config();

const textapi = {
    application_key: process.env.API_KEY
}

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

app.post('/evaluate-articles', (req, res) => {

    let x = callMeaningCloudApi();
    console.log(x);
    res.send(x);
    // textapi.evaluate({ url: req.body.formUrl }, (error, result) => {
    //     if(error) {
    //         console.log('Error during request')
    //         res.send();
    //         return;
    //     }

    //     console.log('Got result')
        
    //     res.send(result);
    // })
})




