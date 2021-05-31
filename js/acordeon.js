document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        let loading = document.getElementById("loading");
        let contenido = document.getElementById("contenidoDDCamaras");

        loading.style.animation = "fadeOut 2s linear"
        loading.style.display = "none";

        contenido.style.display = "block"
        contenido.style.animation = "fadeIn 2s ease-in"
        contenido.style.opacity = "1"

    }, 3000);

    document.querySelectorAll(".card-imagen").forEach(c => {

        // console.log(c)
        // let ejeX = (window.innerWidth / 2 - e.pageX) / 25;
        // let ejeY = (window.innerHeight / 2 - e.pageY) / 25;
        c.addEventListener("mouseover", (e) => {
            c.style.transform = `rotateY(10deg)rotateX(-10deg)  `;
            // alert("s")
        })
        c.addEventListener("mouseout", (e) => {
            c.style.transform = `rotateY(0deg) `;
            // alert("s")
        })
    })
})