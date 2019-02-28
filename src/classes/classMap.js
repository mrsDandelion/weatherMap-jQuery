export default class Map{
    constructor (id, style, zoom, center){
        this.container = id;
        this.style = style;
        this.zoom = zoom;
        this.center = center;
    }
    init(){
        const control = new mapboxgl.NavigationControl();
        const map =  new mapboxgl.Map({
            container: this.container,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
        });
        map.addControl(control, 'top-right');
        return map;
    }
}