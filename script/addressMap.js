var map = L.map('map').setView([42.9837, -81.2497], 15);
var marker = L.marker([42.9837, -81.2497]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);