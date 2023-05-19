export function cardCreator(objeto) {
  const mapspace = document.getElementById("mapreal");
  mapspace.innerHTML = `<iframe id="mapa" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${objeto.data[0].latitude}, ${objeto.data[0].longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;

  const cardspace = document.getElementById("cardspace");
  let str = "";
  objeto.data.forEach((element) => {
    str += `          
    <div class="tarj">
      <h3>${element.subnational}</h3>
      <p>
        <b>Magnitud:</b>${element.magnitude}<br>
        <b>Profundidad:</b>${element.depth}<br>
        <b>Ubicacion:</b>${element.place}<br>
      </p>
    </div>`;
  });
  cardspace.innerHTML = str;
}
