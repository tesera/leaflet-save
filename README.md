# leaflet-save
A leaflet plugin that provides a hook to save the map state as JSON.


```js
map.save(function (mapState) {
    // post state to an endpoint
    // http.post(mapState);

    // save state to local storage
    // localStorage.set('map', mapState);

    console.log(mapState);
});
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
