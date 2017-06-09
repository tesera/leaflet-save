# leaflet-save
A leaflet plugin that provides a hook to save the map state as JSON.
The current, basic implementation simply pretty-prints JSON to the screen.


## Usage

    var state = map.save();
    document.getElementById('state').innerHTML = JSON.stringify(state, null, '\t')
