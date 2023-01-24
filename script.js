let messages = document.getElementById("chatbot-messages");
let input = document.getElementById("chatbot-text-input");
let submitButton = document.getElementById("chatbot-submit-button");

// Fetch the raw data
fetch("rawInfo.json")
  .then(response => response.json())
  .then(data => {
    // Use the data to power the chatbot's functionality
    console.log(data);
  });

submitButton.addEventListener("click", function() {
  let message = input.value;
  input.value = "";
  
  // Send the message to the chatbot and display the response
  // ...
});
