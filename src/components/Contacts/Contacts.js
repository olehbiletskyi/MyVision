import React from 'react';
import './Contacts.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Contacts extends React.Component {
    constructor() {
      super();
      this.state = {
          center: {
            lat: 48.920827,
            lng: 24.705657,
            zoom: 15,
          },
          ItCluster: {
            lat: 48.91942848361722,
            lng: 24.709772442607548,
          },
          SoftServe: {
            lat: 48.91444600299144,
            lng: 24.711310786787596,
          },
          Coax: {
            lat: 48.91653725017094,
            lng: 24.70209075480279,
          },
          Perfectial: {
            lat: 48.922155173444004,
            lng: 24.699701455905004,
          },
          Softjourn: {
            lat: 48.925506509980494,
            lng: 24.70576648493562,
          },
          Promprylad: {
            lat: 48.91410863349344,
            lng: 24.712133780117387,
          },
          Elex: {
            lat: 48.929817047487084,
            lng: 24.707427284741318,
          },


      };
    }

    render() {
      const centerPosition = [this.state.center.lat, this.state.center.lng];
      const zoom = this.state.center.zoom;
      return (
        <MapContainer center={centerPosition} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[this.state.ItCluster.lat, this.state.ItCluster.lng]}>
                <Popup>
                    <span>It-Cluster Academy</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.SoftServe.lat, this.state.SoftServe.lng]}>
                <Popup>
                    <span>SoftServe</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.Coax.lat, this.state.Coax.lng]}>
                <Popup>
                    <span>Coax</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.Perfectial.lat, this.state.Perfectial.lng]}>
                <Popup>
                    <span>Perfectial</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.Softjourn.lat, this.state.Softjourn.lng]}>
                <Popup>
                    <span>Softjourn</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.Promprylad.lat, this.state.Promprylad.lng]}>
                <Popup>
                    <span>Promprylad</span>
                </Popup>
            </Marker>
            <Marker position={[this.state.Elex.lat, this.state.Elex.lng]}>
                <Popup>
                    <span>Elex</span>
                </Popup>
            </Marker>
        </MapContainer>
      );
    }
}
export default Contacts;