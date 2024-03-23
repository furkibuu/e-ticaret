document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});