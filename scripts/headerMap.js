function initMap() {
  const coordinates = { lat: 50.016877, lng: 20.982014 };
  const map = new google.maps.Map(document.getElementById('contactMap'), {
    zoom: 18,
    center: coordinates
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map
  });
}
