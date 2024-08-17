const UseNumbers = document.getElementById('UseNumbers');
const UseSpecialSymbols = document.getElementById('UseSpecialSymbols');
const UseUppercaseLetters = document.getElementById('UseUppercaseLetters');
const PasswordLength = document.getElementById('PasswordLength');
const submitGenerateButton = document.getElementById('submitGenerateButton');
const yourGeneratedPassword = document.getElementById('yourGeneratedPassword');

const copyGPButton = document.getElementById('copyGPButton');

const numbers = '1234567890';
const specialSymbols = '%$#@!_-+=)(^*{}';
const symbols = 'qwertyuiopasdfghjklzxcvbnm';

const minPasswordLength = 8;
const maxPasswordLength = 120;

function generateRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function getPasswordSymbols(){
    let passwordSymbols = symbols;
    if(UseNumbers.checked){
        passwordSymbols += numbers;
    }
    if(UseUppercaseLetters.checked){
        passwordSymbols += symbols.toUpperCase();
    }
    if(UseSpecialSymbols.checked){
        passwordSymbols += specialSymbols;
    }
    return passwordSymbols;
}

function getPasswordLength(){
    let passwordLength = PasswordLength.value;
    if(!passwordLength || passwordLength < minPasswordLength){
        passwordLength = minPasswordLength;
    } else if(passwordLength > maxPasswordLength){
        passwordLength = maxPasswordLength;
    }
    return passwordLength;
}

function generatePassword(){
    let password = '';
    const passwordLength = getPasswordLength();
    const passwordSymbols = getPasswordSymbols();
    for(let i = 0; i < passwordLength; i++){
        const randomSymbolIndex = generateRandomNum(passwordSymbols.length);
        password += passwordSymbols.charAt(randomSymbolIndex);
    }
    yourGeneratedPassword.value = password;
    updateCopyToClipboardGPbtnState();
}

function updateCopyToClipboardGPbtnState(){
    if(yourGeneratedPassword.value !== ""){
        copyGPButton.disabled = false;
    } else {
        copyGPButton.disabled = true;
    }
}

copyGPButton.addEventListener('click', function() {
    changeValueTemporarily(copyGPButton, '✔');
    copyGPButtonValue();
});

function copyGPButtonValue(){
    navigator.clipboard.writeText(yourGeneratedPassword.value);
}

function changeValueTemporarily(button, newValue) {
    var originalValue = button.value;

    button.value = newValue;

    setTimeout(function() {
        button.value = originalValue;
    }, 1500);
}

