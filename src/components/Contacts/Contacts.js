import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Contacts.css';

function Contacts ({ BiggestCompanies, center }) {

    return (
        <MapContainer center={[center.lat,center.lng]} zoom={center.zoom} scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />

            {BiggestCompanies.map((item)=>(
                <Marker position={[item.lat, item.lng]} className="map-marker">
                    <Popup className="map-marker-popup">
                        <div className="map-marker-popup-body">
                            <p className="">{ item.name}</p>
                            <p className="">{item.description}</p>
                            <p className="">{item.adress}</p>
                            <p className="">{item.workingHours}</p>
                            <p className="">{item.telephone}</p>
                            <p className=""> <a href={`https://${item.website}`} target='blank'>{item.website}</a> </p> 
                        </div>
                    </Popup>
                </Marker>
            ))}        
            
        </MapContainer>
    )
}
export default Contacts;