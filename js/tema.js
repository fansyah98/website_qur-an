
    const themeToggleCheckbox = document.getElementById('theme-toggle');
    const navbar = document.getElementById('navbar');
    const body = document.body;

    themeToggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        
        // Save the theme preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved user preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        themeToggleCheckbox.checked = true; // Set checkbox to checked if dark mode is active
    }
