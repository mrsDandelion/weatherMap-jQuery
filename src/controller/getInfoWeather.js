//import axios from "axios";
import infoWeather from "../constans/weather";
import createViewWeather from './../view/createViewWeather.js'
import createMap from "./createMap.js";

export default function getInfoUsingName(nameCity) {
    const textInput = $('.wrapperInputText input');
    if(textInput.val()){
        textInput.attr( "data-value", true );
        $.ajax({
            method: "GET",
            url:`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`,
            cache: false
        })
        .done( responce =>{
            $('#map').empty();
            createMap('map', $('.styleMap select').val(), 12, [responce.city.coord.lon, responce.city.coord.lat]);
            createViewWeather($('.wrapperDays').empty(), responce.list);
        })
        .fail(() => {
            textInput.attr( "data-value", false );
            $('.wrapperDays').empty();
        });

        //await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=${infoWeather.appId}`)
        //         .then( responce =>{
        //             $('#map').empty();
        //             createMap('map', $('.styleMap select').val(), 12, [responce.data.city.coord.lon, responce.data.city.coord.lat]);
        //             createViewWeather($('.wrapperDays').empty(), responce.data.list);
        //         })
        //         .catch(() => {
        //             $('.wrapperInputText input').attr( "data-value", false );
        //         });
    }
}