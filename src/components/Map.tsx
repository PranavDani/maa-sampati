import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'


const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Store</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKBAPCDxB91pOs-JIIZCO7raitxIFGVcw' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <div className="pin">
                    <Icon icon={locationIcon} className="pin-icon" />
                    <p className="pin-text">{location.address}</p>
                </div>
            </GoogleMapReact>
        </div>
    </div>
)

export default Map