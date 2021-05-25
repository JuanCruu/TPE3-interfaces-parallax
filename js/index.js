document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        let loading = document.getElementById("loading");
        let contenido = document.getElementById("contenido");
        loading.style.display = "none"
        contenido.style.display = "inline"
        contenido.style.animation = "fadeIn 1s ease-in"

    }, 3000);


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

    function CountDown() {
        let hoy = new Date();
        let diaEvento = new Date("July 30,2021 00:00:00");

        let tiempoActual = hoy.getTime();
        let tiempoDelEvento = diaEvento.getTime();

        let timepoRestante = tiempoDelEvento - tiempoActual;

        let sec = Math.floor(timepoRestante / 1000)
        let min = Math.floor(sec / 60)
        let hrs = Math.floor(min / 60)
        let days = Math.floor(hrs / 24)

        hrs = hrs % 24
        min = min % 60
        sec = sec % 60

        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;

        setTimeout(CountDown, 1000);



    }
    CountDown();





})