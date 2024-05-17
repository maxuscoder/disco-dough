import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { getAddress } from "../services/apiGeocoding";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import countryCodeEmoji from "../services/countryCodeEmoji";

const restaurantLocations = [
  [38.9072, -77.0369], //washington
  [-33.9221, 18.4231], // cape town
  [30.0444, 31.2357], //cairo
  [45.4201, -75.7003], //ottawa
  [52.3676, 4.9041], //amsterdam
  [46.770439, 23.591423],
  [45.764, 4.8357],
  [45.2543, 30.2045],
  [-32.9587, -60.693],
  [34.0549, -118.2426],
];

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const locationPromises = restaurantLocations.map(async (coords) => {
        const address = await getAddress({
          latitude: coords[0],
          longitude: coords[1],
        });
        return { coords, address };
      });

      const locationsWithAddresses = await Promise.all(locationPromises);
      setLocations(locationsWithAddresses);
    };

    fetchAddresses();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker key={index} position={location.coords}>
            <Popup>
              {location.address.countryName || "Unknown country"},{" "}
              {location.address.city || "Unknown city"},{" "}
              {location.address.countryCode
                ? countryCodeEmoji(location.address.countryCode)
                : "Unknown flag"}
              <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Locations;
