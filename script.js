document.addEventListener('DOMContentLoaded', function() {
    const modeSwitchButton = document.getElementById('mode-switch');
    const subjectsLink = document.getElementById('subjects-link');
    const homeLink = document.getElementById('home-link');
    const aboutUsLink = document.getElementById('about-us-link');
    const subjectCards = document.getElementById('subject-cards');
    const aboutUsSection = document.getElementById('about-us');
    const missionStatement = document.getElementById('mission-statement');

    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        modeSwitchButton.textContent = '☀️';
    } else {
        modeSwitchButton.textContent = '🌙';
    }

    localStorage.setItem('darkMode', isDarkMode);

    modeSwitchButton.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            modeSwitchButton.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            modeSwitchButton.textContent = '🌙';
        }
    });

    subjectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        subjectCards.classList.toggle('hidden');
        aboutUsSection.classList.add('hidden');
        missionStatement.classList.add('hidden');
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        subjectCards.classList.add('hidden');
        aboutUsSection.classList.add('hidden');
        missionStatement.classList.remove('hidden');
    });

    aboutUsLink.addEventListener('click', function(event) {
        event.preventDefault();
        subjectCards.classList.add('hidden');
        aboutUsSection.classList.toggle('hidden');
        missionStatement.classList.add('hidden');
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const subject = card.querySelector('.title').textContent.toLowerCase();
            window.location.href = `${subject}.html`;
        });
    });

    cards.forEach(card => {
        const title = card.querySelector('.title');
        const description = card.querySelector('.description');

        card.addEventListener('mouseenter', function() {
            title.style.opacity = '0';
            description.style.display = 'block';
        });

        card.addEventListener('mouseleave', function() {
            title.style.opacity = '1';
            description.style.display = 'none';
        });
    });
});
