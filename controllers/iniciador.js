import { controlador } from "./controlador.js";
import { tipoEntrada } from "./tipoEntrada.js";
const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  let datos = Object.fromEntries(new FormData(formu));
  //console.log(datos);
  controlador(formu, e, datos);
  tipoEntrada(datos);

  e.stopPropagation();
});
