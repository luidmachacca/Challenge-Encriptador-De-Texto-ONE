# 🔐 Challenge Encriptador | Oracle + Alura

<p align="center">
  <img src="./previeww.png" alt="Vista previa del Challenge Encriptador" width="1000">
</p>

<p align="center">
  Aplicación web desarrollada como parte del programa <strong>Oracle Next Education (ONE)</strong> en colaboración con <strong>Alura Latam</strong>.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-FEFF01?logo=javascript&logoColor=000000&style=for-the-badge" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-EC6231?logo=html5&logoColor=FFFFFF&style=for-the-badge" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-01A3D8?logo=css3&logoColor=FFFFFF&style=for-the-badge" alt="CSS3"/>
</div>

---

## 📖 Descripción

Challenge Encriptador es una aplicación web que permite **encriptar y desencriptar mensajes de texto** mediante un conjunto de reglas de sustitución de vocales.

El proyecto fue desarrollado utilizando HTML, CSS y JavaScript, aplicando conceptos de manipulación del DOM, eventos, funciones y diseño responsivo.

## ✨ Funcionalidades

* 🔐 Encriptar mensajes.
* 🔓 Desencriptar mensajes.
* 📋 Copiar el resultado al portapapeles.
* 📝 Validar el texto ingresado.
* 📱 Diseño adaptable a diferentes tamaños de pantalla.

## ⚙️ ¿Cómo funciona?

### 🔐 Encriptación

Al ingresar un mensaje y presionar el botón **Encriptar**, la aplicación analiza el texto y reemplaza cada vocal según las siguientes reglas:

| Vocal | Se convierte en |
| :---: | :-------------: |
|  `a`  |       `ai`      |
|  `e`  |     `enter`     |
|  `i`  |      `imes`     |
|  `o`  |      `ober`     |
|  `u`  |      `ufat`     |

### Ejemplo

```text
hola mundo
```

se convierte en:

```text
hoberlai mufatndober
```

### 🔓 Desencriptación

Al presionar el botón **Desencriptar**, la aplicación realiza el proceso inverso, identificando los códigos utilizados y reemplazándolos por sus vocales originales.

```text
hoberlai mufatndober
```

se convierte nuevamente en:

```text
hola mundo
```

## 📋 Reglas

Para que el proceso de encriptación funcione correctamente:

* Solo se permiten **letras minúsculas**.
* No se permiten **letras con acentos**.
* No se permiten **caracteres especiales**.

## 🛠️ Tecnologías utilizadas

* **HTML5** — estructura de la aplicación.
* **CSS3** — estilos y diseño responsivo.
* **JavaScript** — lógica de encriptación, desencriptación e interacción con el DOM.

## 📂 Estructura del proyecto

```text
Challenge-Encriptador-De-Texto-ONE/
│
├── index.html
├── previeww.png
│
├── css/
│   └── stylos.css
│
├── js/
│   └── scritp.js
│
└── README.md
```

## 🚀 Demo

Puedes probar el proyecto mediante GitHub Pages:

**👉 [Ver aplicación en vivo](COLOCA-AQUI-TU-URL-DE-GITHUB-PAGES)**

## 💻 Ejecutar localmente

Clona el repositorio:

```bash
git clone https://github.com/luidmachacca/Challenge-Encriptador-De-Texto-ONE.git
```

Entra en la carpeta:

```bash
cd Challenge-Encriptador-De-Texto-ONE
```

Luego abre `index.html` en tu navegador.

## 🎯 Aprendizajes

Durante el desarrollo de este proyecto practiqué:

* Manipulación del DOM con JavaScript.
* Manejo de eventos.
* Funciones y estructuras condicionales.
* Manipulación de strings.
* Validación de entradas.
* Diseño responsivo con CSS.
* Organización básica de un proyecto frontend.
* Uso de Git y GitHub para control de versiones.

## 👨‍💻 Autor

**Luis Machacca**

GitHub: [@luidmachacca](https://github.com/luidmachacca)

---

<p align="center">
  Desarrollado como parte del programa <strong>Oracle Next Education + Alura Latam</strong>.
</p>
