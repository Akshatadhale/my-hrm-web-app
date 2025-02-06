document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(function(msg) {
        msg.style.display = "none";
    });

    let isValid = true;

    // Username validation (not empty)
    const username = document.getElementById("username");
    if (username.value.trim() === "") {
        document.getElementById("username-error").textContent = "Username is required.";
        document.getElementById("username-error").style.display = "block";
        isValid = false;
    }

    // Email validation (valid email format)
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Password validation (must contain A-Z, a-z, 0-9, and special characters)
    const password = document.getElementById("password");
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordPattern.test(password.value)) {
        document.getElementById("password-error").textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    }

    // Confirm password validation (match with password)
    const confirmPassword = document.getElementById("confirm-password");
    if (confirmPassword.value !== password.value) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        document.getElementById("confirm-password-error").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Proceed with form submission if all validations pass
        alert("Form submitted successfully!");
        // You can remove the next line after testing
        // this.submit();
    }
});




// Toggle password visibility for the "Password" field
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show password
        toggleIcon.classList.remove('far', 'fa-eye');
        toggleIcon.classList.add('far', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Hide password
        toggleIcon.classList.remove('far', 'fa-eye-slash');
        toggleIcon.classList.add('far', 'fa-eye');
    }
}

// Toggle password visibility for the "Confirm Password" field
function toggleConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirm-password');
    const toggleIcon = document.getElementById('toggle-confirm-password');
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text'; // Show password
        toggleIcon.classList.remove('far', 'fa-eye');
        toggleIcon.classList.add('far', 'fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password'; // Hide password
        toggleIcon.classList.remove('far', 'fa-eye-slash');
        toggleIcon.classList.add('far', 'fa-eye');
    }
}

// Hide/Show labels based on input focus and blur
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function () {
        const label = this.previousElementSibling;
        if (label && label.classList.contains('input-label')) {
            label.style.opacity = '0';  // Hide label on input focus
        }
    });

    input.addEventListener('blur', function () {
        const label = this.previousElementSibling;
        if (label && label.classList.contains('input-label')) {
            label.style.opacity = '1';  // Restore label visibility when input loses focus
        }
    });
});
