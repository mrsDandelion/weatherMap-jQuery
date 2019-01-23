import axios from "axios";
import infoWeather from "../constans/weather";
import createViewWeather from './../view/createViewWeather.js'
import createMap from "./createMap.js";

export default async function getInfoUsingName(nameCity) {
    const select = document.querySelector('.styleMap select');
    const wrapperDays = document.querySelector('.wrapperDays');
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`)
        .then( responce => {
            const map = document.getElementById('map');
            map.innerHTML = '';
            wrapperDays.innerHTML = '';
            createMap('map', select.value, 12, [responce.data.city.coord.lon, responce.data.city.coord.lat]);
            createViewWeather(wrapperDays, responce.data.list);
        })
        .catch(() => {
            if(nameCity) {
                document.querySelector('.wrapperInputText input').setAttribute("data-value", false);
                wrapperDays.innerHTML = '';
            } else {
                createMap('map', select.value);
            }
        });
}