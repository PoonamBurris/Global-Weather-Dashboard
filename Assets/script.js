//API kep for OpenWeather API
var APIKEY = "edf90ab7d1e2872323a8f45bf7ec1e92";
var places =[];
var apiurl ="https://api.openweathermap.org/data/2.5/forecast?lat={placelat}&lon={placelon}&appid={APIKEY}"
var inputPlace = document.getElementById("input-place");
var buttonSearch = document.getElementById("btn-search");
var searchHis = document.getElementById("sHistory");
var wToday = document.getElementById("weather-today");
var WFive = document.getElementById("weather-five");


//Get Current Weather of user specified place using Geocoding API
var showcurrentweather = function(place) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q={place}&appid={APIKEY}")
    .then(function(response){
        return response.json();
    })
    .then(function(response){

//Set variables for data to be pulled
var placelat =response.coord.lat;
var placelon = response.coord.lon;
fetch(apiurl)
.then(function(response){
    return response.json();
})
.then(function(response) {
    searchHis(place);
    
    var weatherToday = $("#weather-today");
    weatherToday.addClass("weather-today");

    var currenttitle =$("#current-title");
    var todaydate = moment.format ("M/D?YYY");
    currenttitle.text("${place} (${todaydate})");
    var icontoday = $("#icon");
    icontoday.addClass("icon");
    var iconcodetoday= response.current.weather[0].icon;
    icontoday.attr("src","https://openweathermap.org/img/wn/${iconcodetoday}@2x.png");
    var curtemp=$("#cur-temp");
    curtemp.text("Temp: " + response.current.temp + "u00B0F");
    var curwindSp=$("#cur-windSp");
    curtemp.text("Wind: " + response.current.wind_speed + "MPH");
    var curtemp=$("#cur-hum");
    curtemp.text("Humidity: " + response.current.humidity + "%");
})
    })

}   
          
       // getCurrentWdata(latitude,longitude);
    


    //else { alert ("Place not found - Enter valid place ")
    //inputPlace.reset()
   //// }
//});
//};

//To pull five day forcast from API
var getCurrentWdata =function(place,latitude,longitude){
    fetch(apiurl)
    .then(function(response){
        response.json().then(function(data){
            console.log(data);


        });
    });

};

//Buttons -Onclick event
buttonSearch.addEventListener("click",showcurrentweather);
buttonSearch.addEventListener("click",showfivedayweather);




