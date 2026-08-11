function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();
    let skills = document.getElementById("skills").value.trim();
    let resume = document.getElementById("resume").files[0];
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    if (course === "") {
        alert("Please select your course.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    if (skills === "") {
        alert("Please enter your skills.");
        return false;
    }

    if (!resume) {
        alert("Please upload your resume.");
        return false;
    }

    let allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(resume.type)) {
        alert("Only PDF, DOC, and DOCX files are allowed.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    message.style.color = "green";
    message.textContent = "Registration successful!";

    return false;
}