//Haz tú validación en javascript acá
function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    return true;
}