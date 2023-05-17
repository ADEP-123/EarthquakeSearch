import { controlador } from "./controlador.js";
import { tipoEntrada } from "./tipoEntrada.js";
const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
    e.preventDefault();
    
    controlador(formu, e);
    tipoEntrada(formu)

    e.stopPropagation();
})