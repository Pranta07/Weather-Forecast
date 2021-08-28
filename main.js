const button = document.getElementById("button-search");
button.addEventListener("click", () => {
    const inputField = document.getElementById("inputField");
    const inputText = inputField.value;
    inputField.value = "";
    // console.log(inputText);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=7a4e4161428809308140f56f37945c5c`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
});
