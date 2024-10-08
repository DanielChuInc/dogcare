// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submit_button = document.getElementById("submit-button");
var page = document.getElementById("contact-page");

function display_message()
    {
    page.classList.add("finalMessage");
    page.innerHTML = "Thank you for your message!";
    }

submit_button.addEventListener("click", display_message);