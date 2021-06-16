document.addEventListener("DOMContentLoaded", () => {

    setTimeout(function() {
        let loading = document.getElementById("loading");
        let contenido = document.getElementById("contenido");
        loading.style.animation = "fadeOut 2s linear"
        loading.style.display = "none";
        contenido.style.display = "block"
        contenido.style.animation = "fadeIn 2s ease-in"
    }, 3000);

    let chica = document.getElementById("chica");
    window.addEventListener('scroll', () => {
        let value = window.scrollY + 1100;
        let value1 = window.scrollY + 'px';

        if (window.scrollY > 300) {
            gravity.style.setProperty('top', `calc(30vh + ${window.scrollY}+px)`);
            reloj.style.setProperty('top', `calc(39vh + ${value1})`);
        } else {
            gravity.style.setProperty('top', `calc(30vh + ${value1})`);
            reloj.style.setProperty('top', `calc(39vh + ${value1})`);
        }
        // chica.style.right = value + "px";
        chica.style.setProperty('right', `calc(60% + ${value1})`);
        chica.style.setProperty('width', `calc(30vh + ${value1})`);
        // chica.style.width = (value - 150) * 0.3 + "px";
        chico.style.setProperty('left', `calc(60vw + ${window.scrollY+'px'})`);
        // tierra.style.top = window.scrollY * 0.2 + "px";
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


        document.getElementById("days").innerHTML = days + " Days  ";
        document.getElementById("hours").innerHTML = hrs + " Hrs ";
        document.getElementById("min").innerHTML = min + " Min ";
        document.getElementById("sec").innerHTML = sec + "  Sec";

        setTimeout(CountDown, 1000);



    }
    CountDown();

    // ----------------Card------------------
    const container = document.querySelector(".container")
    const card = document.querySelector(".card");
    const card2 = document.querySelector(".card2");
    const chicaSoga = document.querySelector(".chica-cuerda img")
    const chicoSoga = document.querySelector("#astronauta")

    card2.addEventListener("mousemove", (evento) => {
        let ejeX = (window.innerWidth / 2 - evento.pageX) / 25;
        let ejeY = (window.innerHeight / 2 - evento.pageY) / 25;
        console.log(ejeX, ejeY);
        card2.style.transform = `rotateY(${ejeX+4}deg) rotateX(${ejeY+4}deg)`;
        chicoSoga.style.transform = `rotateY(${ejeX}deg) rotateX(${ejeY}deg)`;
    })


    card.addEventListener("mousemove", (evento) => {
        let ejeX = (window.innerWidth / 2 - evento.pageX) / 25;
        let ejeY = (window.innerHeight / 2 - evento.pageY) / 25;
        // console.log(ejeX, ejeY);
        card.style.transform = `rotateY(${ejeX}deg) rotateX(${ejeY}deg)`;
        // card.style.transform = `rotate(${ejeX}deg)`
        chicaSoga.style.transform = `rotateY(${ejeY}deg) rotateX(${ejeX}deg)`;
        // chica.style.transform = `rotate(13deg) `

    })

    container.addEventListener("mouseout", (evento) => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
        chicoSoga.style.transform = `rotateY(0deg) rotateX(0deg)`;

        // card.style.transform = `rotate(${ejeX}deg)`
        // chica.style.transform = `rotateY(0deg) rotateX(0deg)`
        // chica.style.transform = `rotate(20deg) `

    })

    // ----------------Carrusel------------------
    let contador = 1;
    document.querySelectorAll(".radioo").forEach(r => {
        // console.log(r);
        r.addEventListener("click", (evento) => {
            let counterValue = r.getAttribute("data-info")
                // console.log(counterValue);
            contador = counterValue;
        })

    })



    function setearContador() {

        alert("value")
    }

    setInterval(function() {
        let divRadio = document.getElementById('radio' + contador);
        divRadio.checked = true;
        // console.log(contador)
        contador++
        if (contador == 8) {
            contador = 1;
        }

    }, 5000);

    function aaa() {
        alert("asdasd")
    }

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

    // tardar 3 segundos en redirigir a algun lugar de la pagina
    document.querySelectorAll(".out").forEach(s => {

        s.addEventListener("click", (e) => {
            e.preventDefault()
                // console.log(s.pathname)
                // location.href = s.pathname;

            loading.style.display = "block";
            contenido.style.display = "none"

            setTimeout(function() {
                location.href = s.href;
            }, 3000);
        })
    })


});