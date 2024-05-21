//Funcion para el diseño estandar
document.getElementById('standardButton').addEventListener('click', function() {
    changeStyleSheet('styles.css');
});
//Funcion para el diseño accesible
document.getElementById('accessibleButton').addEventListener('click', function() {
    changeStyleSheet('styles_discapacitados.css');
});
//Cargar todos los estilos
function changeStyleSheet(styleSheet) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') === 'stylesheet') {
            links[i].setAttribute('href', styleSheet);
        }
    }
} 