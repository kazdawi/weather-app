async function fetchWeather() {

    const locationWeather = document.getElementById("location").value;
    const apikey= "db27fe2aeda1ea8a996b2fd5c94a15c4";

  
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${locationWeather}&appid=${apikey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Location not found");
          } else if (response.status === 401) {
            throw new Error("Invalid API KEY");
          } else {
            throw new Error("Unable to fetch weather data");
          }
        }
        displayWeather(data)
    } catch (error) {
      alert(error);
    }
  }
  
  function displayWeather(data) {
    const city = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const icon = data.weather[0].icon;
    document.getElementById("city").innerHTML = `Weather in ${city}`;
    document.getElementById("description").innerHTML = `Description: ${description}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°C`;
    document.getElementById("weather").style.display = "block";
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  }