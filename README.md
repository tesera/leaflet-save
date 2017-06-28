
A leaflet plugin that provides hooks to save the map state as JSON, as well as to load a saved map state from JSON.

```js
    var state = map.save();
    // post state to an endpoint
    // http.post(mapState);

    // save state to local storage
    // localStorage.set('map', mapState);

    console.log(state);
```


```js
    var json = {
        //some json here...
    }
    map.load(json);
```


```json
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
```
A leaflet plugin that provides hooks to save the map state as JSON, as well as to load a saved map state from JSON.

```js
    var state = map.save();
    // post state to an endpoint
    // http.post(mapState);

    // save state to local storage
    // localStorage.set('map', mapState);

    console.log(state);
```


```js
    var json = {
        //some json here...
    }
    map.load(json);
```


```json
{
    "zoom": "number",
    "center": ["lat", "lng"],
    "bounds": [["northEastLat", "northEastLng"], ["southWestLat", "southWestLng"]],
    "IDs": [
        90,
        89,
        91,
        92,
        93,
        94,
        95,
        102,
        119
    ],
    "zoom": 12,
    "center": [
        51.49859141231831,
        -0.08668899536132812
    ],
    "bounds": [
        [
            51.59754765771458,
            -0.17200469970703128
        ],
        [
            51.39941984883338,
            -0.001373291015625
        ]
    ],
    "layers": [
        {
            "type": "TileLayer|TileLayer.WMS|FeatureGroup",
            "url": "http://...",
            "options": {},
            "basemap": "true|false"
            "type": "FeatureGroup",
            "leafletId": 90,
            "options": {},
            "contents": 6,
            "features": [
                {
                    "type": "Marker",
                    "leafletId": 89,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -0.09,
                                51.5
                            ]
                        }
                    },
                    "options": {}
                },
                {
                    "type": "Circle",
                    "leafletId": 91,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -0.11,
                                51.508
                            ]
                        }
                    },
                    "options": {
                        "color": "red",
                        "fillColor": "#f03",
                        "fillOpacity": 0.5,
                        "radius": 500
                    }
                },
                {
                    "type": "Polygon",
                    "leafletId": 92,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -0.08,
                                        51.509
                                    ],
                                    [
                                        -0.06,
                                        51.503
                                    ],
                                    [
                                        -0.047,
                                        51.51
                                    ],
                                    [
                                        -0.08,
                                        51.509
                                    ]
                                ]
                            ]
                        }
                    },
                    "options": {}
                },
                {
                    "type": "Rectangle",
                    "leafletId": 93,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    [
                                        -5.767822,
                                        54.559322
                                    ],
                                    [
                                        -5.767822,
                                        56.1210604
                                    ],
                                    [
                                        -3.02124,
                                        56.1210604
                                    ],
                                    [
                                        -3.02124,
                                        54.559322
                                    ],
                                    [
                                        -5.767822,
                                        54.559322
                                    ]
                                ]
                            ]
                        }
                    },
                    "options": {
                        "color": "#ff7800",
                        "weight": 1
                    }
                },
                {
                    "type": "CircleMarker",
                    "leafletId": 94,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -0.1,
                                51.55
                            ]
                        }
                    },
                    "options": {
                        "color": "crimson",
                        "fillColor": "magenta",
                        "fillOpacity": 0.5,
                        "radius": 40
                    }
                },
                {
                    "type": "Polyline",
                    "leafletId": 95,
                    "geoJSON": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [
                                    -30.43,
                                    57.77
                                ],
                                [
                                    -1,
                                    65.04
                                ],
                                [
                                    43,
                                    34
                                ],
                                [
                                    0,
                                    34
                                ],
                                [
                                    -33,
                                    50
                                ]
                            ]
                        }
                    },
                    "options": {
                        "color": "crimson"
                    }
                }
            ]
        },
        {
            "type": "TileLayer",
            "leafletId": 102,
            "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "options": {
                "maxZoom": 18,
                "attribution": "Map data © OpenStreetMap contributors",
                "subdomains": [
                    "a",
                    "b",
                    "c"
                ]
            }
        },
        {
            "type": "TileLayer.wms",
            "leafletId": 119,
            "url": "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
            "options": {
                "layers": "nexrad-n0r-900913",
                "format": "image/png",
                "transparent": true,
                "attribution": "Weather data © 2012 IEM Nexrad"
            }
        }
    ]
}
```