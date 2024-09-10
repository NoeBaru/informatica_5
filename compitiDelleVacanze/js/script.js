document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle-button');
    const themeIcon = document.getElementById('theme-icon');

    // Check local storage for the saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.innerHTML = '&#9728;'; // White Sun icon
        themeIcon.className = 'sun-icon'; // Update class to sun-icon
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.innerHTML = '&#9790;'; // Black Moon icon
        themeIcon.className = 'moon-icon'; // Update class to moon-icon
    }

    themeButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            themeIcon.innerHTML = '&#9790;'; // Black Moon icon
            themeIcon.className = 'moon-icon'; // Update class to moon-icon
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            themeIcon.innerHTML = '&#9728;'; // White Sun icon
            themeIcon.className = 'sun-icon'; // Update class to sun-icon
            localStorage.setItem('theme', 'dark');
        }
    });
});
