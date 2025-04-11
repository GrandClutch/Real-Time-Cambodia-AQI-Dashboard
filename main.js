let cityInput = document.getElementById("city-input"),
  coVal = document.getElementById("coVal"),
  no2Val = document.getElementById("no2Val"),
  pm2_5Val = document.getElementById("pm2_5Val"),
  o3Val = document.getElementById("o3Val"),
  pm10Val = document.getElementById("pm10Val"),
  so2Val = document.getElementById("so2Val"),
  aqiSpecificProv = document.getElementById("aqi-specific-prov"),
  provOption = document.getElementById("prov-options");

for (let i = 0; i < provOption.children.length; i++) {
  let selectProv = provOption.children.item(i);
  selectProv.addEventListener("click", () => getAqi(selectProv.textContent));
  console.log(provOption.children.item(i));
}

async function getAqi(cityName) {
  let AQI_API_URL = `https://data.mef.gov.kh/api/v1/realtime-api/aqi?province=${encodeURIComponent(
    cityName
  )}`;
  await fetch(AQI_API_URL)
    .then((res) => res.json())
    .then((info) => {
      console.log(info);
      let { co, no2, o3, pm2_5, pm10, so2, us_epa_index } = info.data;
      aqiSpecificProv.innerHTML = `Air Quality Index for <span>${cityName}<span>`;
      coVal.innerHTML = `${co}`;
      no2Val.innerHTML = `${no2}`;
      pm2_5Val.innerHTML = `${pm2_5}`;
      o3Val.innerHTML = `${o3}`;
      pm10Val.innerHTML = `${pm10}`;
      so2Val.innerHTML = `${so2}`;
    })
    .catch(() => {
      alert("Failed to catch AQI");
    });
}

