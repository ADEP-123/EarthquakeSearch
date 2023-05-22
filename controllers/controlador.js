import { llamar } from "./fetch.js";
export function controlador(formu, event, datos) {
  switch (event.target.value) {
    case "Agregar":
      if (datos.tipEntr === "") {
        alert("Seleccione el tipo de entrada");
      } else if (datos.tipEntr === "1") {
        if (datos.cant === "" || datos.mag === "" || Number(datos.mag) < 0) {
          alert(
            "Digite la cantidad y la magnitud, recuerde que la magnitud debe ser mayor o igual a o"
          );
        }
        //llamar(datos);
        formu.reset();
      } else {
        if (
          datos.cant === "" ||
          datos.mag === "" ||
          Number(datos.mag) < 0 ||
          datos.lat === "" ||
          datos.long === "" ||
          datos.rad === ""
        ) {
          alert(
            "Todos los campos son necesarios, recuerde que la magnitud debe ser mayor o igual a o"
          );
        }
        llamar(datos);
        formu.reset();
      }
      break;
    case "Limpiar":
      formu.reset();
      break;
  }
}
