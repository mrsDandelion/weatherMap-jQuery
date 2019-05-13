import axios from "axios";
import infoWeather from "../constans/weather";
import createDays from './../view/createDays.js'
import createMap from "./createMap.js";

export default function getInfoUsingName(nameCity) {
    var select, wrapperDays, textInput, wrapperCheckbox, response, xhr, map;

    select = document.querySelector('.styleMap select');
    wrapperDays = document.querySelector('.wrapperDays');
    textInput = document.querySelector('.wrapperInputText input');
    wrapperCheckbox = document.querySelector('.wrapperCheckbox');

    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=' + nameCity + '&appid=' + infoWeather.appId, false);
    xhr.send();
    if (xhr.status === 200) {
        response = JSON.parse(xhr.response);
        textInput.setAttribute("data-value", true);
        map = document.getElementById('map');
        map.innerHTML = '';
        wrapperDays.innerHTML = '';
        createMap('map', select.value, 12, [response.city.coord.lon, response.city.coord.lat]);
        createDays(wrapperCheckbox, wrapperDays, response.list);
    } else {
        if(nameCity) {
            textInput.setAttribute("data-value", false);
            wrapperDays.innerHTML = '';
        } else {
            createMap('map', select.value);
        }
    }
}