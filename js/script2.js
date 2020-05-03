var btn = document.querySelector('button');

btn.addEventListener('click', (evt) => {

    console.log(evt);

    var nombres = document.querySelector("#nombres").value;
    var apellidos = document.querySelector("#apellidos").value;
    var nota = document.querySelector("#nota").value;

    var nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
            <td> ${nombres} </td>
            <td> ${apellidos} </td>
            <td> ${nota} </td>
    `;
    document.querySelector('tbody').appendChild(nuevaFila);
    //crearEvento();
});


document.querySelector('table').addEventListener('click', (event) => {
    console.log(event);
    if (event.target.nodeName == 'TD') {
        event.target.style.backgroundColor = 'orange';
    }

});

// function crearEvento() {
//     var aux = document.querySelectorAll('td');
//     aux.forEach(function(celda) {
//         celda.addEventListener('click', () => {
//             celda.style.backgroundColor = 'orange';
//         });
//     });
// }