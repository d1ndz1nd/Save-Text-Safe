function EncryptionRequest() {
    const procedure = document.getElementById('selectProcedure').value;
    const encryptKey = document.getElementById('chooseEncryptKey').value;
    const textareaValue = document.getElementById('ta-wo').value.toUpperCase();

    const replacements = {
        'SC_UA': {
            'А': '∆', 'Б': '[', 'В': ']', 'Г': '-', 'Ґ': '+', 'Д': '@', 'E': '£', 'Є': '€', 'Ж': '*', 'З': '$', 
            'И': '}', 'І': '1', 'Ї': '7', 'Й': '~', 'К': '<', 'Л': 'V', 'М': 'N', 'Н': '=', 'О': '0', 'П': 'π', 
            'Р': 'R', 'С': 'C', 'Т': 'I', 'У': '/', 'Ф': '&', 'Х': '#', 'Ч': '^', 'Ш': 'W', 'Щ': 'J', 'Ь': '`', 
            'Ю': 'Q', 'Я': '✓', 'Ц': '2'
        },
        'SC_EN': {
            'A': '@', 'B': '#', 'C': '%', 'D': '&', 'E': '*', 'F': '+', 'G': '=', 'H': '-', 'I': '^', 'J': '_', 
            'K': '~', 'L': '1', 'M': '?', 'N': '/', 'O': '$', 'P': '|', 'R': '<', 'S': '>', 'T': '{', 'U': '}', 
            'V': '[', 'W': ']', 'X': ':', 'Y': ';', 'Z': '`'
        }
    };

    const decryptionReplacements = {
        'SC_UA': Object.fromEntries(Object.entries(replacements['SC_UA']).map(([k, v]) => [v, k])),
        'SC_EN': Object.fromEntries(Object.entries(replacements['SC_EN']).map(([k, v]) => [v, k]))
    };

    const atbash_UA = {
        'А': 'Я', 'Б': 'Ю', 'В': 'Ь', 'Г': 'Щ', 'Ґ': 'Ш', 'Д': 'Ч', 'Е': 'Ц', 'Є': 'Х', 'Ж': 'Ф', 'З': 'У', 
        'И': 'Т', 'І': 'С', 'Ї': 'Р', 'Й': 'П', 'К': 'О', 'Л': 'Н', 'М': 'М', 'Н': 'Л', 'О': 'К', 'П': 'Й', 
        'Р': 'Ї', 'С': 'І', 'Т': 'И', 'У': 'З', 'Ф': 'Ж', 'Х': 'Є', 'Ц': 'Е', 'Ч': 'Д', 'Ш': 'Ґ', 'Щ': 'Г', 
        'Ь': 'В', 'Ю': 'Б', 'Я': 'А'
    };

    const atbash_EN = {
        'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 
        'J': 'Q', 'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I', 
        'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B', 'Z': 'A'
    };

    const caesarShift = (char, shift, alphabet) => {
        const index = alphabet.indexOf(char);
        if (index == -1) return char;
        return alphabet[(index + shift + alphabet.length) % alphabet.length];
    };

    const result = textareaValue.split('').map(char => {
        if (procedure == 'encrypt') {
            if (encryptKey == 'SC_UA' || encryptKey == 'SC_EN') {
                return replacements[encryptKey][char] || char;
            } else if (encryptKey == 'atbash_UA') {
                return atbash_UA[char] || char;
            } else if (encryptKey == 'atbash_EN') {
                return atbash_EN[char] || char;
            } else if (encryptKey == 'Caesar_UA_3') {
                return caesarShift(char, 3, 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ');
            } else if (encryptKey == 'Caesar_EN_3') {
                return caesarShift(char, 3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            }
        } else {
            if (encryptKey == 'SC_UA' || encryptKey == 'SC_EN') {
                return decryptionReplacements[encryptKey][char] || char;
            } else if (encryptKey == 'atbash_UA') {
                return atbash_UA[char] || char;
            } else if (encryptKey == 'atbash_EN') {
                return atbash_EN[char] || char;
            } else if (encryptKey == 'Caesar_UA_3') {
                return caesarShift(char, -3, 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ');
            } else if (encryptKey == 'Caesar_EN_3') {
                return caesarShift(char, -3, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            }
        }
    }).join('');

    document.getElementById('ta-ro').value = result;
    updateCopyEditedButtonState();
}