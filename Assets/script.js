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
var datetwo = document.getElementById("date2")
var datethree = document.getElementById("date3")
var datefour = document.getElementById("date4")
var datefive = document.getElementById("date5")
var tempone = document.getElementById("temp1")
var temptwo = document.getElementById("temp2")
var tempthree = document.getElementById("temp3")
var tempfour = document.getElementById("temp4")
var tempfive = document.getElementById("temp5")
var windone = document.getElementById("wind1")
var windtwo = document.getElementById("wind2")
var windthree = document.getElementById("wind3")
var windfour = document.getElementById("wind4")
var windfive = document.getElementById("wind5")
var humone = document.getElementById("hum1")
var humtwo = document.getElementById("hum2")
var humthree = document.getElementById("hum3")
var humfour = document.getElementById("hum4")
var humfive = document.getElementById("hum5")





     function searchWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputPlace.value + "&APPID=edf90ab7d1e2872323a8f45bf7ec1e92")
    .then(response => response.json())
       .then(data => {
        //For displaying current Weather of user inputed place
     var placeValue = data["name"];
     var temp = data[ 'main']['temp'];
     var tempF = Math.round((temp-273.15) * 1.8 +32);
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
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&cnt=40`)
        .then(response => response.json())
        .then(data => {
            //Forecast for 1 of next 5 days
            console.log("forecast",  data)
            var fcdate1 = data ["list"][3]["dt"]
            var formateddate1 = fcdate1;
            dateone.innerHTML= formateddate1
        
            var fctemp2 = data ["list"][3]["main"]["temp"]
            var cvfctemp2 = Math.round((fctemp2-273.15) * 1.8 +32);
            tempone.innerHTML= "Temp: " + cvfctemp2 + " °F"

            var fcwind1 = data ["list"][3]["wind"]["speed"]
            windone.innerHTML= "Wind: " + fcwind1 + " MPH"

            var fchum1 = data ["list"][3]["main"]["humidity"]
            humone.innerHTML= "Humidity: " + fchum1 + " %"









           // const forecastlistEL = document.getElementById("forecast-list")
            
            //data.list.forEach(item => {
               // const fcTemp = item.main.temp;
                //const fcHum = item.main.humidity;
                //const fcWind = item.wind.speed;
                //const fcDate = dayjs(item.dt).format('M/DD/YYYY');
                //const fcContainer = document.createElement("p");
                
                //const fcTempEL = document.createElement("p");
                //fcTempEL.innerHTML= `Temp: ${fcTemp}`
                
               // fcTempEL.style.backgroundColor= "grey"
               // fcTempEL.style.color= "white"
                //fcTempEL.style.display= "block"
               // fcContainer.appendChild(fcTempEL)

                //const fcWindEL = document.createElement("p");
                //fcWindEL.innerHTML= `Wind: ${fcWind}`
                
                //fcWindEL.style.backgroundColor= "grey"
                //fcWindEL.style.color= "white"
                //fcWindEL.style.display= "block"
                //fcContainer.appendChild(fcWindEL)



               // weather5.innerHTML="5-Day Forecast : ";







                //forecastlistEL.appendChild(fcContainer)


            })
        })
    }
     

       



       
        //For displaying current Weather of user inputed place
        

         //for (var i=1; i< 6; i++){
         //   var ftempF = Math.round(data.daily[i].temp.day);

         //   var fchumidity = data.daily[i].humidity;
         //   var fcicon = data.daily[i].weather[0].icon;
         //   var fcwindsp = 
         //}


    
