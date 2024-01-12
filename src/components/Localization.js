import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 19.76716224358685, lat: 50.376820977058934 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = '93ctlLWvDedJHBKiEg7p';

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [tokyo.lng, tokyo.lat],
            zoom: zoom
        });

        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([19.76716224358685, 50.376820977058934])
            .addTo(map.current);
    }, [tokyo.lng, tokyo.lat, zoom]);

    return (
        <div
            ref={mapContainer}
            style={{ height: '100%', width: '100%' }}
        />
    );
}
