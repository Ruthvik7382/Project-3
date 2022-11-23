function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: -37.819954, lng: 144.983398},
    gestureHandling: "none",
    zoomControl: false,
    scaleControl: true,
  });
  
  var marker = new google.maps.Marker({
    position: { lat: -37.819954, lng: 144.983398 },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"My Favourite Cricket Ground"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;