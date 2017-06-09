# leaflet-save
A leaflet plugin that provides a hook to save the map state as JSON.

```js
    var state = map.save();
    // post state to an endpoint
    // http.post(mapState);

    // save state to local storage
    // localStorage.set('map', mapState);

    console.log(state);
```


```json
{
    "zoom": 2,
    "center": [
        0,
        0
    ],
    "bounds": [
        [
            84.33698037639608,
            -114.25781250000001
        ],
        [
            -84.33698037639608,
            114.60937500000001
        ]
    ],
    "layers": [
        {
            "type": "TileLayer",
            "options": {
                "maxZoom": 18,
                "attribution": "Map data © OpenStreetMap contributors",
                "subdomains": [
                    "a",
                    "b",
                    "c"
                ]
            }
        }
    ]
}
```