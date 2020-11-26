import React from 'react';
import './Contacts.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contacts ({ BiggestCompanies, center }) {
    // center: {
    //     lat: 48.920827,
    //     lng: 24.705657,
    //     zoom: 15,
    // },
    //BiggestCompanies: [
        // {
        //     name: "ItCluster",
        //     lat: 48.91942848361722,
        //     lng: 24.709772442607548,
        // },

    return (
        <MapContainer center={[center.lat,center.lng]} zoom={center.zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />

            <Marker position={[this.state.ItCluster.lat, this.state.ItCluster.lng]}>
                <Popup className="popup">
                    <div ><b>Адреса:</b> вулиця Січових стрільців, 17, Івано-Франківськ, Івано-Франківська область, 76000
                    Години роботи: 
                    Відчинено ⋅ Зачиняється: 18:00
                    Телефон: 063 674 1219
                    Зустрічі: itca.if.ua</div>
                </Popup>
            </Marker>
            
        </MapContainer>
      
    )
}
export default Contacts;