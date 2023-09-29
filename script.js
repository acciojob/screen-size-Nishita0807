const sizeInfoDiv = document.createElement("div");
sizeInfoDiv.id = "sizeInfo";

// Create an h1 element
const h1Element = document.createElement("h1");

// Create a span for width
const widthSpan = document.createElement("span");
widthSpan.id = "widthValue";
widthSpan.textContent = "x"; // Initial text

// Create a text node for "Width: "
const widthText = document.createTextNode("Width: ");

// Create a span for height
const heightSpan = document.createElement("span");
heightSpan.id = "heightValue";
heightSpan.textContent = "y"; // Initial text

// Create a text node for " Height: "
const heightText = document.createTextNode(" and Height: ");

// Append all elements together
h1Element.appendChild(widthText);
h1Element.appendChild(widthSpan);
h1Element.appendChild(heightText);
h1Element.appendChild(heightSpan);

sizeInfoDiv.appendChild(h1Element);

// Add the sizeInfoDiv to the body of the document
document.body.appendChild(sizeInfoDiv);

function updateSize() {
            const widthValue = document.getElementById("widthValue");
            const heightValue = document.getElementById("heightValue");

            widthValue.textContent = window.innerWidth;
            heightValue.textContent = window.innerHeight;
        }

        // Add an event listener to the window's resize event
        window.addEventListener("resize", updateSize);

        // Initialize the values
        updateSize();