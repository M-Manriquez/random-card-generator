import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Funcion que devuelve el valor de la carta
  function randomValor() {
    let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    let randomIndex = Math.floor(valor.length * Math.random());

    return valor[randomIndex];
  }

  // Funcion que devuelve el palo que tendra la carta
  function randomPalo() {
    let palos = [
      "<span>&#9829;</span>", //corazones
      "<span>&#9827;</span>", //treboles
      "<span>&#9830;</span>", //diamantes
      "<span>&#9824;</span>", //picas
    ];
    let randomIndex = Math.floor(palos.length * Math.random());
    return palos[randomIndex];
  }

  // Funcion que devuelve el color del palo
  function randomColor() {
    let randomIndex = Math.round(Math.random());

    if (randomIndex == 1) {
      return "red";
    }
    return "black";
  }

  const palo = randomPalo();
  const color = randomColor();
  const valor = randomValor();

  document.querySelectorAll(".card-header, .card-footer").forEach((element) => {
    element.style.color = color;
    element.innerHTML = palo;
  });
  document.querySelector(".card-body").innerHTML = valor;
};
