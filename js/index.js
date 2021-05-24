document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        let loading = document.getElementById("loading");
        let contenido = document.getElementById("contenido");
        loading.style.display = "none"
        contenido.style.display = "inline"
        contenido.style.animation = "fadeIn 1s ease-in"

    }, 500);


    let chica = document.getElementById("chica");

    window.addEventListener('scroll', () => {
        let value = window.scrollY + 1100;
        console.log(chica.style.right);
        console.log(value);

        chica.style.right = value + "px";

        chica.style.width = (value - 150) * 0.3 + "px";
        chico.style.left = value + "px";


        tierra.style.top = window.scrollY * 0.2 + "px";
        tanque.style.top = -window.scrollY + "px";
        chatarra.style.right = value + "px";
        chatarra.style.transform = "rotate(" + window.scrollY * 0.1 + "deg)";
        marciano.style.transform = "rotate(" + window.scrollY * 0.1 + "deg)"


    })
})