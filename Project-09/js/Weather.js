const apiKey = `0f2fb94282ad6a3dbf2387c407b74806`;

let form = document.querySelector('form');
let response = document.querySelector('#response');
response.style.display = "none";
form.addEventListener("submit", async (event) => {


    let cityNname = event.target.cityNname.value;
    console.log(cityNname)

    event.preventDefault();

    let fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNname}&appid=${apiKey}&units=metric`);

    let finalData = await fetchData.json()
      response.style.display = "block";
    if (finalData.cod == "404" || finalData.cod == "400") {
      
        response.innerHTML = '<p class="wind">City Not Found</p>';
        return;
    }
    else {
        let { name, sys, weather, main, wind, } = finalData;



        response.innerHTML = ` <img id="weatherIcon" src="
https://openweathermap.org/img/w/${weather[0].icon}.png" alt="Weather Icon" />
      <h2 id="temp" class="temp">${main.temp}</h2>
     
      <h3 id="cityName" class="city">${name} <mark class="mark">${sys.country}</mark></h3>
      <div class="details">
         <p class="wind">${weather[0].description
            }</p>
        <p class="wind">💨 Wind:-${wind.speed}</p>
        <p class="wind">💧 Humidity:-${main.humidity}</p>
      </div>`;
    }


}); 
