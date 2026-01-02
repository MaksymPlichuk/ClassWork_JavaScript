const userInput = document.getElementById(`cityInput`)


document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(successPos, errorPos);
    fiveDayForecast.hidden = true;
    error404Tab.hidden = true;
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
            console.warn(`Selected`);
            console.log(item);
            const { local_names } = item;
            const { en } = local_names;
            const { country } = item;

            userInput.placeholder = `${en}, ${country}`
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
    //console.log(weatherURL);

    tHourRow.innerHTML = `<th scope="row">Today</th>`;
    tHourImg.innerHTML = `<th scope="row"></th>`;
    tHourForecast.innerHTML = `<th scope="row">Forecast</th>`;
    tHourTemp.innerHTML = `<th scope="row">Temp (℃)</th>`;
    tHourRealTemp.innerHTML = `<th scope="row">Real Feel</th>`;
    tHourWSpeed.innerHTML = `<th scope="row">Wind (km/h)</th>`

    fetch(weatherURL).then(res => res.json())
        .then(data => {
            //console.log(data)
            const listOfHours = data.list;

            for (let i = 0; i < 8; i++) {
                let hour = listOfHours[i];

                //console.log(hour);
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
const error404Tab = document.getElementById(`error404Tab`);
const error404Div = document.getElementById(`error404Div`);

function loadTodayForecastHandle() {
    mainBody.hidden = false;
    fiveDayForecast.hidden = true;
    error404Tab.hidden = true;
}

function load5DayForecastHandle() {
    mainBody.hidden = true;
    fiveDayForecast.hidden = false;
    error404Tab.hidden = true;
}

let selectedDay = null;
const activeColor = "#1c93b4a1";
const noActiveColor = "lightslategray";

function display5DayForecast(lat, lon, key) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    fiveDayCards.innerHTML = ``;

    fetch(weatherURL).then(res => res.json())
        .then(data => {
            const listOfHours = data.list;

            let daysMap = {}

            for (const item of listOfHours) {
                let date = item.dt_txt.split(" ")[0]
                if (!daysMap[date]) {
                    daysMap[date] = [];
                }
                daysMap[date].push(item);
            }
            console.warn(`Five Day Forecast:`)
            console.log(daysMap)

            for (const day in daysMap) {
                let hours = daysMap[day];

                let mid = Math.floor(hours.length / 2);
                let midHour = hours[mid];

                let month = String(new Date(midHour.dt * 1000)).split(" ")[1];
                let date = String(new Date(midHour.dt * 1000)).split(" ")[2];
                let dayOfTheWeek = String(new Date(midHour.dt * 1000)).split(" ")[0];
                // console.log(hours)

                const card = document.createElement(`div`)
                card.classList.add(`mt-5`, `m-2`, `box`);

                card.innerHTML = `<p style="font-size: 36px; color: aquamarine; font-weight: bold;">${dayOfTheWeek}</p>
                            <p style="font-size: 24px;">${month} ${date}</p>
                            <img src="https://openweathermap.org/img/wn/${midHour.weather[0].icon}@2x.png" alt="weatherIcon">
                            <p style="font-size: 30px;">${midHour.main.temp}℃</p>
                            <p style="font-size: 20px;">${midHour.weather[0].description}</p>`

                card.addEventListener("click", () => {
                    setDayForecast(event, hours);
                })
                fiveDayCards.appendChild(card);

            }
        }).catch(e => console.error(e));
}

const secondTHourRow = document.getElementById(`secondTHourRow`)
const secondTHourImg = document.getElementById(`secondTHourImg`)
const secondTHourForecast = document.getElementById(`secondTHourForecast`)
const secondTHourTemp = document.getElementById(`secondTHourTemp`)
const secondTHourRealTemp = document.getElementById(`secondTHourRealTemp`)
const secondTHourWSpeed = document.getElementById(`secondTHourWSpeed`)


function setDayForecast(event, hours) {

    if (selectedDay) {
        selectedDay.style.backgroundColor = noActiveColor;
    }
    selectedDay = event.currentTarget;
    selectedDay.style.backgroundColor = activeColor;

    secondTHourRow.innerHTML = `<th scope="row">Today</th>`;
    secondTHourImg.innerHTML = `<th scope="row"></th>`;
    secondTHourForecast.innerHTML = `<th scope="row">Forecast</th>`;
    secondTHourTemp.innerHTML = `<th scope="row">Temp (℃)</th>`;
    secondTHourRealTemp.innerHTML = `<th scope="row">Real Feel</th>`;
    secondTHourWSpeed.innerHTML = `<th scope="row">Wind (km/h)</th>`


    for (let i = 0; i < hours.length; i++) {
        let hour = hours[i];

        let date = new Date(hour.dt * 1000);
        let windDirection = calculateWindDirection(hour.wind.deg)

        secondTHourRow.innerHTML += `<td>${date.getHours()}:00</td>`;
        secondTHourImg.innerHTML += `<td><img src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="${hour.weather[0].main}"></td>`;
        secondTHourForecast.innerHTML += `<td>${hour.weather[0].main}</td>`;
        secondTHourTemp.innerHTML += `<td>${hour.main.temp}°</td>`;
        secondTHourRealTemp.innerHTML += `<td>${hour.main.feels_like}°</td>`;
        secondTHourWSpeed.innerHTML += `<td>${hour.wind.speed} ${windDirection}</td>`;
    }

}

function submtiFormHandle(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    let input = values.city;


    let cityCountry = input.split(", ")
    if (cityCountry.length < 2 || cityCountry.length > 2) {
        event.target.reset();
        mainBody.hidden = true;
        fiveDayForecast.hidden = true;
        error404Tab.hidden = false;

        error404Div.innerHTML = `<img class="text-center m-auto mt-5" height="150px" width="150px" src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png" alt="eror404">
                <p class="m-auto" >'${input}' has not been found. Please follow this input type: [city], [Country]</p>
                <p class="m-auto text-center mb-5" >Where [city] is City name. [Country] is Country name, 2-letter ISO country code, or 3-letter ISO country code.</p>`        
        
        alert("Input type must be: Anchorage, US")
    }


    const key = `ABzl3qj6PYdYlwONSdu26A==0RYMDHOpg0P8zdUN`
    const url = `https://api.api-ninjas.com/v1/geocoding?city=${cityCountry[0]}&country=${cityCountry[1]}&X-Api-Key=${key}`

    fetch(url).then(res => res.json()).then(data => {

        let city = data[0];
        let { latitude, longitude } = city;

        // console.warn(`Success selected city:`);
        // console.log(city);

        event.target.reset();
        setUserCity(latitude, longitude);

    }).catch(err => console.warn(err))


}