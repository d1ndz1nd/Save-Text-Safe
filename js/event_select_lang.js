const texts = {
    EN: {
        titlePageEncryption: "Encryption (text)",
        encryptionText: "Encryption (text)",
        passwordGenerator: "Password Generator",
        needHelpTitle: "Need help?",
        encryptDecryptTitle: "Encrypt/decrypt the text",
        selectProcedureLabel: "Select a procedure:",
        encryptOption: "Encrypt",
        decryptOption: "Decrypt",
        selectKeyLabel: "Select a key:",
        textOriginal: "Original Text",
        textEdited: "Edited Text",
        li1: "Select a procedure: Choose 'decrypt' if you want to decrypt the text, or 'encrypt' if you want to encrypt the text.",
        li2: "Select a key: Here you select the key for the selected procedure. Supported encryption in English and Ukrainian, such ciphers as Caesar, Atbash and author's ciphers (from the site).",
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
        specialCharactersText: "No, the encryption on this page does not supports encryption of special characters and numbers along with regular text characters.",
        verification: "How can I make sure that the text is encrypted/decrypted correctly?",
        verificationText: "You can check the correctness of encryption/decryption by comparing the results with the original text by using crypt-keys in the website.",
        labelGP: "Generated Password:",
        UseNumbers: "Use numbers:",
        UseSpecialSymbols: "Use special symbols:",
        UseUppercaseLetters: "Use uppercase letters:",
        PasswordLength: "Length (default 8):",
        liGP1: "If you don't need to customize the settings, simply click the 'OK' button, and you will receive a random password that you can immediately copy using the 'Copy' button.",
        liGP2: "You can also enhance your password's strength by customizing its settings: Numbers, Uppercase Letters and Special Characters, by activate the corresponding checkbox.",
        liGP3: "In the 'Length' field, you can specify the desired number of characters for your password. (Minimum length: 8 characters; Maximum length: 120 characters). If you enter a number greater than 120, the length will be capped at 120 characters. If you enter less than 8, the system will automatically set the minimum to 8 characters.",
        liGP4: "After customizing the settings, click the 'OK' button to generate a password according to your preferences. Use the 'Copy' button to easily save the generated password.",
        IfIForgotGP: "What should I do if I forget my generated password?",
        IfIForgotGPtext: "If you forget your password and it was not saved in a password manager, you will need to use the password recovery feature on the respective website.",
        HowOftenChangePassword: "How often should I change my passwords?",
        HowOftenChangePasswordtext: "It is recommended to change your passwords at least every 3-6 months or immediately after suspecting account compromise.",
        WhatPG: "What is a password generator?",
        WhatPGtext: "A password generator is a tool that creates random and strong passwords. These passwords consist of letters, numbers, and special characters, and can vary in length to ensure security.",
        WhyShouldIUsePG: "Why should I use a password generator?",
        WhyShouldIUsePGtext: "Password generators help create complex passwords that are difficult to crack. Using such passwords reduces the risk of your accounts being hacked.",
        HowPGWork: "How does a password generator work?",
        HowPGWorktext: "A password generator uses random algorithms to create passwords from combinations of letters, numbers, and symbols. You can adjust the length and complexity of the password according to your needs.",
        ThePGstorePassword: "Does the password generator store the generated passwords?",
        ThePGstorePasswordtext: "No, the password generator does not store your passwords. It is recommended to immediately save or copy the generated password to a secure place, such as a password manager.",
    
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
        textEdited: "Редагований Текст",
        li1: "Виберіть процедуру: Оберіть 'Дешифр.', якщо ви хочете розшифрувати текст, або 'Зашифр.', якщо хочете зашифрувати текст.",
        li2: "Оберіть ключ: Тут ви виберете ключ для обраної процедури. Підтримуються шифрування англійською та українською мовами такі шифри як Цезаря, Атбаш та авторські (від сайту).",
        li3: "Після цього введіть текст у форму 'Оригінальний текст' (програма не буде працювати в іншому випадку).",
        li4: "Як тільки ви введете текст у форму 'Оригінальний текст', програма розблокує контрольні кнопки ('ОК', 'Reset', 'Copy'), і ви зможете натиснути 'ОК' або просто натиснути 'Enter' на клавіатурі, щоб зашифрувати/дешифрувати ваш текст. Зашифрований/дешифрований текст буде відображено у формі 'Редагований текст'.",
        li5: "Якщо ви хочете скопіювати ваш текст (будь то зашифрований, розшифрований або оригінальний), ви можете натиснути кнопку 'Copy' у відповідній формі. Якщо ви зашифруєте текст і потім випадково видалите оригінальний текст з форми, текст у формі 'Редагований текст' залишиться активним для копіювання (поки ви не перезавантажите сторінку).",
        instruction: "Як користуватися сервісом: покрокова інструкція",
        encryptionDefinition: "Що таке шифрування і чому його слід використовувати?",
        encryptionDefinitionText: "Шифрування – це процес перетворення тексту в код, який є незрозумілим для сторонніх осіб, щоб захистити інформацію від несанкціонованого доступу. Шифрування використовується для захисту чутливої інформації, такої як паролі, персональні дані, фінансова інформація тощо.",
        encryptionProcess: "Як відбувається шифрування або дешифрування тексту?",
        encryptionProcessText1: "Під час шифрування текст перетворюється в зашифрований код за допомогою спеціального алгоритму і ключа. Ключ шифрування – це унікальний код, який використовується для шифрування та дешифрування тексту.",
        encryptionProcessText2: "Дешифрування – це процес перетворення зашифрованого тексту назад у звичайний текст за допомогою того ж ключа, який використовувався для шифрування. Без правильного ключа дешифрування неможливе.",
        security: "Чи безпечне шифрування, що використовується на цій сторінці?",
        securityText: "Ні, ця сторінка підтримує лише симетричне шифрування (де для шифрування та дешифрування використовується один і той же ключ), тому текст можна легко розшифрувати, вгадуючи ключ.",
        specialCharacters: "Чи можу я зашифрувати спеціальні символи та цифри?",
        specialCharactersText: "Ні, шифрування на цій сторінці не підтримує шифрування спеціальних символів і цифр разом зі звичайними текстовими символами.",
        verification: "Як я можу переконатися, що текст зашифровано/дешифровано правильно?",
        verificationText: "Ви можете перевірити правильність шифрування/дешифрування, порівнюючи результати з оригінальним текстом, використовуючи криптоключі на сайті.",
        labelGP: "Згенерований пароль:",
        UseNumbers: "Цифри:",
        UseSpecialSymbols: "Спеціальні символи:",
        UseUppercaseLetters: "Великі літери:",
        PasswordLength: "Довжина (за замовч. 8):",
        liGP1: "Якщо вам не потрібно налаштовувати параметри, просто натисніть кнопку 'OK', і ви отримаєте випадковий пароль, який можна відразу ж скопіювати за допомогою кнопки 'Copy'.",
        liGP2: "Ви також можете підвищити надійність пароля, налаштувавши його параметри: Цифри, Великі літери та Спеціальні символи, активувавши відповідний прапорець.",
        liGP3: "У полі 'Довжина' ви можете вказати бажану кількість символів для вашого пароля. (Мінімальна довжина: 8 символів; Максимальна довжина: 120 символів). Якщо ви введете число більше 120, довжина буде обмежена 120 символами. Якщо ви введете менше 8, система автоматично встановить мінімальну довжину 8 символів.",
        liGP4: "Після налаштування параметрів натисніть кнопку 'OK', щоб згенерувати пароль відповідно до ваших уподобань. Використовуйте кнопку 'Copy', щоб легко зберегти згенерований пароль.",
        IfIForgotGP: "Що робити, якщо я забув свій згенерований пароль?",
        IfIForgotGPtext: "Якщо ви забули свій пароль, і він не був збережений у менеджері паролів, вам доведеться скористатися функцією відновлення пароля на відповідному сайті.",
        HowOftenChangePassword: "Як часто слід змінювати паролі?",
        HowOftenChangePasswordtext: "Рекомендується змінювати паролі принаймні раз на 3-6 місяців або одразу після підозри на компрометацію облікового запису.",
        WhatPG: "Що таке генератор паролів?",
        WhatPGtext: "Генератор паролів - це інструмент, який створює випадкові та надійні паролі. Ці паролі складаються з літер, цифр та спеціальних символів і можуть бути різної довжини, що забезпечує їхню безпеку.",
        WhyShouldIUsePG: "Чому варто використовувати генератор паролів?",
        WhyShouldIUsePGtext: "Генератори паролів допомагають створювати складні паролі, які важко зламати. Використання таких паролів знижує ризик того, що ваші облікові записи будуть зламані.",
        HowPGWork: "Як працює генератор паролів?",
        HowPGWorktext: "Генератор паролів використовує випадкові алгоритми для створення паролів з комбінацій літер, цифр та символів. Ви можете налаштувати довжину та складність пароля відповідно до ваших потреб.",
        ThePGstorePassword: "Чи зберігає генератор паролів створені паролі?",
        ThePGstorePasswordtext: "Ні, генератор паролів не зберігає ваші паролі. Рекомендується одразу записати або скопіювати згенерований пароль в надійне місце, наприклад, у менеджер паролів.",






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