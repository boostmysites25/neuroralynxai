import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const MapComponent = () => {
  const position = [12.960951, 77.648331];

  return (
    <div
      className="w-full h-full relative rounded-lg overflow-hidden z-30"
      data-aos="fade-left"
    >
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            Unit 101, Oxford Towers<br />
            139, HAL Old Airport Rd<br />
            Kodihalli, Bengaluru, Karnataka 560008
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute top-2 left-2 bg-white text-black text-xs p-1 rounded">
        12°57'39.4"N 77°38'54.0"E
        <br />
        Kodihalli, Bengaluru, Karnataka 560008
        <br />
        <a href="https://www.google.com/maps/search/Unit+101,+Oxford+Towers,+139,+HAL+Old+Airport+Rd,+Kodihalli,+Bengaluru,+Karnataka+560008" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          View larger map
        </a>
      </div>
    </div>
  );
};

export default MapComponent;
