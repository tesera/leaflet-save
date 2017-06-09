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
    var ReadMapMixin = {
        load: function (json) {
            this.eachLayer(function (layer) {
                layer.removeFrom(map)
            });
            var mapState = json
            var bounds = [
                [mapState.bounds[0][0], mapState.bounds[0][1]],
                [mapState.bounds[1][0], mapState.bounds[1][1]]
            ]
            this.setView([mapState.center[0], mapState.center[1]], mapState.zoom).fitBounds(bounds);
            var layers = mapState.layers
            layers.forEach(function (layer) {
                if (layer.geoJSON) {
                    var latlngs = layer.geoJSON.geometry.coordinates;
                    var geoJSON = layer.geoJSON;
                }
                switch (layer.type) {
                    case "TileLayer":
                        L.tileLayer(layer.url, layer.options).addTo(map)
                        break;
                    case "TileLayer.wms":
                        L.tileLayer.wms(layer.url, layer.options).addTo(map);
                        break;
                    case "FeatureGroup":
                        var features = layer.features
                        var groupOfFeatures = []
                        features.forEach(function (layer) {
                            switch (layer.type) {
                                case "Polyline":
                                    var coords = layer.geoJSON.geometry.coordinates
                                    var latlngs = L.GeoJSON.coordsToLatLngs(coords, 0)
                                    groupOfFeatures.push(L.polyline(latlngs, layer.options))
                                    break
                                case "Polygon":
                                    var array = layer.geoJSON.geometry.coordinates[0]
                                    var filteredArray = array.slice(0, array.length - 1 )
                                    var reversedArray = []
                                    filteredArray.forEach(function (item) {
                                        item.reverse();
                                        reversedArray.push(item)
                                    })
                                    groupOfFeatures.push(L.polygon(reversedArray, layer.options))
                                    break
                                case "Rectangle":
                                    var coords = layer.geoJSON.geometry.coordinates
                                    var bounds = L.GeoJSON.coordsToLatLngs(coords, 1)
                                    groupOfFeatures.push(L.rectangle(bounds, layer.options))
                                    break
                                case "Circle":
                                    var lat = layer.geoJSON.geometry.coordinates[1]
                                    var lng = layer.geoJSON.geometry.coordinates[0]
                                    var latlngs = [lat, lng]
                                    groupOfFeatures.push(L.circle(latlngs, layer.options))
                                    break
                                case "CircleMarker":
                                    var coords = layer.geoJSON.geometry.coordinates
                                    var latlngs = L.GeoJSON.coordsToLatLng(coords)
                                    groupOfFeatures.push(L.circleMarker(latlngs, layer.options))
                                    break
                                case "Marker":
                                    var lat = layer.geoJSON.geometry.coordinates[1]
                                    var lng = layer.geoJSON.geometry.coordinates[0]
                                    var latlngs = [lat, lng]
                                    groupOfFeatures.push(L.marker(latlngs, layer.options))
                                    break
                            }
                        })
                        L.featureGroup(groupOfFeatures).addTo(map)
                        break;
                    default:
                        L.geoJSON(geoJSON, options).addTo(map)
                        break;
                }
            })
        }
    }
    L.Map.include(ReadMapMixin);
}));