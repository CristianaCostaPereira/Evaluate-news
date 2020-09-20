const error = document.getElementById('message-error');
const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('polarity-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');
const response = null;

import { validateUrl } from "./validateUrl"

function handleSubmit(event) {
    debugger

    event.preventDefault();

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value;

    /*
    if (!validateUrl(formUrl)) {
        document.getElementById("error-message").innerHTML = "Valid URL must be provided";
        console.log('URL not valid');
        return;

    } else {
        document.getElementById("error-message").innerHTML = "";
    }
    */
    
    // Call postData and pass the url typed
    // postData(formUrl).then(function(data) {
    //     updateUI(data);
    // })
    
    callMeaningCloudApi();

    console.log(response);
    
    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/evaluate-articles', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({formUrl}), 
    })
    .then(res => {
        debugger
        return res.json()
    })
    .then(function(data) {
        debugger
        document.getElementById('results').innerHTML = data.message + ' ' + data.time;
        document.getElementById("polarity").innerHTML = data.polarity;
        document.getElementById("polarity-confidence").innerHTML = data.polarity_confidence;
        document.getElementById("subjectivity").innerHTML = data.subjectivity;
        document.getElementById("subjectivity-confidence").innerHTML = data.subjectivity_confidence;
        
    })
    */
}

// Dynamic UI
const updateUI = (data) => {

    console.log(data)

    document.getElementById("polarity").innerHTML = `Polarity: ${data.polarity}`;
    document.getElementById("polarity-confidence").innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("subjectivity-confidence").innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence}`;
}

// Get the input field
var urlInput = document.getElementById("url");

// Execute a function when the user releases a key on the keyboard
urlInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("url").click();
  }
});

function callMeaningCloudApi () {
    console.log('yyy');
    fetch('https://api.meaningcloud.com/sentiment-2.1?key=a4b2aedd784e251f2ad8dfe200b28efe&lang=auto&txt=Main dishes were quite good, but desserts were too sweet for me.', {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // }
        // body: JSON.stringify({formUrl}), 
    })
    .then(res => {
        debugger
        response = res.json()
        return res.body.json()
    });
}

export { handleSubmit }