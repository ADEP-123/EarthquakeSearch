export function tipoEntrada(formu) {
  const datos = Object.fromEntries(new FormData(formu));
  const latitud = document.getElementById("lat");
  const longitud = document.getElementById("long");
  const radioBusqueda = document.getElementById("rad");
  console.log(datos);
  if (datos.tipEntr === "1") {
    latitud.disabled = true;
    longitud.disabled = true;
    radioBusqueda.disabled = true;
  }
}
