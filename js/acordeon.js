document.addEventListener("DOMContentLoaded", () => {

        setTimeout(function() {
            let loading = document.getElementById("loading");
            let contenido = document.getElementById("contenidoDDCamaras");

            loading.style.animation = "fadeOut 2s linear"
            loading.style.display = "none";

            contenido.style.display = "block"
                // contenido.style.animation = "fadeIn 2s ease-in"
            contenido.style.opacity = "1"

        }, 3000);

        // document.querySelectorAll(".card-imagen").forEach(c => {


        //     c.addEventListener("mouseover", (e) => {
        //         c.style.transform = `rotateY(10deg)rotateX(-10deg)  `;

        //     })
        //     c.addEventListener("mouseout", (e) => {
        //         c.style.transform = `rotateY(0deg) `;

        //     })
        // })
    })
    // menu amburguesa
const toggle = document.getElementById("toggle");
const menu = document.querySelector('.menu')
    // console.log(menu);
let boleano = false;
toggle.onclick = function() {
    boleano = !boleano;
    toggle.classList.toggle('active');
    if (boleano) {
        menu.style.transform = "translateX(0%)";
    } else {
        menu.style.transform = "translateX(-120%)";
    }


};