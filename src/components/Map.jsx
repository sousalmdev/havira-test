import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const UserMap = ({ users }) => {
  return (
    <div className="py-60 flex flex-col items-center justify-center">
    <div className="bg-user w-full"><h1 className="w-full bg-black/20 backdrop-blur-sm font-semibold py-10 md:py-20 md:text-6xl text-3xl text-center text-white">
        Localização de Usuários
      </h1></div>
    <div id="mapa" className="w-full mt-32 items-center flex justify-center">
      <MapContainer center={[0, 0]} zoom={3} className="h-96 w-11/12">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {users.map((user) => (
          <Marker key={user.id} position={[user.lat, user.lng]}>
            <Popup>
              <div>
                <h3>{user.name}</h3>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Cidade:</strong> {user.city}
                </p>
                <p>
                  <strong>Rua:</strong> {user.street}
                </p>
                <p>
                  <strong>Número da Casa:</strong> {user.suite}
                </p>
                <p>
                  <strong>Código Postal:</strong> {user.zipcode}
                </p>
                <p>
                  <strong>Telefone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Site:</strong>{" "}
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </p>
                <p>
                  <strong>Empresa:</strong> {user.companyName}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div></div>
  );
};

export default UserMap;
