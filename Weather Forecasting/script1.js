let k = 0
function openpopup() {
    if(k%2==0){
        document.getElementById("card").style.display = "block";
        document.getElementById("search_popup").innerHTML = "Close";
        k+=1
    }
    else{
        document.getElementById("card").style.display = "none";
        document.getElementById("search_popup").innerHTML = "Search";
        k+=1
    }
}


let weather = {
    "apiKey":"14bcd0eaaa5f6643d3a56b05e707e7a5" ,
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey)
    .then((response)=>response.json())
    .then((data)=>this.displayweather(data));
    },
    displayweather : function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,temp,description,speed,humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search_bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function() {
    weather.search();
});