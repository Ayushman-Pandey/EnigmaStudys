document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back(); // Navigate back to the previous page
        });
    }

    const chapters = document.querySelectorAll('.chapter-item');
    
    chapters.forEach(chapter => {
        chapter.addEventListener('click', function() {
            alert(`You selected: ${this.textContent}`); 
        });
    });
});
