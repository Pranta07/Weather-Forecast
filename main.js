// default weather
const url = `https://api.openweathermap.org/data/2.5/weather?q=Chittagong&units=metric&appid=7a4e4161428809308140f56f37945c5c`;
fetch(url)
    .then((res) => res.json())
    .then((data) => displayInfo(data));

// load data after search
const button = document.getElementById("button-search");
button.addEventListener("click", () => {
    document.getElementById("error-msg").classList.add("d-none"); //hide error message
    document.getElementById("weather").innerHTML = ""; //clears previous search result
    document.getElementById("spinner").classList.remove("d-none");

    const inputField = document.getElementById("inputField");
    const inputText = inputField.value;
    inputField.value = "";
    // fetch data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=7a4e4161428809308140f56f37945c5c`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayInfo(data));
});

const displayInfo = (data) => {
    document.getElementById("spinner").classList.add("d-none");
    if (data.cod == 200) {
        const iconId = data.weather[0].icon;
        const name = data.name;
        const weatherCondition = data.weather[0].main;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;

        const weatherDiv = document.getElementById("weather");
        weatherDiv.innerHTML = `
            <div class="">
                <img src="http://openweathermap.org/img/wn/${iconId}@2x.png" alt="" />
                <h1 class="fs-1 fw-bolder">${name}</h1>
                <h4 class="fw-bold"><span class="text-warning">${temp}&deg;C</span>, Feels like <span class="text-danger">${feelsLike}&deg;C</span></h4>
                <h3 class="fw-light">${weatherCondition}</h3>
            </div>
        `;
    } else {
        document.getElementById("error-msg").classList.remove("d-none");
    }
};
