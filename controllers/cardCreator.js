export function cardCreator(result) {
  const mapspace = document.getElementById("mapreal");
  mapspace.innerHTML = `<iframe id="tarj0" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${result.data[0].latitude}, ${result.data[0].longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;

  const infoMapa = document.getElementById("infomapa");
  infoMapa.innerHTML = `
  <tr>
  <td>${result.data[0].date}</td>
  <td>${result.data[0].depth}</td>
  <td>${result.data[0].latitude}</td>
  <td>${result.data[0].longitude}</td>
  <td>${result.data[0].place}</td>
</tr>`
}

const cardSpace = document.getElementById("cardspace");
export function smallCardCreat(result){
  let str = "";
  for(let i = 1; i < result.data.length; i++ ){
    str += `          
    <button class="tarj" id="${i}">
      <h3>${result.data[i].subnational}</h3>
      <p>
        <b>Magnitud:</b>${result.data[i].magnitude}<br>
        <b>Profundidad:</b>${result.data[i].depth}<br>
        <b>Ubicacion:</b>${result.data[i].place}<br>
      </p> 
    </button>`;
  } 
  cardSpace.innerHTML = str;


  const tarj = document.getElementsByClassName("tarj");
  for(let i = 0; i< tarj.length ; i++){
    tarj[i].addEventListener("click", e => {
      let tarjid = tarj[i].getAttribute("id")

      let aux = result.data[0]
      result.data.splice(0,1,result.data[tarjid])
      result.data.splice(tarjid,1,aux)
      cardCreator(result)
      let contenido = `      
      <h3>${result.data[tarjid].subnational}</h3>
      <p>
        <b>Magnitud:</b>${result.data[tarjid].magnitude}<br>
        <b>Profundidad:</b>${result.data[tarjid].depth}<br>
        <b>Ubicacion:</b>${result.data[tarjid].place}<br>
      </p>`
      
      tarj[i].innerHTML = contenido

    })
  }
}


