// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedor-munieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

// Asignación de eventos a los botones
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);

// Función para encriptar el texto
function encriptar() {
    ocultarElementos();
    const texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

// Función para desencriptar el texto
function desencriptar() {
    ocultarElementos();
    const texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

// Función para recuperar el texto del textarea
function recuperarTexto() {
    return document.querySelector(".caja-texto").value;
}

// Función para ocultar el muñeco y el contenedor de mensaje
function ocultarElementos() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Función para encriptar el texto
function encriptarTexto(mensaje) {
    const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    return mensaje.split('').map(caracter => {
        for (let [original, encriptado] of matrizCodigo) {
            if (caracter === original) {
                return encriptado;
            }
        }
        return caracter;
    }).join('');
}

// Función para desencriptar el texto
function desencriptarTexto(mensaje) {
    const matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    let textoFinal = mensaje;
    for (let [encriptado, original] of matrizCodigo) {
        textoFinal = textoFinal.replaceAll(encriptado, original);
    }
    return textoFinal;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles.");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
