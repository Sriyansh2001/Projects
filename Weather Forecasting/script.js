const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsE1 = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherforcastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const API_KEY = '14bcd0eaaa5f6643d3a56b05e707e7a5'

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursIn12HrForemate = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    var min_extra = '';
    if (minutes <= 9) {
        min_extra = 0;
    }
    var hrs_extra = '';
    if (hoursIn12HrForemate <= 9) {
        hrs_extra = 0;
    }

    timeEl.innerHTML = hrs_extra + '' + hoursIn12HrForemate + ':' + min_extra + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);
getWeatherdata()
function getWeatherdata() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
            console.log(data);
            showWeatherdata(data);
        })
    })
}

function showWeatherdata(data){
    let {humidity,pressure,sunrise,sunset,wind_speed} = data.current;
    currentWeatherItemsE1.innerHTML = 
    `<div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}%</div>
  </div>
   <div class="weather-item">
     <div>Pressure</div>
     <div>${pressure}</div>
   </div>
   <div class="weather-item">
     <div>Wind Speed</div>
     <div>${wind_speed}</div>
   </div>
   <div class="weather-item">
     <div>Sunrise</div>
     <div>${window.moment(sunrise * 1000).format('HH:mm')}</div>
   </div>
   <div class="weather-item">
     <div>Sunset</div>
     <div>${window.moment(sunset * 1000).format('HH:mm')}</div>
   </div>`;

   let otherdayforecast = '';
   data.daily.forEach((day,idx)=>{
       if(idx == 0){
            currentTempEl.innerHTML =   `
            <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather-icon" class="w-icon" />
          <div class="other">
            <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
            <div class="temp">Night - ${day.temp.night}&#176;</div>
            <div class="temp">Day - ${day.temp.day}&#176;</div>
          </div>`
       }
       else{
            otherdayforecast += `
            <div class="weather-forecast-item">
            <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
            <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather-icon" class="w-icon" />
            <div class="temp">Night - ${day.temp.night}&#176;</div>
            <div class="temp">Day - ${day.temp.day}&#176;</div>
            </div>
          `
       }
       weatherforcastEl.innerHTML = otherdayforecast;
   })
}
