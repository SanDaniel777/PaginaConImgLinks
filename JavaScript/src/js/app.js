let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multi");
let division = document.getElementById("div");

let revisar = document.getElementById("correo", "contra");



function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+resultado+"</p>"
    console.log("El resultado es: "+operacionSuma)
}

function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+resultado+"</p>"
    console.log("El resultado es: "+operacionResta)
}

function realizarMulti(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+resultado+"</p>"
    console.log("El resultado es: "+operacionMultiplicacion)
}

function realizarDiv(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML="<p>El resultado es "+resultado+"</p>"
    console.log("El resultado es: "+operacionDivision)
}

sumar.addEventListener("click", realizarSuma);
restar.addEventListener("click", realizarResta);
multiplicar.addEventListener("click", realizarMulti);
division.addEventListener("click", realizarDiv);


function revision(){
    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("contra").value;
    let check = document.getElementById("check");

    if (correo === "" && contra === "") {
        check.innerHTML = "<p>Falta escribir el correo y la contraseña</p>";
      } else if (correo === "") {
        check.innerHTML = "<p>Falta escribir el correo</p>";
      } else if (contra === "") {
        check.innerHTML = "<p>Falta escribir la contraseña</p>";
      } else {
        check.innerHTML = "<p>Todo correcto ✅</p>";
      }

}
 document.getElementById("revisar").addEventListener("click", revision);
