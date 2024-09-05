// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for menu button
    const menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', function() {
        document.querySelector('#kn-header').classList.toggle('active');
    });

    // Add event listener for language select
    const languageSelect = document.querySelector('#language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        alert('Language selected: ' + selectedLanguage);
        // Add logic to handle language change here
    });
});
