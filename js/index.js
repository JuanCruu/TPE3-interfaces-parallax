document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        let loading = document.getElementById("loading");
        let contenido = document.getElementById("contenido");
        loading.style.display = "none"
        contenido.style.display = "inline"
        contenido.style.animation = "fadeIn 1s ease-in"

    }, 100);

    let chica = document.getElementById("chica");

    window.addEventListener('scroll', () => {
        let value = window.scrollY + 1100;
        let value1 = window.scrollY + 'px';
        console.log(window.scrollY);
        // chica.style.right = value + "px";
        chica.style.setProperty('right', `calc(60% + ${value1})`);
        chica.style.setProperty('width', `calc(30vh + ${value1})`);
        // chica.style.width = (value - 150) * 0.3 + "px";
        chico.style.setProperty('left', `calc(60vw + ${window.scrollY+'px'})`);
        tierra.style.top = window.scrollY * 0.2 + "px";
        tanque.style.top = -window.scrollY + "px";
        chatarra.style.right = value + "px";
        chatarra.style.transform = "rotate(" + window.scrollY * 0.1 + "deg)";
        marciano.style.transform = "rotate(" + window.scrollY * 0.1 + "deg)";
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

    // ----------------Card------------------

    const card = document.querySelector(".card");
    const container = document.querySelector(".container")
        ////////////////////////////////////////////////////////////////

    const chicaSoga = document.querySelector(".chica-cuerda img")
    card.addEventListener("mousemove", (evento) => {
        let ejeX = (window.innerWidth / 2 - evento.pageX) / 25;
        let ejeY = (window.innerHeight / 2 - evento.pageY) / 25;
        card.style.transform = `rotateY(${ejeX}deg) rotateX(${ejeY}deg)`;
        // card.style.transform = `rotate(${ejeX}deg)`
        chicaSoga.style.transform = `rotateY(${ejeY}deg) rotateX(${ejeX}deg)`;
        // chica.style.transform = `rotate(13deg) `
        //hacer que la imagen espacio se mueva de arriba abajo o que rote
    })
    container.addEventListener("mouseout", (evento) => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        // card.style.transform = `rotate(${ejeX}deg)`
        // chica.style.transform = `rotateY(0deg) rotateX(0deg)`
        // chica.style.transform = `rotate(20deg) `

    })

    // ----------------Carrusel------------------
    let contador = 1;

    function setearContador() {

        alert("value")
    }
    setInterval(function() {
        let divRadio = document.getElementById('radio' + contador);
        divRadio.checked = true;
        console.log(contador)
        contador++
        if (contador == 5) {
            contador = 1;
        }

    }, 5000);

    function aaa() {
        alert("asdasd")
    }



});