import { fetch } from "./fetch.js";
import { mapPush} from "./mappush.js"
export function controlador(formu, event) {
  console.log(event.target.value);
  let datos = Object.fromEntries(new FormData(formu));
  switch (event.target.value) {
    case "Agregar":
      console.log(datos);
      //fetch(formu)
      formu.reset();
      break;
    case "Limpiar":
      formu.reset();
      break;
  }
}
