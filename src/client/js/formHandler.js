const error = document.getElementById('message-error');
const scoreTag = document.getElementById('score-tag');
const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');
const irony = document.getElementById('irony');
const response = null;


import { validateUrl } from "./validateUrl"

function handleSubmit(event) {

    event.preventDefault();

    //Get text from input and validate that is a URL with regex
    let formUrl = document.getElementById('url').value;

    if (!validateUrl(formUrl)) {
        document.getElementById("error-message").innerHTML = "Valid URL must be provided";
        console.log('URL not valid');
        return;

    } else {
        document.getElementById("error-message").innerHTML = "";
    }    
    
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
        updateUI()        
    })
    
}

// Dynamic UI
const updateUI = (data) => {
    document.getElementById("score-tag").innerHTML = `Score tag: ${data.score_tag}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
}

// Get the input field
var urlInput = document.getElementById("url");

// Execute a function when the user releases a key on the keyboard
urlInput.addEventListener("keyup", function(event) {
    return;
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("url").click();
  }
});

export { handleSubmit }