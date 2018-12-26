import axios from "axios";
import infoWeather from "../constans/weather";
import createViewWeather from './../view/createViewWeather.js'
import createMap from "./createMap.js";

export default async function getInfoUsingName(nameCity) {
    $('.alertInfo').hide();
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`)
        .then( responce =>{
            $('#map').empty();
            const map = createMap('map', 'mapbox://styles/mapbox/dark-v9', window.innerWidth, window.innerHeight, 12, [responce.data.city.coord.lon, responce.data.city.coord.lat]);
            createViewWeather($('.wrapperDays').empty(), responce.data.list);
        })
        .catch(() => {
            $('.alertInfo').show();
        });
}