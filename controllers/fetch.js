import { cardCreator } from "./cardCreator.js";
import { smallCardCreat } from "./cardCreator.js";
export async function llamar(datos) {
  console.log("entra")
  const url2 = `https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&count=${Number(
    datos.cant
  )}&type=earthquake&latitude=${Number(datos.lat)}&longitude=${Number(
    datos.long
  )}&radius=${Number(datos.rad)}&units=kilometers&magnitude=${Number(
    datos.mag
  )}`;
  const url1 = `https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&count=${Number(
    datos.cant
  )}&type=earthquake&magnitude=${Number(datos.mag)}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579",
      "X-RapidAPI-Host": "everyearthquake.p.rapidapi.com",
    },
  };

  try {
    let response;
    if (datos.tipEntr === "1") {
      response = await fetch(url1, options);
    } else {
      response = await fetch(url2, options);
    }

    const result = await response.json();
    console.log(result);
    cardCreator(result);
    smallCardCreat(result)
  } catch (error) {
    console.error(error);
  }
}
