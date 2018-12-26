import Map from './../classes/classMap.js';
import infoMap from './../constans/map.json';

export default function createMap(container, style, width, height, zoom = 1, center){
    mapboxgl.accessToken = infoMap.token;
    const map = new Map(container, style, width, height, zoom, center);
    map.init();
    map.setSize();
}