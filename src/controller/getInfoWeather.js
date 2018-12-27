import axios from "axios";
import infoWeather from "../constans/weather";
import createViewWeather from './../view/createViewWeather.js'
import createMap from "./createMap.js";

export default async function getInfoUsingName(nameCity) {
    $('.wrapperInputText input').data( "value", "true" );
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`)
        .then( responce =>{
            $('#map').empty();
            createMap('map', $('.styleMap select').val(), 12, [responce.data.city.coord.lon, responce.data.city.coord.lat]);
            createViewWeather($('.wrapperDays').empty(), responce.data.list);
        })
        .catch(() => {
            $('.wrapperInputText input').data( "value", "false" );
        });
}