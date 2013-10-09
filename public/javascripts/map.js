var map,
    leafletMarkerLayer,
    markerLayer,
    markers = []


function leaflet_init() {
  "use strict"

  /* Using my own hosted Mapbox Streets Map for base layer */
  var baseMap = L.mapbox.tileLayer('smk.map-0ek7rfrq')
  map = L.mapbox.map('map', baseMap, {
    center: [32.80, -86.71],
    zoom: r
  })

  /* Mapbox markers API */
//  markerLayer = L.mapbox.markerLayer(geojson)
//    // hide all markers
//    .setFilter(function(f) { return f.properties.id != 'cover'; })
//    .addTo(map);
//
//  markerLayer.eachLayer(function(layer) {
//    var content = '<h1>' + layer.feature.properties.name + '<\/h1>' +
//        '<h2>' + layer.feature.properties.neighborhood + '<\/h2>';
//    layer.bindPopup(content);
//  });


  /* Add the coffee shops geoJSON via Leaflet */
  // Need to use L.divIcon to set the class names on the marker elements, since
  // there's no factory() method in mapbox.js > v0.6.7.
  // leafletMarkerLayer = L.geoJson(geojson, {
  //    pointToLayer: pointToLayer
//     onEachFeature: onEachFeature
   // })

  map.addLayer(baseMap)
  // map.addLayer(leafletMarkerLayer)
}




