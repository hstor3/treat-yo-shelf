// let hamburger = document.getElementById('hamburger');
// let navList = document.getElementById('nav-list');


// hamburger.addEventListener('click', openHam);

// // function to open hamburger menu
// function openHam() {
//     navList.style.display = 'flex';
// }

let hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', openHam)
}

let navList = document.getElementById('nav-list');
// function to open hamburger menu
function openHam() {
    navList.style.display = 'flex';
}

// function to close hamburger menu if user clicks outside of modal
function clickOutside(e) {
    if (e.target == navList) {
        navList.style.display = 'none';
    }

}