const ZOOM_INDEX = 50;
const INIT_LAT = 59.96831;
const INIT_LNG = 30.31748;
const MAP_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const PIN_WIDTH = 38;
const PIN_HEIGHT = 50;

const initMap = () => {

  const map = L.map('map')
    .setView({
      lat: INIT_LAT,
      lng: INIT_LNG,
    }, ZOOM_INDEX);

  L.tileLayer(
    MAP_TILE,
    {
      attribution: MAP_ATTRIBUTE,
    },
  ).addTo(map);

  const pinIcon = L.icon({
    iconUrl: './images/pin.svg',
    iconSize: [PIN_WIDTH, PIN_HEIGHT],
    iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
  });

  const marker = L.marker(
    {
      lat: INIT_LAT,
      lng: INIT_LNG,
    },
    {
      icon: pinIcon,
    },
  );

  marker.addTo(map);
}

export { initMap };
