import createMap from './controller/createMap';
import getInfoUsingName from './controller/getInfoWeather';
import "./style.css";

createMap('map', $('.styleMap select').val());

$('.alertInfo').hide();

$('.containerInfo input').on('change', function(){
   getInfoUsingName($(this).val());
});

$('.styleMap select').on('change', function(){
    createMap('map', $(this).val());
});