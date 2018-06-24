document.addEventListener("DOMContentLoaded", function() {
    registerEvents();
});

function registerEvents() {
    var button = document.querySelectorAll('.button');

    button.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var theme = e.target.getAttribute('data-theme');
            if (theme) setTheme(theme);
        });
    });
};

function setTheme(theme) {
    var $html = document.querySelector('html');

    if (theme === 'dark') {
        $html.setAttribute('dark', 'true');
    } else {
        $html.removeAttribute('dark');
    }
}