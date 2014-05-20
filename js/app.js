$(document).ready(function() {

  var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([18.3800, -66.1633], 12);

  var featureLayer = L.mapbox.featureLayer()
    .loadURL('http://localhost:5000/geomaticapr/api/v1.0/address')
    .addTo(map);

  map.featureLayer.on('click', function(e) {
        map.panTo(e.layer.getLatLng());
  });

  var mousemove = document.getElementById('mousemove');
  map.on('mousemove', function(e) {
    window[e.type].innerHTML = e.latlng.toString().substring(6);
  });

  featureLayer.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.featureLayer.getBounds();
  });

  $('#invid-search').click(function() {
    map.removeLayer(featureLayer);
    featureLayer = L.mapbox.featureLayer()
    .loadURL('http://localhost:5000/geomaticapr/api/v1.0/address/' + $('#invid').val())
    .addTo(map)
    map.getLatLng(featureLayer);
  });

  $("#pais").change(function() {
    map.setView([18.23196, -66.47003], 9);
  });

  $("#municipio").change(function() {
    map.setView([18.3800, -66.1633], 12);
  });
  
});

