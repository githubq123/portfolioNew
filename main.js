var typed = new Typed('.text', {
    strings: ['Full Stack Developer', 'Web Designer', 'Front-end Developer', 'Back-end Developer'],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});


function toggleMode() {
    (document.getElementById('dark-mode')).disabled = !(document.getElementById('dark-mode')).disabled; // Toggle the stylesheet
}

