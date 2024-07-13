const d = document;
const textArea = d.querySelector('.form__input');
const imagenMuneco = d.querySelector('.result__img'); 
const loaderCuadros = d.querySelector('.loader');
const codificandoTexto = d.querySelector('.result__title'); 
const resultadoTexto = d.querySelector('.result__text');
const botonEncriptar = d.querySelector('.form__btn[value="Encriptar"]');
const botonDesencriptar = d.querySelector('.form__btn--secondary[value="Desencriptar"]');
const botonCopiar = d.querySelector('.result__btn');

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

// Función para encriptar 
function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }     
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

// Función para desencriptar 
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

// Ocultar elementos
textArea.addEventListener('input', (e)=>{
    imagenMuneco.style.display = 'none';
    loaderCuadros.classList.remove('hidden');
    codificandoTexto.textContent = 'Capturando mensaje';
    resultadoTexto.textContent = '';
})

// Función en el botón encriptar
botonEncriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove('hidden');
    codificandoTexto.textContent = 'El resultado es:';
})

// Función en el botón desencriptar
botonDesencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove('hidden');
    codificandoTexto.textContent = 'El resultado es:';
})

// Función en el botón copiar
botonCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(resultadoTexto.textContent);
});
