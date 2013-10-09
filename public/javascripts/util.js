var fromPrototype = function(prototype, object) {
    var newObject = Object.create(prototype)
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop]
        }
    }
  return newObject
}

var MarkerFactory = {
    createMarker: function(feature, el) {
      return fromPrototype({}, {
          data: feature,
          location: function () {
            return new L.LatLng(this.data.geometry.coordinates[1], this.data.geometry.coordinates[0])
          },
          element: el

      })
    }
}

function pointToLayer(feature, latlng) {
       var className = 'spot ' + 'spot-' + feature.properties.id
       var myIcon = L.divIcon({className: className, iconSize: new L.Point(120,120)})
       marker = L.marker(latlng, {icon: myIcon})
       el = marker.addTo(map)
       markers.push(MarkerFactory.createMarker(feature, el._icon))
       return marker
 }

function onEachFeature(feature, layer) {
//   if (feature.properties && feature.properties.id) {
//     var name = feature.properties.name
//     var popupContent = '<b>' + name + '</b></br>' + feature.properties.address + '</br>'
//                        + 'Neighborhood: ' + feature.properties.neighborhood + '</br>'
//     layer.bindPopup(popupContent)
//   }

}
