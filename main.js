document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('dark-mode') === 'true') {
        toggle.checked = true;
        body.classList.add('dark-mode');
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
