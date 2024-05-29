//your JS code here. If required.
// Add event listener to the button with id "btn"
document.getElementById("btn").addEventListener("click", async function() {
 // Get input values from the text and delay input fields
 const text = document.getElementById("text").value; // Get text input value
 const delay = parseInt(document.getElementById("delay").value); // Get delay input value and parse it as an integer


 // Validate input values
 if (!text || isNaN(delay)) { // Check if text is empty or delay is not a number
   alert("Please fill in all fields and provide a valid delay."); // Show alert message if validation fails
   return; // Stop further execution if validation fails
 }


 // Introduce delay using async/await
 await delayFunction(delay); // Wait for the specified delay period before proceeding


 // Display text on the webpage
 document.getElementById("output").innerText = text; // Set the inner text of the output div to the provided text value
});


// Function to introduce delay using setTimeout wrapped in a promise
function delayFunction(delay) {
 return new Promise(resolve => {
   setTimeout(resolve, delay); // Resolve the promise after the specified delay period
 });
}
