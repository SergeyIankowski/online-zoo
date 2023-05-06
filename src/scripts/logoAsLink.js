const LOGOS = document.querySelectorAll('.logo');
LOGOS.forEach(logo => logo.addEventListener('click', () => window.open('./main.html', '_self').focus()));