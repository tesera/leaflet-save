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
            return {
                zoom: this.getZoom(),
                center: [center.lat, center.lng],
                bounds: [
                  [bounds.getNorth(), bounds.getWest()], 
                  [bounds.getSouth(), bounds.getEast()]
                ]
            };
        }
    };

    L.Map.include(SaveMapMixin);
}));