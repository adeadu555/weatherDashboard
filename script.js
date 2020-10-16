var citiesinAmerica = [];

function displayWeather () {

    var cityInAmerica = $("#searchCity").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInAmerica + "&appid=184822765e91fe1b29c25df4c0a41998";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    
        console.log(response)

    })

}