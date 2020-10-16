var citiesinAmerica = [];

function displayWeather () {

    var cityInAmerica = $("#searchCity").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInAmerica + "&appid=184822765e91fe1b29c25df4c0a41998";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    
        console.log(response)
        $("#TodaysWeather").empty();

        var cityBoard = $("<div class='city'>");
        



  
        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInAmerica + "&appid=184822765e91fe1b29c25df4c0a41998";


    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#fiveDay").empty();
        var fiveDay = response.list;
    

        function generateButtons() {

            $("#UScitiesbuttons").empty();

            for (var i = 0; i < citiesinAmerica.length; i++) {

                var UScitiesBtn = $("<button type='button' class='btn btn-warning'>");

                UScitiesBtn.addClass("city-btn");

                UScitiesBtn.attr("data-city", citiesinAmerica[i]);

                UScitiesBtn.text(citiesinAmerica[i]);

                $("#UScitiesbuttons").append(UScitiesBtn);

                localStorage.setItem(citiesinAmerica, JSON.stringify(UScitiesBtn))
            }
        }

      
        $("#searchCityBtn").on("click", function (event) {
            event.preventDefault();

            var city = $("#searchBtn").val().trim();

            citiesinAmerica.push(city);

            addButtons();

            displayWeather();

        });

        generateButtons();

        $(document).on("click", ".city-btn", displayWeather);

