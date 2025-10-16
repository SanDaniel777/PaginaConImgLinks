document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let fecha = document.getElementById("fecha").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let terminos = document.getElementById("terminos").checked;

    if(nombre === "" && apellido === "" && fecha === "" && !genero && !terminos) {
        document.getElementById("mensaje").textContent = "Debes llenar todos los campos";
    } else if(nombre === "") {
        document.getElementById("mensaje").textContent = "Debes ingresar tu nombre";
    } else if(apellido === "") {
        document.getElementById("mensaje").textContent = "Debes ingresar tu apellido";
    } else if(fecha === "") {
        document.getElementById("mensaje").textContent = "Debes ingresar tu fecha de nacimiento";
    } else if(!genero) {
        document.getElementById("mensaje").textContent = "Debes seleccionar un género";
    } else if(!terminos) {
        document.getElementById("mensaje").textContent = "Debes aceptar los términos y condiciones";
    } else {
        document.getElementById("mensaje").textContent = "El formulario está completado";
    }
}
