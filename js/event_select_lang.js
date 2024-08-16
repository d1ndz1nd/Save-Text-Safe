document.getElementById('selectLanguage').addEventListener('change', function () {
    const selectedValue = this.value;
    const currentPath = window.location.pathname;

    if (selectedValue === 'EN') { 
        if (currentPath.startsWith('/ua/')) {
            window.location.href = currentPath.replace('/ua/', '/');
        } else {
            window.location.href = 'index.html';
        }
    } else { 
        if (!currentPath.startsWith('/ua/')) {
            window.location.href = '/ua' + currentPath;
        } else {
            window.location.href = currentPath;
        }
    }

    this.value = '';
});