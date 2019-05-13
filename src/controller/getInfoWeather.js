import axios from "axios";
import infoWeather from "../constans/weather";
import createDays from './../view/createDays.js'
import createMap from "./createMap.js";

export default async function getInfoUsingName(nameCity) {
    var select, wrapperDays, textInput, wrapperCheckbox;

    select = document.querySelector('.styleMap select');
    wrapperDays = document.querySelector('.wrapperDays');
    textInput = document.querySelector('.wrapperInputText input');
    wrapperCheckbox = document.querySelector('.wrapperCheckbox');

    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`)
        .then( responce => {
            textInput.setAttribute("data-value", true);
            const map = document.getElementById('map');
            map.innerHTML = '';
            wrapperDays.innerHTML = '';
            createMap('map', select.value, 12, [responce.data.city.coord.lon, responce.data.city.coord.lat]);
            createDays(wrapperCheckbox, wrapperDays, responce.data.list);
        })
        .catch(() => {
            if(nameCity) {
                textInput.setAttribute("data-value", false);
                wrapperDays.innerHTML = '';
            } else {
                createMap('map', select.value);
            }
        });
}