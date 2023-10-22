function toggleTheme() {
    const themeStyleLink = document.getElementById('theme-style');
    const currentTheme = themeStyleLink.getAttribute('href');
    const lightTheme = 'css/light-theme.css';
    const darkTheme = 'css/dark-theme.css';

    // Tarkista nykyinen teema ja vaihda vastakkaiseen
    if (currentTheme === lightTheme) {
        themeStyleLink.setAttribute('href', darkTheme);
    } else {
        themeStyleLink.setAttribute('href', lightTheme);
    }
}