import { cardCreator } from "./cardCreator.js";
export async function fetch(formu) {
  const url1 = `https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&count=${formu.cant}&type=earthquake&latitude=${formu.lat}&longitude=${formu.long}&radius=${formu.rad}&units=kilometers&magnitude=${formu.mag}`;
  const url2 = `https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&count=${formu.cant}&type=earthquake&magnitude=${formu.mag}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579",
      "X-RapidAPI-Host": "everyearthquake.p.rapidapi.com",
    },
  };

  try {
    if (formu.tipEntr === "1") {
      const response = await fetch(url1, options);
    } else {
      const response = await fetch(url2, options);
    }

    const result = await response.json();
    cardCreator(result);
  } catch (error) {
    console.error(error);
  }
}
