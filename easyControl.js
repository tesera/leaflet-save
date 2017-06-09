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
    L.Control.EasyControl = L.Control.extend({
        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control-easycontrol-bar leaflet-bar leaflet-control');

            this.link = L.DomUtil.create('a', 'leaflet-control-easycontrol leaflet-bar-part', container);
            this.link.innerText = this.options.label;
            this.link.href = '#';

            this._map = map;

            L.DomEvent.on(this.link, 'click', this._clickHandler, this);

            return container;
        },

        _clickHandler: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.options.onClick(this._map);
        }
    });

    L.Control.easyControl = function (options) {
        return new L.Control.EasyControl(options);
    };
}));