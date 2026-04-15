document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname.split('/').pop();
    if (!path) path = 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});