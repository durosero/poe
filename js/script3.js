var formHeroes = document.getElementById('formHeroes');

formHeroes.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(formHeroes);
    // var heroe = {
    //     nombre: formData.get('nombre'),
    //     alias: formData.get('alias'),
    //     poder: formData.get('poder'),
    //     color: formData.get('color'),
    // };
    var heroe = Object.fromEntries(formData);

    var vengadores = [];

    if (localStorage.getItem('vengadores') == null) {
        vengadores.push(heroe);
    } else {
        vengadores = JSON.parse(localStorage.getItem('vengadores'));
        vengadores.push(heroe);
    }
    localStorage.setItem('vengadores', JSON.stringify(vengadores));
    listar();

});


document.querySelector('table').addEventListener('click', (event) => {
    console.log(event);

    if (event.target.nodeName == 'A') {
        var valor = event.target.getAttribute('data');
        var vengadores = JSON.parse(localStorage.getItem('vengadores'));
        var vengadoresAux = [];

        vengadores.forEach((heroe, index) => {
            if (heroe.nombre != valor) {
                vengadoresAux.push(heroe);
            }
        });

        localStorage.setItem('vengadores', JSON.stringify(vengadoresAux));

        //  event.target.style.backgroundColor = 'orange';
        console.log(valor);
    }
    listar();


});


function listar() {
    var vengadores;
    var registro = document.getElementById('registro');
    if (localStorage.getItem('vengadores') == null) {
        vengadores = [];
    } else {
        vengadores = JSON.parse(localStorage.getItem('vengadores'));
    }

    registro.innerHTML = "";

    //console.log(vengadores);

    vengadores.forEach((heroe, index) => {
        var nuevaFila = document.createElement('tr');

        nuevaFila.innerHTML = `
            <td>${index+1}</td>
            <td>${heroe.nombre}</td>
            <td>${heroe.alias}</td>
            <td>${heroe.poder}</td>
            <td>${heroe.color}</td>
            <td> <a href ='javascript:void(0)' data='${heroe.nombre}'  >Eliminar</a> </td>
        `;
        registro.appendChild(nuevaFila);

    });

}

listar();