function validateForm() {
    var feedbackType = document.getElementById('feedback-type');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var messageInput = document.getElementById('message');
    var valid = true;

    // Check each field and apply red outline if empty
    if (feedbackType.value === "") {
        feedbackType.style.borderColor = "red";
        valid = false;
    } else {
        feedbackType.style.borderColor = ""; // Reset to default
    }

    if (nameInput.value === "") {
        nameInput.style.borderColor = "red";
        valid = false;
    } else {
        nameInput.style.borderColor = ""; // Reset to default
    }

    if (emailInput.value === "") {
        emailInput.style.borderColor = "red";
        valid = false;
    } else {
        emailInput.style.borderColor = ""; // Reset to default
    }

    if (phoneInput.value === "") {
        phoneInput.style.borderColor = "red";
        valid = false;
    } else {
        phoneInput.style.borderColor = ""; // Reset to default
    }

    if (messageInput.value === "") {
        messageInput.style.borderColor = "red";
        valid = false;
    } else {
        messageInput.style.borderColor = ""; // Reset to default
    }

    // If form is invalid, return false to prevent form submission
    if (!valid) {
        return false;
    }
}
