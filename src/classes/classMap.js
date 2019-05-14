function Map (id, style, zoom, center){
    this.container = id;
    this.style = style;
    this.zoom = zoom;
    this.center = center;
}

Map.prototype.createControl = function(){
    return new mapboxgl.NavigationControl();
}

Map.prototype.createMap = function(){
    return new mapboxgl.Map({
        container: this.container,
        style: this.style,
        center: this.center,
        zoom: this.zoom,
    })
}

Map.prototype.init = function(){
    var control, map;
    console.log(this);
    control = this.createControl();
    map = this.createMap();
    map.addControl(control, 'top-right');
    return map;
};

function myMap (){
    Map.apply(this, arguments);
}

myMap.prototype = Object.create(Map.prototype);
myMap.prototype.constructor = myMap;

export default myMap;
