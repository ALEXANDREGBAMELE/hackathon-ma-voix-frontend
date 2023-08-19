import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function CarteInteractif() {
    const mapCenter = [5.359951, -4.008256]; // Coordonnées du centre d'Abidjan
    const mapZoom = 12;

    // Fonction pour définir le style des polygones en fonction de la valeur
    const style = (feature) => {
        const value = feature.properties.value;
        return {
            fillColor: getColor(value),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
        };
    };

    // Fonction pour déterminer la couleur en fonction de la valeur
    const getColor = (value) => {
        return value > 20 ? "green" : value > 10 ? "orange" : "red";
    };
    return (
        <Map center={mapCenter} zoom={mapZoom} style={{ height: "500px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON data={geojsonData} style={style} />
        </Map>
    );
}
