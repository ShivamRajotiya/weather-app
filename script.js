const form = document.querySelector("form");
const weather = document.querySelector(".weather");
const API_KEY = "0e2c6a5023648b1d59015288f83bc09c";
const search = document.querySelector(".search");

const getweather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};
const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>Weather not found</h2>`;
    return;
  }
  weather.innerHTML = `
    <div class="card" style="padding:10px">
    <div class="info">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        
    <div class="first">
    <h1>${data.name}</h1>
    <h3>${data.main.temp} C</h3>
    </div>
    </div>
    <div class="other">
    <div class="second">Wind Speed 
    ${data.wind.speed}</div>
    <h3> Humidity ${data.main.humidity} </h3>
    <h3>${data.weather[0].main} </h3>
</div>
    
    
    
    
    </div>
    
    
    `;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getweather(search.value);
});
