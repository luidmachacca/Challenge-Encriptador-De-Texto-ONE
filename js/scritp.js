'use strict';

/* ==========================================================================
   LÓGICA PURA
   ========================================================================== */

const CODIGOS = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "oufar"]];

function encriptar(texto) {
  let resultado = texto;
  for (const [letra, codigo] of CODIGOS) {
    resultado = resultado.replaceAll(letra, codigo);
  }
  return resultado;
}

function desencriptar(texto) {
  let resultado = texto;
  for (const [letra, codigo] of CODIGOS) {
    resultado = resultado.replaceAll(codigo, letra);
  }
  return resultado;
}

function esValido(texto) {
  const mayusculas = /[A-Z]/.test(texto);
  const acentos = /[áéíóúÁÉÍÓÚ]/.test(texto);
  return !(mayusculas || acentos);
}

/* ==========================================================================
   REFERENCIAS DOM
   ========================================================================== */

const campo = document.getElementById("campo");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const panelResultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

const estadoInicial = mensaje.innerHTML;

/* ==========================================================================
   FUNCIONES UI
   ========================================================================== */

function mostrarResultado(texto) {
  mensaje.innerHTML = texto;
  panelResultado.classList.add("panel__resultado--con-resultado");
  botonCopiar.style.display = "block";
}

function restaurarPanel() {
  mensaje.innerHTML = estadoInicial;
  panelResultado.classList.remove("panel__resultado--con-resultado");
  botonCopiar.style.display = "none";
}

function procesar(transformacion) {
  const texto = campo.value;
  if (!esValido(texto)) {
    window.alert("🚫 ¡Por favor solo letras minúsculas y sin acentos!");
    campo.value = "";
    restaurarPanel();
    return;
  }
  mostrarResultado(transformacion(texto));
  campo.value = "";
}

async function copiarTexto() {
  const texto = mensaje.innerHTML.replace(/<br\s*\/?>/gi, "\n");
  if (!texto) {
    window.alert("🚫 No hay contenido para copiar");
    return;
  }
  try {
    await navigator.clipboard.writeText(texto);
    window.alert("✅ Contenido copiado al portapapeles");
  } catch (err) {
    console.error("❌ Error al copiar al portapapeles: ", err);
  }
}

/* ==========================================================================
   ANIMACIÓN DE INDICADORES
   ========================================================================== */

const indicadores = document.querySelectorAll(".aviso__indicadores .indicador");
let timerId;

function cambiarColores() {
  const colores = Array.from(indicadores, (el) => el.style.backgroundColor || getComputedStyle(el).backgroundColor);
  if (colores.length !== 3) return;
  const [rojo, amarillo, verde] = colores;
  indicadores[0].style.backgroundColor = verde;
  indicadores[1].style.backgroundColor = rojo;
  indicadores[2].style.backgroundColor = amarillo;
}

function restaurarColores() {
  indicadores[0].style.backgroundColor = "#EF4139";
  indicadores[1].style.backgroundColor = "#FDBD14";
  indicadores[2].style.backgroundColor = "#1BCA34";
}

/* ==========================================================================
   EVENTOS
   ========================================================================== */

botonEncriptar.addEventListener("click", () => procesar(encriptar));
botonDesencriptar.addEventListener("click", () => procesar(desencriptar));
botonCopiar.addEventListener("click", copiarTexto);

campo.addEventListener("input", () => {
  clearTimeout(timerId);
  cambiarColores();
  timerId = setTimeout(restaurarColores, 1000);
});
