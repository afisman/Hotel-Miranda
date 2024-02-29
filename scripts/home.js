const hamburguer_menu = document.getElementById("hamburguer_menu");
const nav_links = document.getElementById("nav_links");
const hamburger_button = document.getElementById("hamburger_button");

let activate = false;

const openMenu = () => {
    if (activate === false) {
        nav_links.style.display = "block";
        hamburger_button.innerText = "X";
        activate = true;
    } else {
        nav_links.style.display = "none";
        hamburger_button.innerText = "☰";
        activate = false;
    }
};

const sendAlert = () => {
    alert("¡Thank you for your request! We have received it correctly. Someone from our Team will get back to you very soon.The Miranda Hotel")
}

// window.addEventListener('mousemove', (event) => {

//     const {
//         clientX: x,
//         clientY: y
//     } = event
//     const elementMouseIsOver = document.elementFromPoint(x, y);
//     console.log(y)
//     const navBar = document.getElementById("navbar");

//     if (y <= 180 && window.innerWidth >= 1000) {
//         console.log('I am here')
//         navBar.style.position = 'fixed';

//     }
// })

