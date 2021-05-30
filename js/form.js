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


})