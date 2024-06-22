// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cvButton = document.querySelector(".cv-button");
    cvButton.addEventListener("click", function() {
        window.open("your-cv-link.pdf", "_blank");
    });
});
