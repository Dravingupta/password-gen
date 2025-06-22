const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

const lengthEl = document.getElementById("lenght");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("Symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function () {
    const length = parseInt(lengthEl.value);
    let characters = "";
    let password = "";

    if (lowercaseEl.checked) {
        characters += lowercaseLetters;
    }
    if (uppercaseEl.checked) {
        characters += uppercaseLetters;
    }
    if (numbersEl.checked) {
        characters += numbers;
    }
    if (symbolsEl.checked) {
        characters += symbols;
    }

    if (characters.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;
});
