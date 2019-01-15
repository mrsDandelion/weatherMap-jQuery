import createMap from './controller/createMap';
import getInfoUsingName from './controller/getInfoWeather';
import "./style.css";

createMap('map', $('.styleMap select').val());

$('.containerInfo input').on('change', function(){
   getInfoUsingName($(this).val());
});

$('.styleMap select').on('change', function(){
    getInfoUsingName($('.containerInfo input').val());
});