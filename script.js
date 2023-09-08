let submitButton = document.getElementById("submit-button");
let form = document.getElementById("form");

let emailError = document.getElementById("email-error");
let countryError = document.getElementById("country-error");
let zipError = document.getElementById("zip-error");
let passwordError = document.getElementById("password-error");
let passwordConfirmationError = document.getElementById("password-confirmation-error");

const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipInput = document.getElementById("zip");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById("password-confirmation");

let emailValid = false;
let countryValid = false;
let zipValid = false;
let passwordValid = false;
let passwordsSame = false;

emailInput.addEventListener("blur", () => {
    let emailEntry = document.getElementById("email").value;
     if (emailEntry === "") {
        emailError.innerHTML = "Email required";
        emailInput.classList.add("invalid");
     } else if (!isValidEmail(emailEntry)) {
        emailError.innerHTML = "Invalid email address";
        emailInput.classList.add("invalid");
    } else {
        emailInput.classList.remove("invalid");
    };
});

countryInput.addEventListener("blur", () => {
    let countryEntry = document.getElementById("country").value;
    if (!isValidCountry(countryEntry)) {
        countryError.innerHTML = "Country required";
        countryInput.classList.add("invalid");
    } else {
        countryInput.classList.remove("invalid");
    }
})

zipInput.addEventListener("blur", () => {
    let zipEntry = document.getElementById("zip").value;
    let countryEntry = document.getElementById("country").value;
    if (!isValidZip(zipEntry, countryEntry)) {
        zipError.innerHTML = "Invalid zip code";
        zipInput.classList.add("invalid");
    } else {
        zipInput.classList.remove("invalid");
    }
})

passwordInput.addEventListener("blur", () => {
    let passwordEntry = document.getElementById("password").value;
    if (!isValidPassword(passwordEntry)) {
        passwordError.innerHTML = "Password required";
        passwordInput.classList.add("invalid");
    } else {
        passwordInput.classList.remove("invalid");
    }
})

passwordConfirmationInput.addEventListener("blur", () => {
    passwordConfirmationError.innerHTML = ""
    let passwordEntry = document.getElementById("password").value;
    let passwordConfirmationEntry = document.getElementById("password-confirmation").value;
    if (passwordConfirmationEntry == "") {
        passwordConfirmationError.innerHTML = "Password confirmation required";
        passwordConfirmationInput.classList.add("invalid");
    } else if (passwordEntry !== passwordConfirmationEntry) {
        passwordConfirmationError.innerHTML = "Passwords do not match";
        passwordConfirmationInput.classList.add("invalid");
    } else {
        passwordConfirmationInput.classList.remove("invalid");
    }
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let emailEntry = document.getElementById("email").value;
    let countryEntry = document.getElementById("country").value;
    let zipEntry = document.getElementById("zip").value;
    let passwordEntry = document.getElementById("password").value;
    let passwordConfirmationEntry = document.getElementById("password-confirmation").value;

  
    emailError.innerHTML = "";
    countryError.innerHTML = "";    
    zipError.innerHTML = "";
    passwordError.innerHTML = "";
    passwordConfirmationError.innerHTML = "";

    
    if (emailEntry == "") {
        emailError.innerHTML = "Email required";
        emailInput.classList.add("invalid");
    } else if (!isValidEmail(emailEntry)) {
        emailError.innerHTML = "Invalid email address";
        emailInput.classList.add("invalid");
    } else {
        emailInput.classList.remove("invalid");
        emailValid = true;
    }

    if (!isValidCountry(countryEntry)) {
        countryError.innerHTML = "Country required";
        countryInput.classList.add("invalid");
    } else {
        countryInput.classList.remove("invalid");
        countryValid = true;
    }

    if (zipEntry == "") {
        zipError.innerHTML = "Zip code required";
        zipInput.classList.add("invalid");
    }else if (!isValidZip(zipEntry, countryEntry)) {
        zipError.innerHTML = "Invalid zip code";
        zipInput.classList.add("invalid");
    } else {
        zipInput.classList.remove("invalid");
        zipValid = true;
    }

    if (!isValidPassword(passwordEntry)) {
        passwordError.innerHTML = "Password required";
        passwordInput.classList.add("invalid");
    } else {
        passwordInput.classList.remove("invalid");
        passwordValid = true;
    }

    if (passwordConfirmationEntry == "") {
        passwordConfirmationError.innerHTML = "Password confirmaion required";
        passwordConfirmationInput.classList.add("invalid");
    } else if (!passwordsMatch(passwordEntry, passwordConfirmationEntry)) {
        passwordConfirmationError.innerHTML = "Password fields do not match";
        passwordConfirmationInput.classList.add("invalid");
    } else {
        passwordConfirmationInput.classList.remove("invalid");
        passwordsSame = true;
    }
    
    if (emailValid && countryValid && zipValid && passwordValid && passwordsSame) {
        alert("YOU COMPLETED THE FORM CORRECTLY! HOORAY!");
        form.reset();
    }
})

function isValidEmail(email) {
    emailError.innerHTML = "";
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCountry(country) {
    countryError.innerHTML = "";
    return (country === "usa" || country === "canada");
}

function isValidZip(zip, country) {
    zipError.innerHTML = "";
    if (country === "usa") {
        const usZipRegex = /^\d{5}$/;
        return usZipRegex.test(zip);
    } else if (country === "canada") {
        const caZipRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$|^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
        return caZipRegex.test(zip);
    }
}

function isValidPassword(password) {
    passwordError.innerHTML = "";
    return (password !== "");
}

function passwordsMatch(password, passwordConfirmation) {
    passwordConfirmationError.innerHTML = "";
    return password === passwordConfirmation;
}

