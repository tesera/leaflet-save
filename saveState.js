// deal with popups and tooltips.

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
                IDs: [],
                zoom: this.getZoom(),
                center: [center.lat, center.lng],
                bounds: [
                    [bounds.getNorth(), bounds.getWest()],
                    [bounds.getSouth(), bounds.getEast()]
                ],
                layers: []
            };
            this.eachLayer(function (layer) {
                var l = {}
                switch (layer.constructor) {
                    case L.FeatureGroup:
                        l.type = 'FeatureGroup'
                        l.leafletId = layer._leaflet_id
                        l.options = layer.options
                        l.contents = layer.getLayers().length
                        l.features = []
                        if (!mapState.IDs.includes(layer._leaflet_id)) {
                            mapState.IDs.push(l.leafletId);
                            mapState.layers.push(l)
                        }
                        layer.eachLayer(function (layer) {
                            var f = {}
                            switch (layer.constructor) {
                                case L.TileLayer:
                                    f.type = 'TileLayer'
                                    break
                                case L.TileLayer.WMS:
                                    f.type = 'TileLayer.wms'
                                    break
                                case L.Polyline:
                                    f.type = 'Polyline'
                                    break
                                case L.Polygon:
                                    f.type = 'Polygon'
                                    break
                                case L.Rectangle:
                                    f.type = 'Rectangle'
                                    break
                                case L.Circle:
                                    f.type = 'Circle'
                                    break
                                case L.CircleMarker:
                                    f.type = 'CircleMarker'
                                    break
                                case L.Marker:
                                    f.type = 'Marker'
                                    break
                                default:
                                    f.type = 'Feature'
                            }
                            f.leafletId = layer._leaflet_id
                            f.geoJSON = layer.toGeoJSON()
                            f.options = layer.options
                            mapState.IDs.push(f.leafletId)
                            l.features.push(f)
                        })
                        break
                }
            })
                this.eachLayer(function (layer) {
                    var idChecker = function () {
                        if (!mapState.IDs.includes(layer._leaflet_id)) {
                            mapState.IDs.push(l.leafletId);
                            mapState.layers.push(l)
                        }
                    }
                var l = {}
                switch (layer.constructor) {
                    case L.TileLayer:
                        l.type = 'TileLayer'
                        l.leafletId = layer._leaflet_id
                        l.url = layer._url
                        l.options = layer.options
                        idChecker()
                        break
                    case L.TileLayer.WMS:
                        l.type = 'TileLayer.wms'
                        l.leafletId = layer._leaflet_id
                        l.url = layer._url
                        l.options = layer.options
                        idChecker()
                        break
                    case L.Polyline:
                        l.type = 'Polyline'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                    case L.Polygon:
                        l.type = 'Polygon'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                    case L.Rectangle:
                        l.type = 'Rectangle'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                    case L.Circle:
                        l.type = 'Circle'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                    case L.CircleMarker:
                        l.type = 'CircleMarker'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                    case L.Marker:
                        l.type = 'Marker'
                        l.leafletId = layer._leaflet_id
                        l.geoJSON = layer.toGeoJSON()
                        l.options = layer.options
                        idChecker()
                        break
                }
            })
            return mapState
        }
    };
    L.Map.include(SaveMapMixin);
}));


// ========================================================================

                    // case L.Popup: // use getPopup() ?
                    //     l.type = 'Popup'
                    //     l.leafletId = layer._leaflet_id
                    //     l.options = layer.options
                    //     mapState.ids.push(l.leafletId)
                    //     mapState.layers.push(l)
                    //     break
                    // case L.Tooltip:
                    //     l.type = 'Tooltip'
                    //     l.leafletId = layer._leaflet_id
                    //     l.options = layer.options
                    //     mapState.IDs.push(l.leafletId)
                    //     mapState.layers.push(l)
                    //     break


// refactor using this:
// new L[constructor].apply(args)


                    // case L.LayerGroup:
                    //     l.type = 'LayerGroup'
                    //     l.leafletId = layer._leaflet_id
                    //     l.options = layer.options
                    //     if (!mapState.IDs.includes(layer._leaflet_id)) {
                    //         mapState.IDs.push(l.leafletId);
                    //         mapState.layers.push(l)
                    //     }
                    //     layer.eachLayer(function (layer) {
                    //         var la = {}
                            // switch (layer.constructor) {
                            //     case L.TileLayer:
                            //         la.type = 'TileLayer'
                            //         break
                            //     case L.TileLayer.WMS:
                            //         la.type = 'TileLayer.wms'
                            //         break
                            //     case L.Polyline:
                            //         la.type = 'Polyline'
                            //         break
                            //     case L.Polygon:
                            //         la.type = 'Polygon'
                            //         break
                            //     case L.Rectangle:
                            //         la.type = 'Rectangle'
                            //         break
                            //     case L.Circle:
                            //         la.type = 'Circle'
                            //         break
                            //     case L.CircleMarker:
                            //         la.type = 'CircleMarker'
                            //         break
                            //     case L.Marker:
                            //         la.type = 'Marker'
                            //         break
                            //     default: 'Layer'
                            // }
                    //         console.log(layer.getPrototypeof)
                    //         la.type = 'LayerGroup.layer'
                    //         la.leafletId = layer._leaflet_id
                    //         la.geoJSON = layer.toGeoJSON()
                    //         la.options = layer.options
                    //         mapState.IDs.push(la.leafletId)
                    //         l.layers.push(la)
                    //     })
                    //     break

                    // Constructor:
                    // case "LayerGroup":
                    //     var layers = layer.layers
                    //     var groupOfLayers = []
                    //     layers.forEach(function (layer) {
                    //         groupOfLayers.push(L.geoJSON(layer.geoJSON, layer.options)) // do regular layers require L.geoJSON()?
                    //     })
                    //     L.LayerGroup(groupOfLayers).addTo(map)
                    //     break
