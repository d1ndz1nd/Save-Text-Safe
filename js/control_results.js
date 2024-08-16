const textareaWOInput = document.getElementById('ta-wo');
const textareaROOutput = document.getElementById('ta-ro');

textareaWOInput.addEventListener('input', updateCopyOriginalButtonState);
textareaROOutput.addEventListener('change', updateCopyEditedButtonState);

const copyTAWOButton = document.getElementById('copyOriginalButton');
const copyTAROButton = document.getElementById('copyEditedButton');

const submit1Button = document.getElementById('submitButton');
const reset1ResultsButton = document.getElementById('resetResultsButton');

function updateCopyOriginalButtonState() {
    if (textareaWOInput.value.trim() !== "") {
        copyTAWOButton.disabled = false;
        submit1Button.disabled = false;
        reset1ResultsButton.disabled = false;

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') { submit1Button.click(); }
        });
    } else {
        copyTAWOButton.disabled = true;
        submit1Button.disabled = true;
        reset1ResultsButton.disabled = true;
    }
};

function updateCopyEditedButtonState() {
    if (textareaROOutput.value.trim() !== '') {
        copyTAROButton.disabled = false;
    } else { 
        copyTAROButton.disabled = true; 
    }
};

function resetTextareaValue() {
    textareaWOInput.value = '';
    textareaROOutput.value = '';
    updateCopyOriginalButtonState();
    updateCopyEditedButtonState();
}

function copyTARO() {
    navigator.clipboard.writeText(textareaROOutput.value);
    resetTextareaValue();
}

function copyTAWO() { 
    navigator.clipboard.writeText(textareaWOInput.value); 
}

copyTAROButton.addEventListener('click', function() {
    changeValueTemporarily(copyTAROButton, '✔');
});

copyTAWOButton.addEventListener('click', function() {
    changeValueTemporarily(copyTAWOButton, '✔');
});

function changeValueTemporarily(button, newValue) {
    var originalValue = button.value;

    button.value = newValue;

    setTimeout(function() {
        button.value = originalValue;
    }, 1500);
}