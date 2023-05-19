export function tipoEntrada(datos) {
  const latitud = document.getElementById("lat");
  const longitud = document.getElementById("long");
  const radioBusqueda = document.getElementById("rad");
  if (datos.tipEntr === "1") {
    latitud.disabled = true;
    longitud.disabled = true;
    radioBusqueda.disabled = true;
  } else {
    latitud.disabled = false;
    longitud.disabled = false;
    radioBusqueda.disabled = false;
  }
}
