const texts = {
    EN: {
        titlePageEncryption: "Encryption (text)",
        encryptionText: "Encryption (text)",
        passwordGenerator: "Password Generator",
        needHelpTitle: "Need help?",
        encryptDecryptTitle: "Encrypt/decrypt the text",
        selectProcedureLabel: "Select the procedure:",
        encryptOption: "Encrypt",
        decryptOption: "Decrypt",
        selectKeyLabel: "Select the key:",
        textOriginal: "Original Text",
        textEdited: "Edited Text",
        li1: "Select the procedure: Choose 'decrypt' if you want to decrypt the text, or 'encrypt' if you want to encrypt the text.",
        li2: "Select the key: Here, you will select the key for your chosen procedure.",
        li3: "After that, enter some text in the 'Original text' form (the program will not work otherwise).",
        li4: "Once you have entered text in the 'Original text' form, the program will unblock the control buttons ('OK', 'Reset', 'Copy'), and you can press 'OK' or simply hit 'Enter' on your keyboard to encrypt/decrypt your text. The encrypted or decrypted text will be displayed in the 'Edited text' form.",
        li5: "If you want to copy your text (whether encrypted, decrypted, or original), you can click the 'Copy' button in the appropriate form. If you encrypt the text and then accidentally erase the original text from the form, the text in the 'Edited text' form will remain active for copying (until you reload the page).",
        instruction: "How to use the service: step-by-step instruction",
        encryptionDefinition: "What is encryption and why should I use it?",
        encryptionDefinitionText: "Encryption is the process of converting text into a code that is unintelligible to outsiders to protect information from unauthorized access. Encryption is used to protect sensitive information such as passwords, personal data, financial information, etc.",
        encryptionProcess: "How is text encrypted or decrypted?",
        encryptionProcessText1: "During encryption, the text is converted into an encrypted code using a specific algorithm and a key. An encryption key is a unique code used to both encrypt and decrypt the text.",
        encryptionProcessText2: "Decryption is the process of converting the encrypted text back to plain text using the same key that was used for encryption. Without the correct key, decryption is impossible.",
        security: "Is the encryption used on this page secure?",
        securityText: "No, this page only supports symmetric encryption (where the same key is used for encryption and decryption), so the text can be easily decrypted by guessing the key.",
        specialCharacters: "Can I encrypt special characters and numbers?",
        specialCharactersText: "Yes, the encryption on this page supports encryption of special characters and numbers along with regular text characters.",
        verification: "How can I make sure that the text is encrypted/decrypted correctly?",
        verificationText: "You can check the correctness of encryption/decryption by comparing the results with the original text by using crypt-keys in the website.",
        labelGP: "Generated Password:",
    },
    UA: {
        titlePageEncryption: "Шифрування (текст)",
        encryptionText: "Шифрування (текст)",
        passwordGenerator: "Генератор Паролів",
        needHelpTitle: "Потрібна допомога?",
        encryptDecryptTitle: "Зашифрувати/Дешифрувати текст",
        selectProcedureLabel: "Виберіть процедуру:",
        encryptOption: "Зашифр.",
        decryptOption: "Дешифр.",
        selectKeyLabel: "Виберіть ключ:",
        textOriginal: "Оригінальний Текст",
        textEdited: "Відредагований Текст",
        li1: "Виберіть процедуру: Оберіть 'дешифрувати', якщо ви хочете розшифрувати текст, або 'зашифрувати', якщо хочете зашифрувати текст.",
        li2: "Оберіть ключ: Тут ви виберете ключ для обраної процедури.",
        li3: "Після цього введіть текст у форму 'Оригінальний текст' (програма не буде працювати в іншому випадку).",
        li4: "Як тільки ви введете текст у форму 'Оригінальний текст', програма розблокує контрольні кнопки ('ОК', 'Reset', 'Copy'), і ви зможете натиснути 'ОК' або просто натиснути 'Enter' на клавіатурі, щоб зашифрувати/дешифрувати ваш текст. Зашифрований/дешифрований текст буде відображено у формі 'Відредагований текст'.",
        li5: "Якщо ви хочете скопіювати ваш текст (будь то зашифрований, розшифрований або оригінальний), ви можете натиснути кнопку 'Копі' у відповідній формі. Якщо ви зашифруєте текст і потім випадково видалите оригінальний текст з форми, текст у формі 'Відредагований текст' залишиться активним для копіювання (поки ви не перезавантажите сторінку).",
        instruction: "Як користуватися сервісом: покрокова інструкція",
        encryptionDefinition: "Що таке шифрування і чому його слід використовувати?",
        encryptionDefinitionText: "Шифрування – це процес перетворення тексту в код, який є незрозумілим для сторонніх осіб, щоб захистити інформацію від несанкціонованого доступу. Шифрування використовується для захисту чутливої інформації, такої як паролі, персональні дані, фінансова інформація тощо.",
        encryptionProcess: "Як відбувається шифрування або дешифрування тексту?",
        encryptionProcessText1: "Під час шифрування текст перетворюється в зашифрований код за допомогою спеціального алгоритму і ключа. Ключ шифрування – це унікальний код, який використовується для шифрування та дешифрування тексту.",
        encryptionProcessText2: "Дешифрування – це процес перетворення зашифрованого тексту назад у звичайний текст за допомогою того ж ключа, який використовувався для шифрування. Без правильного ключа дешифрування неможливе.",
        security: "Чи безпечне шифрування, що використовується на цій сторінці?",
        securityText: "Ні, ця сторінка підтримує лише симетричне шифрування (де для шифрування та дешифрування використовується один і той же ключ), тому текст можна легко розшифрувати, вгадуючи ключ.",
        specialCharacters: "Чи можу я зашифрувати спеціальні символи та цифри?",
        specialCharactersText: "Так, шифрування на цій сторінці підтримує шифрування спеціальних символів і цифр разом зі звичайними текстовими символами.",
        verification: "Як я можу переконатися, що текст зашифровано/дешифровано правильно?",
        verificationText: "Ви можете перевірити правильність шифрування/дешифрування, порівнюючи результати з оригінальним текстом, використовуючи криптоключі на сайті.",
        labelGP: "Згенерований пароль:",
    }
};


document.getElementById('selectLanguage').addEventListener('change', function () {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (texts[lang][key]) {
            elem.textContent = texts[lang][key];
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'EN';
    document.getElementById('selectLanguage').value = savedLanguage;
    changeLanguage(savedLanguage);
});