document.addEventListener("DOMContentLoaded", () => {

    let contenedor = document.querySelector(".contenedor-formulario");
    let loading = document.querySelector(".loading");
    let btn = document.querySelector(".btn-send");
    btn.addEventListener("click", () => {
            let mail = document.querySelector("#correo").value;
            let password = document.querySelector("#password").value;

            if (mail != "" && password != "") {

                contenedor.classList.add('oculto');
                loading.style.display = "block";
                setTimeout(() => {
                    location.href = "index.html";
                }, 3000)
            }

        })
        // loader efect
    let fondo = document.querySelector(".fondo")
    let contenedorFormulario = document.querySelector(".contenedor-formulario")
    contenedorFormulario.style.opacity = "0";
    loading.style.display = "block";
    fondo.style.display = "none";
    setTimeout(function() {
        loading.style.display = "none";
        fondo.style.display = "block";
        contenedorFormulario.style.animation = "fadeIn 2s ease-in"
        contenedorFormulario.style.opacity = "1";

    }, 3000);


})