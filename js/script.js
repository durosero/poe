    //enlaces
    var btn1 = document.getElementById("enlace_1");
    var btn2 = document.getElementById("enlace_2");
    var btn3 = document.getElementById("enlace_3");

    btn1.addEventListener("click", function(event) {
        event.preventDefault();

        console.log(event);
    });

    btn2.addEventListener("click", function(event) {
        event.preventDefault();

        console.log(event);
    });

    btn3.addEventListener("click", function(event) {
        event.preventDefault();

        console.log(event);
    });