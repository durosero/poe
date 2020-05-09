console.log("Hoola mundo");
var formHeroes = document.getElementById('formHeroes');

formHeroes.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(formHeroes);
    console.log(formData.get('nombre'));

    var heroe = {
        nombre: formData.get('nombre'),
        alias: formData.get('alias'),
        poder: formData.get('poder'),
        color: formData.get('color'),
    };

    console.log(heroe);


});