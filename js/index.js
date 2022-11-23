function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 16.648169, lng: 80.615398},
    gestureHandling: "none",
    zoomControl: false,
    scaleControl: true,
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 16.648169, lng: 80.615398 },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"Village Home"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;