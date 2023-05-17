export function controlador(formu, event) {
  console.log(event.target.value);
  let url = "";
  let datos = Object.fromEntries(new FormData(formu));
  switch (event.target.value) {
    case "Agregar":
      url = URL + entidad;
      get(url, datos);
      formu.reset();
      break;
    case "Limpiar":
      formu.reset();
      break;
  }
}
