// Write your code here!

const mainID = document.getElementById("main");
mainID.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Adrian is the champion";
newHeader.className = "victory";