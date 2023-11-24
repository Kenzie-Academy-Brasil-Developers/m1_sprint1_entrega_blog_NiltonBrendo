let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}


const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");



let idx = 0;
function mediaQuery() {
    
    var largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    if(largura < 650) {
        idx++;
        
        if(idx > img.length - 1) {
            idx = 0;
        }



        imgs.style.transform = `translateX(${-idx * 300}px)`;
        
        setInterval(carrosselMobile, 6000);
    } else {
        idx++;

        if(idx > img.length - 1) {
            idx = 0;
        }



        imgs.style.transform = `translateX(${-idx * 530}px)`;
        setInterval(carrosselPc, 6000);
    }
}

setInterval(mediaQuery, 3000)



