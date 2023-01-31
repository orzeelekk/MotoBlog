import React, { useEffect, useState } from 'react';

const API_key = "dad69a5e01ddbe2e693acdd610cf1fd8";

const WeatherApi = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Dubrownik");

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const getData = (city_name) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=${API_key}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .then(result => {
                setData(result);
                console.log(result);
            })
            .catch(err => {
                console.log('Błąd', err);
            })
    }

    useEffect(() => {
        getData(city);
    }, [city]);

    if (!data) return <p>Trwa ładowanie danych</p>

    return <div>
        <select value={city} onChange={handleCityChange} className="button-option blog_header_select">
            <option value="Dubrownik">Dubrownik</option>
            <option value="Makarska">Makarska</option>
            <option value="Split">Split</option>
            <option value="Zadar">Zadar</option>
            <option value="Rijeka">Rijeka</option>
            <option value="Zagrzeb">Zagrzeb</option>
            <option value="Warszawa">Warszawa(dla porównania :))</option>
        </select>
        <ul>
            <li className="blog_header_temp">Temperatura: {data.main.temp}°C</li>
            <li className="blog_header_temp">Temperatura odczuwalna: {data.main.feels_like}°C</li>
            <li className="blog_header_temp">Wilgotność powietrza: {data.main.humidity}%</li>
            <li className="blog_header_temp">Zachmurzenie: {data.weather[0].description}</li>
        </ul>

    </div>
}

export { WeatherApi }