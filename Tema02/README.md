# Tarea 2 - Navegadores, motores y mi primera página interactiva

## Introducción

En esta práctica he trabajado con los principales elementos que intervienen en el funcionamiento de una página web en el lado del cliente: los navegadores, los motores de renderizado, los motores de JavaScript, HTML, CSS, Bootstrap y JavaScript.

La práctica la he dividido en dos páginas: `index.html`, donde se estudian diferentes navegadores y sus motores, e `interaccion.html`, donde se muestran los botones de interacción de JavaScript.

## Parte A - Navegadores y motores

En `index.html` se incluye una tabla con los navegadores Chrome, Firefox, Safari, Edge y Opera. Para cada uno de los navegadores se indica la empresa responsable, su motor de renderizado, su motor de JavaScript y si está basado en Chromium.

También se explica por qué muchos navegadores utilizan motores similares y cómo esto afecta al desarrollo web. Aunque compartir motor facilita la compatibilidad, sigue siendo necesario comprobar las páginas en diferentes navegadores y dispositivos.

ATambien he usado el ejemplo `Can I Use`, mostrando una característica web que varia dependiendo del navegador y su versión.

## Parte B - Interacción con JavaScript

En `interaccion.html` he creado los tres botones:

- **Saludar:** muestra un `alert()` con mi nombre y deja un mensaje en la consola.
- **Simular un error:** utiliza `console.error()` para mostrar un error simulado sin interrumpir la página.
- **¿Qué navegador soy?:** obtiene `navigator.userAgent`, lo muestra mediante `alert()` y también lo escribe en la consola.



## HTML, Bootstrap y JavaScript

HTML se encarga de crear la estructura y el contenido de la página.

Bootstrap proporciona estilos y componentes visuales, además del sistema de diseño responsive mediante clases como `container`, `row`, `col-*`, `card` , `btn` , etc.

JavaScript proporciona la parte interactiva de la página. En esta práctica lo he usado para responder a los botones, mostrar mensajes y consultar información del navegador.

## Pruebas realizadas

He comprobado las páginas utilizando un servidor local y he probado la interacción en diferentes navegadores. También he comprobado que los mensajes de `console.log()` y `console.error()` aparecen correctamente en la consola del navegador y que el botón del User-Agent muestra la información correspondiente.

## Fuentes consultadas

- Can I Use: consulta de compatibilidad entre navegadores.
- Bootstrap: documentación oficial del framework.

## Uso de IA

He usado la ia en la parte de los commits en el Github porque me equivoque y lo estaba haciendo en el de navegador en vez de en el Github Desktop.