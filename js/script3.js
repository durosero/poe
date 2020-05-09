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



function listar() {
    var registro = document.getElementById('registro');
    var vengadores = JSON.parse(localStorage.getItem('vengadores'));
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
        `;
        registro.appendChild(nuevaFila);

    });

}

listar();