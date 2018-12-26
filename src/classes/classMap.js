export default class Map{
    constructor (id, style, width, height, zoom=1, center){
        this.container = id;
        this.style = style;
        this.width = width;
        this.height = height;
        this.zoom = zoom;
        this.center = center;
    }
    init(){
        return new mapboxgl.Map({
            container: this.container,
            style: this.style,
            width: this.width,
            height: this.height,
            center: this.center,
            zoom: this.zoom,
        });
    }
    setSize (height = '100vh', width = '100vw'){
        $(`#${this.container} canvas`).css({
            position: 'static',
            width: width,
            height: height
        })
    }
}