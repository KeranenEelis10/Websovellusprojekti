function toggleTheme() {
    const themeStyleLink = document.getElementById('theme-style');
    const currentTheme = themeStyleLink.getAttribute('href');

    // Check the current theme and toggle to the opposite
    if (currentTheme === 'light-theme.css') {
        themeStyleLink.setAttribute('href', 'dark-theme.css');
    } else {
        themeStyleLink.setAttribute('href', 'light-theme.css');
    }
}