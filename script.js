const monto = document.getElementById("monto");
const nombre = document.getElementById("nombre");
const apellidoPaterno = document.getElementById("apellidoPaterno");
const apellidoMaterno = document.getElementById("apellidoMaterno");
const celular = document.getElementById("celular");
const email = document.getElementById("email");
const formulario = document.getElementById("formulario");
const listaInputs = document.querySelectorAll(".formularioInput");
const botonenviado = document.getElementById("enviados");

let modalidadDePago = ["Banco", "Financiera"];
let modelosDePago = ["","CaixaBank", "ING", "BBVA","", "Vivus", "Moneyman", "Wenance"];
let institucion = document.getElementById("institucion");
let entidad = document.getElementById("entidad");


function recorrer (centros,valores){
    entidad.innerHTML='';
    for (let index of valores){
        centros.innerHTML+=`<option>${index}</option>`
    };
};

function llenarcentro (){
    recorrer(institucion,modalidadDePago);
};

llenarcentro();

institucion.addEventListener('change',(e) =>{
    let dato=e.target.value;
    

    switch(dato){
        case 'Banco':
            recorrer(entidad,modelosDePago.slice(0,4));
            break;
        case 'Financiera':
            recorrer(entidad,modelosDePago.slice(4,8));
            break;
        default:
            break;
    };
});

formulario.addEventListener ("submit", (e) => {
    e.preventDefault();
    let condicion = validacionFormulario();
    if (condicion==true){
        enviarFormulario()
    };
});

function validacionFormulario(){
    formulario.lastElementChild.innerHTML = "";
    let condicion = true;
    listaInputs.forEach((element) =>{
        element.lastElementChild.innerHTML = "";
    })
    if (monto.value < 4000){
        mostrarMensajeDeError ("monto", "ingrese un monto superior a €4000");
        condicion = false;
    };
    if (nombre.value.length <= 2){
        mostrarMensajeDeError ("nombre", "Tiene que tener al menos tres caracteres");
        condicion = false;
    };
    if (apellidoPaterno.value.length <= 2){
        mostrarMensajeDeError ("apellidoPaterno", "Tiene que tener al menos tres caracteres");
        condicion = false;
    };
    if (apellidoMaterno.value.length <= 2){
        mostrarMensajeDeError ("apellidoMaterno", "Tiene que tener al menos tres caracteres");
        condicion = false;
    };
    if (celular.value.length != 9){
        mostrarMensajeDeError ("celular", "Tiene que tener al menos nueve caracteres");
        condicion = false;
    };
    if (email.value.length < 1){
        mostrarMensajeDeError ("email", "nombre no valido");
        condicion = false;
    };
    return condicion;
};

function mostrarMensajeDeError (claseDelInput, mensajeDeError){
    let elemento = document.querySelector(`.${claseDelInput}`);
    elemento.lastElementChild.innerHTML = mensajeDeError;
};

function enviarFormulario(){
    const monto = document.getElementById("monto").value;
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    let institucion = document.getElementById("institucion").value;
    let entidad = document.getElementById("entidad").value;
    const miUsuario = new Usuario("","","","","","","","");
    miUsuario.registrar(monto,nombre,apellidoPaterno,apellidoMaterno,celular,email,institucion,entidad);
    alert("Formulario enviado con éxito");
    formulario.reset();
};


