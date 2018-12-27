export default class Map{
    constructor (id, style, zoom, center){
        this.container = id;
        this.style = style;
        this.zoom = zoom;
        this.center = center;
    }
    init(){
        return new mapboxgl.Map({
            container: this.container,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
        });
    }
}