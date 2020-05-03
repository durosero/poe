    //enlaces
    var btn1 = document.getElementById("enlace_1");
    var btn2 = document.getElementById("enlace_2");
    var btn3 = document.getElementById("enlace_3");

    // //parrafos
    var parrafo1 = document.getElementById("contenidos_1");
    var parrafo2 = document.getElementById("contenidos_2");
    var parrafo3 = document.getElementById("contenidos_3");


    function muestraOculta(id) {
        console.log("El id es: " + id);
        var bntDinamico = document.getElementById("enlace_" + id);
        var parrafoDinamico = document.getElementById("contenidos_" + id);

        if (parrafoDinamico.style.display == "" || parrafoDinamico.style.display == "block") {
            parrafoDinamico.style.display = "none";
            bntDinamico.innerHTML = "Mostrar contenido";
        } else {
            parrafoDinamico.style.display = "block";
            bntDinamico.innerHTML = "Ocultar contenido";
        }
    }

    btn1.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(event);
        muestraOculta("1");

    });

    btn2.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(event);
        muestraOculta("2");
    });

    btn3.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(event);
        muestraOculta("3");
    });