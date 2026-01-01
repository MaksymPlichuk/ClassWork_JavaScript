const userInput = document.getElementById(`cityInput`)
const tableForecast = document.getElementById(`tableForecast`)

document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition(successPos, errorPos);
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

    displayDayForecast(lat, lon, key)
}

function displayDayForecast(lat, lon, key) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    console.log(weatherURL);

    tableForecast.innerHTML = ` <tr class="table-dark">
                        <th scope="row">Today</th>`

    fetch(weatherURL).then(res => res.json())
        .then(data => {
            console.log(data)
            const listOfHours = data.list;

            for (let i = 0; i < 8; i++) {
                let hour = listOfHours[i];
                console.log(hour);
                let date = new Date(hour.dt * 1000);

                tableForecast.innerHTML += `<td>${date.getHours()}</td>`
            }
            tableForecast.innerHTML += `</tr>
                                        <tr class="table-light">
                                        <th scope="row"></th>`

        })
    tableForecast.innerHTML = `<tr class="table-dark">
                        <th scope="row">Today</th>
                        <td>7pm</td>
                        <td>8pm</td>
                        <td>10pm</td>
                    </tr>              
                    <tr class="table-light">
                        <th scope="row"></th>
                        <td><img src="" alt="sunny"></td>
                        <td><img src="" alt="sunny"></td>
                        <td><img src="" alt="moon"></td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Forecast</th>
                        <td>Sunny</td>
                        <td>sunny</td>
                        <td>Clear</td>
                    </tr>
                    <tr class="table-light">
                        <th scope="row">Temp (C)</th>
                        <td>29</td>
                        <td>27</td>
                        <td>15</td>
                    </tr>
                    <tr class="table-dark">
                        <th scope="row">Real Feel</th>
                        <td>28</td>
                        <td>26</td>
                        <td>16</td>
                    </tr>
                    <tr class="table-light">
                        <th scope="row">Wind (km/h)</th>
                        <td>11 ESE</td>
                        <td>8 ESE</td>
                        <td>16 ESE</td>
                    </tr>`
}