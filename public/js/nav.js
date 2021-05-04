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
    console.log("eeeee");
}

let navList = document.getElementById('nav-list');
// function to open hamburger menu
function openHam() {
    navList.style.display = 'flex';
}