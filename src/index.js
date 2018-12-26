import createMap from './controller/createMap';
import getInfoUsingName from './controller/getInfoWeather';
import "./style.css";

createMap('map', 'mapbox://styles/mapbox/dark-v9', window.innerWidth, window.innerHeight);

$('.alertInfo').hide();

$('.containerInfo input').on('change', function(){
   getInfoUsingName($(this).val());
})
