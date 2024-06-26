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


window.addEventListener('scroll', function () {

    let scrollTop = document.body.scrollTop;


    let inArea = false;

    document.addEventListener('mousemove', (event) => {
        const navBar = document.getElementById("navbar");

        let height = event.clientY
        if (height >= 180) {
            navBar.classList.remove('fixed')
            navBar.classList.add('normal')
            inArea = false
        } else if (scrollTop < 180) {
            navBar.classList.remove('normal')
            navBar.classList.add('fixed')
            inArea = true
        }
    })

})
