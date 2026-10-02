"use strict";

function saludar() {
    alert("¡Hola! Soy Carlos Posadas Kalman.");
    console.log("Se ha pulsado el botón Saludar.");
}

function simularError() {
    console.error("Error simulado: se ha producido un problema de ejemplo.");
}

function mostrarNavegador() {
    const userAgent = navigator.userAgent;

    alert("El User-Agent de mi navegador es:\n\n" + userAgent);

    console.log("User-Agent del navegador:", userAgent);
}