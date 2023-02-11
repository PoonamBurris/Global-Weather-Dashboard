//API kep for OpenWeather API
const APIKEY = "edf90ab7d1e2872323a8f45bf7ec1e92"
var places =[];
var apiurl ="https://api.openweathermap.org/data/2.5/forecast?lat={placelat}&lon={placelon}&appid={APIKEY}"
var inputPlace = document.getElementById("input-place");
var buttonSearch = document.getElementById("btn-search");
var searchHis = document.getElementById("sHistory");
var weathertoday=$("#weather-today");
var wToday = document.getElementById("current-title");
var WFive = document.getElementById("weather-five");
var currentTemp = document.getElementById("cur-temp");
var currenthum = document.getElementById("cur-hum");
var currentwindsp = document.getElementById("cur-windSp");
var currentDate = dayjs().format('M/DD/YYYY');
var currenticon = document.getElementById("c-icon");
var weather5 =document.getElementById("weather-five");
var dateone = document.getElementById("date1")
var tempone = document.getElementById("temp1")



     function searchWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputPlace.value + "&APPID=edf90ab7d1e2872323a8f45bf7ec1e92")
    .then(response => response.json())
       .then(data => {
        //For displaying current Weather of user inputed place
     var placeValue = data["name"];
     var temp = data[ 'main']['temp'];
     var tempF = Math.round([((temp -273.15)*9)/5]+32);
     var cwindsp = data['wind']['speed'];
     var chumidity = data['main']['humidity'];
     var cicon = data['weather'][0]['icon'];
     var iconurl = "http://openweathermap.org/img/w/" + cicon + ".png";
     $('#c-icon').attr('src',iconurl);
     
       wToday.innerHTML= placeValue + "  " + currentDate;
       currentTemp.innerHTML= "Temp : " + tempF + " F ";
       currentwindsp.innerHTML = "Wind : " + cwindsp + " MPH ";
       currenthum.innerHTML= " Humidity : " + chumidity + " % ";

       var clatitude = data['coord']['lat'];
        var clongitutude = data['coord']['lon'];
       //var latvalue= dateone.innerHTML = clatitude;
       //var lonvalue= tempone.innerHTML=clongitutude;

      
        //Adds border to Current weather of the place
        weathertoday.addClass("weather-today")
        return { 
            lat: clatitude,
            lon: clongitutude
        }
    })
    .then(coordinates => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&cnt=5`)
        .then(response => response.json())
        .then(data => {
            console.log("forecast",  data)
            const forecastlistEL = document.getElementById("forecast-list")
            
            data.list.forEach(item => {
                const fcTemp = item.main.temp;
                const fcHum = item.main.humidity;
                const fcWind = item.wind.speed;
                const fcDate = dayjs(item.dt).format('M/DD/YYYY');
                const fcContainer = document.createElement("p");
                
                const fcTempEL = document.createElement("p");
                fcTempEL.innerHTML= `Temp: ${fcTemp}`
                
                fcTempEL.style.backgroundColor= "grey"
                fcTempEL.style.color= "white"
                fcTempEL.style.display= "block"
                fcContainer.appendChild(fcTempEL)

                const fcWindEL = document.createElement("p");
                fcWindEL.innerHTML= `Wind: ${fcWind}`
                
                fcWindEL.style.backgroundColor= "grey"
                fcWindEL.style.color= "white"
                fcWindEL.style.display= "block"
                fcContainer.appendChild(fcWindEL)











                forecastlistEL.appendChild(fcContainer)


            })
        })
    })
};
     

       



       
        //For displaying current Weather of user inputed place
         weather5.innerHTML="5-Day Forecast : ";

         //for (var i=1; i< 6; i++){
         //   var ftempF = Math.round(data.daily[i].temp.day);

         //   var fchumidity = data.daily[i].humidity;
         //   var fcicon = data.daily[i].weather[0].icon;
         //   var fcwindsp = 
         //}


    
