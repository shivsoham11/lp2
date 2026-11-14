
// Registration Form Validation

document.getElementById("regForm").addEventListener("submit",
function(event) {

    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let course = document.getElementById("course").value;

    let valid = true;

    // Clear old errors
    document.querySelectorAll(".error").forEach(function(e) {
        e.innerHTML = "";
    });

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML =
        "Name is required";
        valid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
        "Enter a valid email";
        valid = false;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
        "Enter 10 digit mobile number";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
        "Password must contain at least 6 characters";
        valid = false;
    }

    // Confirm password validation
    if (password !== confirm || confirm === "") {
        document.getElementById("confirmError").innerHTML =
        "Passwords do not match";
        valid = false;
    }

    // Course validation
    if (course === "") {
        document.getElementById("courseError").innerHTML =
        "Please select a course";
        valid = false;
    }

    // Final result
    if (valid) {
        document.getElementById("result").innerHTML =
        "Registration Successful! Welcome " + name;

        document.getElementById("regForm").reset();
    }

});


// Theme Switching
function changeTheme() {
    document.body.classList.toggle("dark");
}


// Show and Hide Information
function toggleInfo() {
    let info = document.getElementById("info");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}


// Countdown Timer
let time = 10;

let countdown = setInterval(function() {

    document.getElementById("timer").innerHTML = time;

    time--;

    if (time < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML =
        "Time Over";
    }

}, 1000);


// Text Formatting
function changeText() {
    document.getElementById("result").classList.toggle("highlight");
}
