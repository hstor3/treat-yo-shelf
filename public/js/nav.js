let hamburger = document.getElementById('hamburger');
let navList = document.getElementById('nav-list');


hamburger.addEventListener('click', openHam);

// function to open hamburger menu
function openHam() {
    navList.style.display = 'flex';
}

// hamburger.addEventListener('click', () => {
//     navList.classList.toggle('show');
// });