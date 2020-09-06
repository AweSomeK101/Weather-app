"use strict";

var apiKey = '64a446d2b608412d8b80105e50bda035';

document.getElementById('search').addEventListener('submit', weather)

function we(city) {

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=1&key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            weatherData(data);
            toggle();
        })
        .catch(err => console.log(err));
}

function weatherData(e) {
    document.querySelector(".img").style.backgroundImage = `url("./icons/${e.data[0].weather.icon}.png")`;
    document.getElementById('temp').innerHTML = `${e.data[0].temp}&deg C`;
    document.getElementById('humidity').innerHTML = `HUMIDITY : ${e.data[0].rh}%`;
    document.getElementById('pre').innerHTML = `PRECEPITATION : ${e.data[0].pop}%`;
    document.getElementById('cloud').innerHTML = `CLOUD COVER : ${e.data[0].clouds}%`;
    document.getElementById('location').innerHTML = `${e.city_name}, ${e.country_code}`;
    var date = new Date();
    document.getElementById('date').innerHTML = `${date.toDateString()}`;

}

function toggle() {
    document.querySelector('.search').classList.toggle('hidden');
    document.querySelector('.card').classList.toggle('hidden');
}

function weather(e) {
    e.preventDefault();
    var city = document.getElementById('cityVal').value;
    we(city);
    document.getElementById('search').reset();
}