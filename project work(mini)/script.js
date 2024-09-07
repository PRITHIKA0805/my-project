// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "") {
        alert("Please enter your name.");
        valid = false;
    }
    if (email === "") {
        alert("Please enter your email.");
        valid = false;
    }
    if (message === "") {
        alert("Please enter your message.");
        valid = false;
    }

    if (valid) {
        alert("Thank you for your message! We will get back to you soon.");
        document.getElementById("contactForm").reset();
    }
});