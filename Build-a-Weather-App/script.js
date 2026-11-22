
const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherResult = document.getElementById("weather-result");

// Fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Display weather data
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data || !data.main || !data.weather?.[0] || !data.wind) {
    alert("Something went wrong, please try again later");
    return;
  }

  const weather = data.weather[0];

  const icon = document.getElementById("weather-icon");

  if (weather.icon !== undefined) {
    icon.src = weather.icon;
  } else {
    icon.removeAttribute("src");
    icon.alt = "N/A";
  }

  document.getElementById("location").textContent =
    data.name ?? "N/A";

  document.getElementById("weather-main").textContent =
    weather.main ?? "N/A";

  document.getElementById("main-temperature").textContent =
    data.main.temp !== undefined
      ? `${data.main.temp} °C`
      : "N/A";

  document.getElementById("feels-like").textContent =
    data.main.feels_like !== undefined
      ? `${data.main.feels_like} °C`
      : "N/A";

  document.getElementById("humidity").textContent =
    data.main.humidity !== undefined
      ? `${data.main.humidity}%`
      : "N/A";

  document.getElementById("wind").textContent =
    data.wind.speed !== undefined
      ? `${data.wind.speed} m/s`
      : "N/A";

  document.getElementById("wind-gust").textContent =
    data.wind.gust !== undefined
      ? `${data.wind.gust} m/s`
      : "N/A";

  weatherResult.hidden = false;
}

// Handle button click
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) {
    return;
  }

  showWeather(city);
});

