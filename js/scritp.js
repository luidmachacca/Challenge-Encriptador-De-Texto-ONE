// -------- selecionando los elementos de html.

const main = document.querySelector("main");
const texArea = document.querySelector("textarea");
const a = document.querySelector(".copiar-mensaje");
const lizy = document.querySelector("#mensaje");
const nikole = document.querySelector(".circule")

// ---------  creando de forma dinammica la clase second-div.
const divSecond = document.createElement("div");
      divSecond.classList.add("second_div");
      main.appendChild(divSecond);
      main.insertBefore(divSecond, main.childNodes[2]);
const p_one =  document.createElement("p");
      p_one.id = "aviso";
      p_one.innerHTML = "Ningún mensaje fue <br> encontrado";
      divSecond.appendChild(p_one);

const p_two = document.createElement("p");
      p_two.id = "mensaje";
      p_two.innerHTML= "Ingresa el texto que desees encriptar o <br> desencriptar.";
      divSecond.appendChild(p_two);

// --------- encritacion de codigo

function encriptar(nami) {
    const matrizDeCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "oufar"]];
    for (let i = 0; i < matrizDeCodigo.length; i++) {
        if (nami.includes(matrizDeCodigo[i][0])) {
            nami = nami.replaceAll(matrizDeCodigo[i][0], matrizDeCodigo[i][1])


        }
    }
    return nami
}

// ------- funcion de detectar mayuscula;
function detectar_mayuscula(){
   const   textto = texArea.value;
   const   mayusculas = /[A-Z]/.test(textto);
   const   acentos = /[áéíóúÁÉÍÓÚ]/.test(textto);


   if(acentos  || mayusculas){
    window.alert(" 🚫 ¡Por favor solo letras minúsculas y sin acentos!");
    texArea.value = "";
    }
}

function resetArea() {
    divSecond.style.cssText = '';
    divSecond.innerHTML = `
    <p id="aviso">Ningún mensaje fue <br> encontrado</p>
    <p id="mensaje">Ingresa el texto que desees encriptar o <br> desencriptar.</p>`;
    a.style.display = "none";
    detectar_mayuscula();
}



texArea.addEventListener("input", resetArea);



// ----- funcion de encritacion   con el boton


function btnencriptar() {
    luna = encriptar(texArea.value);
    divSecond.innerHTML=luna
    divSecond.style.backgroundImage = 'none';
    divSecond.style.padding = "10px";
    divSecond.style.hyphens = "auto";
    divSecond.style.fontSize = "25px";
    divSecond.style.width    = '287px';
    divSecond.style.overflow = "hidden";
    divSecond.style.padding = "10px";
    a.style.display = "inline-block";
    divSecond.style.textAlign ="top" 
    texArea.value = ""; 
    a.addEventListener('click', function(){
        if (luna) {
            // Utilizar el Clipboard API para copiar el contenido
            navigator.clipboard.writeText(luna)
                .then(() => {
                    // Notificar que se ha copiado el contenido (opcional)
                    alert('✅ Contenido copiado al portapapeles');
                })
                .catch((err) => {
                    console.error('❌ Error al copiar al portapapeles: ', err);
                });
        } else {
            // Notificar al usuario si no hay contenido encriptado
            alert('🚫 No hay contenido encriptado para copiar');
        }
        
    });
}




// ---- color de imput 

var textarea = document.getElementById("myTextarea");
var timerId;
var uno, dos, tres;

function cambiarColores() {
    uno = document.querySelector(".container .uno");
    dos = document.querySelector(".container .dos");
    tres = document.querySelector(".container .tres");

    var tempColor = uno.style.backgroundColor;
    uno.style.backgroundColor = tres.style.backgroundColor;
    tres.style.backgroundColor = dos.style.backgroundColor;
    dos.style.backgroundColor = tempColor;
}

function restaurarColores() {
    uno.style.backgroundColor = "#EF4139";
    dos.style.backgroundColor = "#FDBD14";
    tres.style.backgroundColor = "#1BCA34";
}

textarea.addEventListener("input", function () {
    clearTimeout(timerId);
    cambiarColores();

    timerId = setTimeout(function () {
        restaurarColores();
    }, 1000);
});


function desencriptar(gianela) {
    const matrizDeCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "oufar"]];
    for (let i = 0; i < matrizDeCodigo.length; i++) {
        if (gianela.includes(matrizDeCodigo[i][1])) {
            gianela = gianela.replaceAll(matrizDeCodigo[i][1], matrizDeCodigo[i][0])


        }
    }
    return gianela
}


function btndesencriptar() {
    luna = desencriptar(texArea.value);
    divSecond.innerHTML=luna
    divSecond.style.backgroundImage = 'none';
    divSecond.style.padding = "10px";
    divSecond.style.hyphens = "auto";
    divSecond.style.fontSize = "25px";
    divSecond.style.width    = '287px';
    divSecond.style.overflow = "hidden";
    divSecond.style.padding = "10px";
    a.style.display = "inline-block";
    divSecond.style.textAlign ="top" 
    texArea.value = ""; 
    a.addEventListener('click', function(){
        if (luna) {
            // Utilizar el Clipboard API para copiar el contenido
            navigator.clipboard.writeText(luna)
                .then(() => {
                    // Notificar que se ha copiado el contenido (opcional)
                    alert('✅ Contenido copiado al portapapeles');
                })
                .catch((err) => {
                    console.error('❌ Error al copiar al portapapeles: ', err);
                });
        } else {
            // Notificar al usuario si no hay contenido encriptado
            alert('🚫 No hay contenido desencriptado para copiar');
        }
        
    });
}







