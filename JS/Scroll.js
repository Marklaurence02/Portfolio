/*====icon====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.head nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.head nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
/*===remove nav when click */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



