import Map from './../classes/classMap.js';
import infoMap from './../constans/map.json';

export default function createMap(container, style, zoom = 1, center){
    var map;
    mapboxgl.accessToken = infoMap.token;
    map = new Map(container, style, zoom, center);
    map.init();
}