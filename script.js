// DOM Elements
const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}:"<>?[];,./`~';

// Update length value display
lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});

// Generate Password Function
function generatePassword() {
    let characters = '';
    let password = '';

    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    const length = lengthInput.value;

    if (characters === '') {
        alert('Please select at least one character type!');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordDisplay.value = password;
}

// Copy Password Function
function copyPassword() {
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

// Toggle Dark/Light Mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Event Listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);