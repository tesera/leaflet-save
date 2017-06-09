# leaflet-save
A leaflet plugin that provides a hook to save the map state as JSON.

    var state = map.save();



    {
        "zoom": "number",
        "center": ["lat", "lng"],
        "bounds": [["northEastLat", "northEastLng"], ["southWestLat", "southWestLng"]],
        "layers": [
            {
                "type": "TileLayer|TileLayer.WMS|FeatureGroup",
                "url": "http://...",
                "options": {},
                "basemap": "true|false"
            }
        ]
    }
