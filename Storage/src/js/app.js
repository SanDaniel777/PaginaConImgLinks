//clases
const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const saludo = document.querySelector(".saludo");
const saludo2 = document.querySelector(".saludo2");
const saludo3 = document.querySelector(".saludo3");
const edad = document.querySelector(".edad");
const fecha = document.querySelector(".fecha");


//mostrar info del localStorage
const textoGuardado = localStorage.getItem("texto");
if(textoGuardado != ""){
    saludo.textContent = `Nombre: ${textoGuardado}`;
}

const edadGuardado = localStorage.getItem("edad");
if(edadGuardado != ""){
    saludo2.textContent = `Edad: ${edadGuardado}`;
}

const fechaGuardado = localStorage.getItem("fecha");
if(fechaGuardado != ""){
    saludo3.textContent = `Fecha: ${fechaGuardado}`;
}




btnGuardar.addEventListener("click", ()=>{
    const texto = nombre.value;
    const valorEdad = edad.value;
    const valorFecha = fecha.value;

    if(nombre!=""){
        localStorage.setItem("texto", texto);
        saludo.textContent = `Nombre: ${texto}`;
    }

     if(edad!=""){
        localStorage.setItem("texto", valorEdad);
        saludo2.textContent = `Edad: ${valorEdad}`;
    }

     if(fecha!=""){
        localStorage.setItem("texto", valorFecha);
        saludo3.textContent = `Fecha: ${valorFecha}`;
    }



});
