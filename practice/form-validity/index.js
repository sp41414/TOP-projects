const emailInput = document.getElementById("email");
const countrySelect = document.getElementById("country");
const postalCodeInput = document.getElementById("postal-code");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailInput.setCustomValidity("Email is required");
    } else if (!emailRegex.test(email)) {
        emailInput.setCustomValidity("Enter a valid email");
    } else {
        emailInput.setCustomValidity("");
    }
    emailInput.reportValidity();
}

function validateCountry() {
    if (!countrySelect.value || countrySelect.value === "Select country") {
        countrySelect.setCustomValidity("Select a country");
    } else {
        countrySelect.setCustomValidity("");
    }
    countrySelect.reportValidity();
    validatePostalCode();
}

function validatePostalCode() {
    const country = countrySelect.value;
    const postalCode = postalCodeInput.value.trim();
    const USPostalRegex = /^\d{5}(-\d{4})?$/;
    if (country === "US") {
        postalCodeInput.setAttribute("required", true);
        if (!postalCode) {
            postalCodeInput.setCustomValidity("Postal code is required for the United States");
        } else if (!USPostalRegex.test(postalCode)) {
            postalCodeInput.setCustomValidity("Enter a valid US postal code (e.g., 12345 or 12345-6789)");
        } else {
            postalCodeInput.setCustomValidity("");
        }
    } else {
        postalCodeInput.removeAttribute("required");
        postalCodeInput.setCustomValidity("");
    }
    postalCodeInput.reportValidity();
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (!password) {
        passwordInput.setCustomValidity("Password is required");
    } else if (password.length < 8) {
        passwordInput.setCustomValidity("Password must be at least 8 characters");
    } else {
        passwordInput.setCustomValidity("");
    }
    passwordInput.reportValidity();
}

function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    if (!confirmPassword) {
        confirmPasswordInput.setCustomValidity("Please confirm your password");
    } else if (confirmPassword !== password) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
    confirmPasswordInput.reportValidity();
}

emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", validateEmail);

countrySelect.addEventListener("change", validateCountry);
countrySelect.addEventListener("blur", validateCountry);

postalCodeInput.addEventListener("input", validatePostalCode);
postalCodeInput.addEventListener("blur", validatePostalCode);

passwordInput.addEventListener("input", () => {
    validatePassword();
});
passwordInput.addEventListener("blur", validatePassword);

confirmPasswordInput.addEventListener("input", validateConfirmPassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmail();
    validateCountry();
    validatePostalCode();
    validatePassword();
    validateConfirmPassword();
    if (document.getElementById("form").checkValidity()) {
        document.getElementById("form").reset();
    } else {
        document.getElementById("form").reportValidity();
    }
});