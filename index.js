// Remove the main element from the DOM
main.remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set the id attribute of the newHeader element to "victory"
newHeader.id = "victory";

// Set the text content of the newHeader element
newHeader.textContent = "YOUR-NAME is the champion";
 "sale";

// Remove the second list item from the unordered list
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the unordered list from the DOM
ul.remove();

// Set the text content of the main element with a customized name
const yourName = "YOUR-NAME"; // Replace with your desired name
main.textContent = `${yourName} is the champion`;
