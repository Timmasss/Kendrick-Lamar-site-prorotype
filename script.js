// Music slider
const songs = ["HUMBLE.", "DNA.", "Alright", "King Kunta"];
let index = 0;

const songDiv = document.getElementById('song');

document.getElementById('prev').onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    songDiv.textContent = songs[index];
};

document.getElementById('next').onclick = () => {
    index = (index + 1) % songs.length;
    songDiv.textContent = songs[index];
};

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
