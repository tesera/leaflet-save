(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['leaflet'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
        // Browser globals
        if (typeof window.L === 'undefined') {
            throw new Error('Leaflet must be loaded first');
        }
        factory(window.L);
    }
}(function (L) {
    var SaveMapMixin = {
        save: function () {
            var center = this.getCenter();
            var bounds = this.getBounds();
            var mapState = {
              zoom: this.getZoom(),
              center: [center.lat, center.lng],
              bounds: [
                [bounds.getNorth(), bounds.getWest()],
                [bounds.getSouth(), bounds.getEast()]
              ],
              layers: []
            };
            this.eachLayer(function (layer) {  //this or map or L.map?
                var l = {}
                if (layer instanceof L.TileLayer.WMS) {
                    l.type = 'TileLayer.wms'
                    l.url = layer.url
                    l.options = layer.options
                    mapState.layers.push(l)
                } else if (layer instanceof L.TileLayer) {
                    l.type = 'TileLayer'
                    l.url = layer.url
                    l.options = layer.options
                    mapState.layers.push(l)
                }
            })

            return mapState
        }
    };

    L.Map.include(SaveMapMixin);
}));