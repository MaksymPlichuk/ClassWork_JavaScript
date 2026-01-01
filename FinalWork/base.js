const userInput = document.getElementById(`cityInput`)


document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(successPos, errorPos);
    fiveDayForecast.hidden = true;
})

function successPos(position) {
    const { latitude, longitude } = position.coords;
    setUserCity(latitude, longitude);
    console.log(latitude, longitude);
}

function errorPos() {
    const url = "http://ip-api.com/json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data;
            //console.log(data)
            setUserCity(lat, lon);
        })
        .catch(err => console.error(err));
}

function setUserCity(lat, lon) {
    const key = "90d96263b78ce649b2e228baa25694f2";
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${key}`;

    fetch(url).then(response => response.json())
        .then(data => {
            //console.log(lat, lon);
            const item = data[0];
            //console.log(item);
            const { local_names } = item;
            const { uk } = local_names;
            const { country } = item;

            userInput.placeholder = `${uk}, ${country}`
        })
        .catch(err => console.error(err));

    displayDayForecast(lat, lon, key);
    displayCurrentWeather(lat, lon, key);
    display5DayForecast(lat, lon, key);
}

const tHourRow = document.getElementById(`tHourRow`)
const tHourImg = document.getElementById(`tHourImg`)
const tHourForecast = document.getElementById(`tHourForecast`)
const tHourTemp = document.getElementById(`tHourTemp`)
const tHourRealTemp = document.getElementById(`tHourRealTemp`)
const tHourWSpeed = document.getElementById(`tHourWSpeed`)

function displayDayForecast(lat, lon, key) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    console.log(weatherURL);

    tHourRow.innerHTML = `<th scope="row">Today</th>`;
    tHourImg.innerHTML = `<th scope="row"></th>`;
    tHourForecast.innerHTML = `<th scope="row">Forecast</th>`;
    tHourTemp.innerHTML = `<th scope="row">Temp (℃)</th>`;
    tHourRealTemp.innerHTML = `<th scope="row">Real Feel</th>`;
    tHourWSpeed.innerHTML = `<th scope="row">Wind (km/h)</th>`

    fetch(weatherURL).then(res => res.json())
        .then(data => {
            console.log(data)
            const listOfHours = data.list;

            for (let i = 0; i < 8; i++) {
                let hour = listOfHours[i];

                console.log(hour);
                let date = new Date(hour.dt * 1000);
                let windDirection = calculateWindDirection(hour.wind.deg)

                tHourRow.innerHTML += `<td>${date.getHours()}:00</td>`;
                tHourImg.innerHTML += `<td><img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="${hour.weather[0].main}"></td>`;
                tHourForecast.innerHTML += `<td>${hour.weather[0].main}</td>`;
                tHourTemp.innerHTML += `<td>${hour.main.temp}°</td>`;
                tHourRealTemp.innerHTML += `<td>${hour.main.feels_like}°</td>`;
                tHourWSpeed.innerHTML += `<td>${hour.wind.speed} ${windDirection}</td>`;
            }

        }).catch(e => console.error(e));
}

function calculateWindDirection(deg) {
    if (deg > 0 && deg < 90) return `NE`;
    if (deg === 0) return `E`;
    if (deg === 90) return `N`;
    if (deg > 90 && deg < 180) return `NW`;
    if (deg === 180) return `W`;
    if (deg > 180 && deg < 210) return `SW`;
    if (deg === 210) return `S`;
    if (deg > 210 && deg < 360) return `SE`;

}

const currentDate = document.getElementById(`currentDate`);
const curStatusIcon = document.getElementById(`curStatusIcon`);
const curTemp = document.getElementById(`curTemp`);
const curRiseSet = document.getElementById(`curRiseSet`);

function displayCurrentWeather(lat, lon, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

    fetch(url).then(res => res.json()).then(data => {
        let sunriseTime = new Date(data.sys.sunrise * 1000)
        let sunsetTime = new Date(data.sys.sunset * 1000)

        let today = new Date();
        let y = today.getFullYear();
        let m = String(today.getMonth() + 1).padStart(2, '0');
        let d = String(today.getDate()).padStart(2, '0');

        currentDate.innerHTML = `${d}.${m}.${y}`;
        curStatusIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weatherIcon">
                                <p>${data.weather[0].main}</p>`;
        curTemp.innerHTML = `<p style="font-size: 48px;">${data.main.temp}℃</p>
                             <p>Real Feel ${data.main.feels_like} ℃</p>`;
        curRiseSet.innerHTML = `<div class="d-flex">
                <p class="mx-2">Sunrise:</p>
                <p>${sunriseTime.getHours()}:${sunriseTime.getMinutes()}</p>
            </div>
            <div class="d-flex">
                <p class="mx-2">Sunset:</p>
                <p>${sunsetTime.getHours()}:${sunsetTime.getMinutes()}</p>
            </div>
            <div class="d-flex">
                <p class="mx-2">Duration:</p>
                <p>${sunsetTime.getHours() - sunriseTime.getHours()}:${String(sunsetTime.getMinutes() - sunriseTime.getMinutes()).padStart(2, '0')} hr</p>`

    }).catch(e => console.error(e))

}

const mainBody = document.getElementById(`mainBody`);
const fiveDayForecast = document.getElementById(`fiveDayForecast`);
const fiveDayCards = document.getElementById(`fiveDayCards`);

function loadTodayForecastHandle() {
    mainBody.hidden = false;
    fiveDayForecast.hidden = true;
}

function load5DayForecastHandle() {
    mainBody.hidden = true;
    fiveDayForecast.hidden = false;
}

function display5DayForecast(lat, lon, key) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    fiveDayCards.innerHTML = ``
    // <div class="mt-5 m-3" style="background-color: lightslategray; padding: 15px;">
    //             <p style="font-size: 32px;">TONIGHTH</p>
    //             <p>JUN 30</p>
    //             <img src="" alt="moon">
    //             <p style="font-size: 48px;">25℃</p>
    //             <p>short, desc</p>
    //         </div>
    
    fetch(weatherURL).then(res => res.json())
        .then(data => {
            const listOfHours = data.list;

            for (let i = 0; i < 40; i+=8) {
                let hour = listOfHours[i];

                console.warn(hour);
                let date = new Date(hour.dt * 1000);
                let windDirection = calculateWindDirection(hour.wind.deg)

                tHourRow.innerHTML += `<td>${date.getHours()}:00</td>`;
                tHourImg.innerHTML += `<td><img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="${hour.weather[0].main}"></td>`;
                tHourForecast.innerHTML += `<td>${hour.weather[0].main}</td>`;
                tHourTemp.innerHTML += `<td>${hour.main.temp}°</td>`;
                tHourRealTemp.innerHTML += `<td>${hour.main.feels_like}°</td>`;
                tHourWSpeed.innerHTML += `<td>${hour.wind.speed} ${windDirection}</td>`;
            }

        }).catch(e => console.error(e));
}