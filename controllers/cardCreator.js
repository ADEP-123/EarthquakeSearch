export function cardCreator(latitud,longitud) {
  const mapspace = document.getElementById("mapreal");
  mapspace.innerHTML = `<iframe id="tarj0" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${latitud}, ${longitud}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;
}

const cardSpace = document.getElementById("cardspace");
export function smallCardCreat(data){
  let str = "";
  for(let i = 1; i < data.length; i++ ){
    str += `          
    <button class="tarj" id="${i}">
      <h3>${data[i].subnational}</h3>
      <p>
        <b>Magnitud:</b>${data[i].magnitude}<br>
        <b>Profundidad:</b>${data[i].depth}<br>
        <b>Ubicacion:</b>${data[i].place}<br>
      </p> 
    </button>`;
  } 
  cardSpace.innerHTML = str;


  const tarj = document.getElementsByClassName("tarj");
  for(let i = 0; i< tarj.length ; i++){
    tarj[i].addEventListener("click", e => {
      let tarjid = tarj[i].getAttribute("id")
      cardCreator(data[tarjid].latitude,data[tarjid].longitude)
      let aux = data[0]
      data.splice(0,1,data[tarjid])
      data.splice(tarjid,1,aux)
      let contenido = `      
      <h3>${data[tarjid].subnational}</h3>
      <p>
        <b>Magnitud:</b>${data[tarjid].magnitude}<br>
        <b>Profundidad:</b>${data[tarjid].depth}<br>
        <b>Ubicacion:</b>${data[tarjid].place}<br>
      </p>`
      
      tarj[i].innerHTML = contenido

    })
  }



}


