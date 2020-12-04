import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Contacts.css';
import {FaRegAddressCard} from 'react-icons/fa';
import {BiPhoneCall} from 'react-icons/bi';
import {GrInfo} from 'react-icons/gr';
import Form from './Form.js';


import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'; 
import { BsInfoSquare } from 'react-icons/bs'; 
import { IoIosGitNetwork} from 'react-icons/io'; 
import { GiEarthAfricaEurope } from 'react-icons/gi'; 
import { BsPencil } from 'react-icons/bs'; 

function Contacts ({ BiggestCompanies, center, BiggestCompaniesShow, showBiggestCompaniesFunc }) {

    return (
    <div className="MapContainer-wrapper">
        <div class="burger">
<NavLink to="/MyVision/about" className="nav-item">
         <BsInfoSquare className="Navbar__icon-bc"/>
</NavLink>
<NavLink to="/MyVision/blog" className="nav-item">
         <GiEarthAfricaEurope className="Navbar__icon"/>
</NavLink>
<NavLink to="/MyVision/contacts" className="nav-item">
        <BsPencil className="Navbar__icon"/>
</NavLink>
</div>
        <MapContainer center={[center.lat,center.lng]} zoom={center.zoom} scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />

            { BiggestCompaniesShow && BiggestCompanies.map((item)=>(
                        <Marker position={[item.lat, item.lng]} className="map-marker">
                            <Popup className="map-marker-popup">
                                <div className="map-marker-popup-body">
                                    <p className="map-marker-popup__name">
                                        {item.name}
                                    </p>
                                    <p className="map-marker-popup__description">
                                        <GrInfo className="map-marker-popup__description__icon" />
                                        {item.description}
                                    </p>
                                    <p className="map-marker-popup__address">
                                        <FaRegAddressCard className="map-marker-popup__address__icon"/> 
                                        {item.address}
                                    </p>
                                    <p className="map-marker-popup__telephone">
                                        <BiPhoneCall className="map-marker-popup__telephone__icon"/>  
                                        <a href={`tel:${item.telephone}`} target='blank'>{item.telephone}</a> 
                                    </p>
                                    <a className="map-marker-popup__website" href={`https://${item.website}`} target='blank'> 
                                        {item.website}
                                    </a> 
                                </div>
                            </Popup>
                        </Marker>
                    ))
            }
        </MapContainer>



        <button className={BiggestCompaniesShow?"showITCompaniesBtnTrue":"showITCompaniesBtnFalse"} onClick={ ()=>{showBiggestCompaniesFunc()} }>
            <span>IT in Ivano-Frankivsk</span>
        </button>


        <Form/>

    </div>
    )
}
export default Contacts;