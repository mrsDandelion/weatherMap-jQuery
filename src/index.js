import createMap from './controller/createMap';
import getInfoUsingName from './controller/getInfoWeather';
import "./style.css";

var select, textInput;

select = document.querySelector('.styleMap select');
textInput = document.querySelector('.containerInfo input');

createMap('map', select.value);

textInput.addEventListener('change', (event)=>{
    getInfoUsingName(event.target.value);
});

select.addEventListener('change', ()=>{
    getInfoUsingName(textInput.value);
});