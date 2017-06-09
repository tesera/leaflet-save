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
    "zoom": 4,
    "center": [
        46.07323062540835,
        -99.27246093750001
    ],
    "bounds": [
        [
            68.46379955520322,
            -127.88085937500001
        ],
        [
            8.928487062665504,
            -70.66406250000001
        ]
    ]
}
```