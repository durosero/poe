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

});