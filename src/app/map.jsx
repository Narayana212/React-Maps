"use client"
import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

const USMap = () => {
  const usGeoJson = require('./us-states.geojson'); // Replace with your own GeoJSON data

  const onEachState = (state, layer) => {
    layer.bindPopup(`<strong>${state.properties.name}</strong>`);
  };

  return (
    <MapContainer
      center={[37.8, -96]}
      zoom={4}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        <GeoJSON data={usGeoJson} onEachFeature={onEachState} />
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default USMap;
