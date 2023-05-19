import { fetch } from "./fetch.js";
export function controlador(formu, event) {
  console.log(event.target.value);
  let datos = Object.fromEntries(new FormData(formu));
  switch (event.target.value) {
    case "Agregar":
      console.log(datos);
      //fetch(formu)
      //mapPush(formu.lat,formu.long)
      formu.reset();
      break;
    case "Limpiar":
      formu.reset();
      break;
  }
}
