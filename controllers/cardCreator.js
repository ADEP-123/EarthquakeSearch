export function cardCreator(objeto) {
  const mapspace = document.getElementById("mapspace");
  mapspace.innerHTML = `<iframe id="mapa" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${objeto.data[0].latitude}, ${objeto.data[0].longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;
}
