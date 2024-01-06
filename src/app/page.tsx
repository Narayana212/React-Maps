"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SimpleMap from '../app/components/simple-map'


const Map = () => {
  const [mapCenter] = useState([37.7749, -100.4194]);
  const [markers, setMarkers] = useState([
    {
      state: "Alabama",
      capital: "Montgomery",
      position: [32.3668, -86.2999],
      content: "Alabama",
    },
    {
      state: "Alaska",
      capital: "Juneau",
      position: [58.3019, -134.4197],
      content: "Alaska",
    },
    {
      state: "Arizona",
      capital: "Phoenix",
      position: [33.4484, -112.074],
      content: "Arizona",
    },
    {
      state: "Arkansas",
      capital: "Little Rock",
      position: [34.7465, -92.2896],
      content: "Arkansas",
    },
    {
      state: "California",
      capital: "Sacramento",
      position: [38.576, -121.4939],
      content: "California",
    },
    {
      state: "Colorado",
      capital: "Denver",
      position: [39.7392, -104.9903],
      content: "Colorado",
    },
    {
      state: "Connecticut",
      capital: "Hartford",
      position: [41.7637, -72.6851],
      content: "Connecticut",
    },
    {
      state: "Delaware",
      capital: "Dover",
      position: [39.1582, -75.5244],
      content: "Delaware",
    },
    {
      state: "Florida",
      capital: "Tallahassee",
      position: [30.4383, -84.2807],
      content: "Florida",
    },
    {
      state: "Georgia",
      capital: "Atlanta",
      position: [33.749, -84.388],
      content: "Georgia",
    },
    {
      state: "Hawaii",
      capital: "Honolulu",
      position: [21.3069, -157.8583],
      content: "Hawaii",
    },
    {
      state: "Idaho",
      capital: "Boise",
      position: [43.615, -116.2023],
      content: "Idaho",
    },
    {
      state: "Illinois",
      capital: "Springfield",
      position: [39.7817, -89.6501],
      content: "Illinois",
    },
    {
      state: "Indiana",
      capital: "Indianapolis",
      position: [39.7684, -86.1581],
      content: "Indiana",
    },
    {
      state: "Iowa",
      capital: "Des Moines",
      position: [41.5868, -93.625],
      content: "Iowa",
    },
    {
      state: "Kansas",
      capital: "Topeka",
      position: [39.0558, -95.689],
      content: "Kansas",
    },
    {
      state: "Kentucky",
      capital: "Frankfort",
      position: [38.1867, -84.8754],
      content: "Kentucky",
    },
    {
      state: "Louisiana",
      capital: "Baton Rouge",
      position: [30.4515, -91.1871],
      content: "Louisiana",
    },
    {
      state: "Maine",
      capital: "Augusta",
      position: [44.3106, -69.7795],
      content: "Maine",
    },
    {
      state: "Maryland",
      capital: "Annapolis",
      position: [38.9784, -76.4922],
      content: "Maryland",
    },
    {
      state: "Massachusetts",
      capital: "Boston",
      position: [42.3601, -71.0589],
      content: "Massachusetts",
    },
    {
      state: "Michigan",
      capital: "Lansing",
      position: [42.7325, -84.5555],
      content: "Michigan",
    },
    {
      state: "Minnesota",
      capital: "St. Paul",
      position: [44.9537, -93.09],
      content: "Minnesota",
    },
    {
      state: "Mississippi",
      capital: "Jackson",
      position: [32.2988, -90.1848],
      content: "Mississippi",
    },
    {
      state: "Missouri",
      capital: "Jefferson City",
      position: [38.5767, -92.1735],
      content: "Missouri",
    },
    {
      state: "Montana",
      capital: "Helena",
      position: [46.5896, -112.0391],
      content: "Montana",
    },
    {
      state: "Nebraska",
      capital: "Lincoln",
      position: [40.8136, -96.7026],
      content: "Nebraska",
    },
    {
      state: "Nevada",
      capital: "Carson City",
      position: [39.1639, -119.7661],
      content: "Nevada",
    },
    {
      state: "New Hampshire",
      capital: "Concord",
      position: [43.2081, -71.5374],
      content: "New Hampshire",
    },
    {
      state: "New Jersey",
      capital: "Trenton",
      position: [40.2206, -74.7597],
      content: "New Jersey",
    },
    {
      state: "New Mexico",
      capital: "Santa Fe",
      position: [35.6869, -105.9378],
      content: "New Mexico",
    },
    {
      state: "New York",
      capital: "Albany",
      position: [42.6526, -73.7562],
      content: "New York",
    },
    {
      state: "North Carolina",
      capital: "Raleigh",
      position: [35.7796, -78.6382],
      content: "North Carolina",
    },
    {
      state: "North Dakota",
      capital: "Bismarck",
      position: [46.8083, -100.7837],
      content: "North Dakota",
    },
    {
      state: "Ohio",
      capital: "Columbus",
      position: [39.9612, -82.9988],
      content: "Ohio",
    },
    {
      state: "Oklahoma",
      capital: "Oklahoma City",
      position: [35.4676, -97.5164],
      content: "Oklahoma",
    },
    {
      state: "Oregon",
      capital: "Salem",
      position: [44.9429, -123.0351],
      content: "Oregon",
    },
    {
      state: "Pennsylvania",
      capital: "Harrisburg",
      position: [40.2732, -76.8867],
      content: "Pennsylvania",
    },
    {
      state: "Rhode Island",
      capital: "Providence",
      position: [41.8236, -71.4227],
      content: "Rhode Island",
    },
    {
      state: "South Carolina",
      capital: "Columbia",
      position: [34.0007, -81.0348],
      content: "South Carolina",
    },
    {
      state: "South Dakota",
      capital: "Pierre",
      position: [44.3683, -100.351],
      content: "South Dakota",
    },
    {
      state: "Tennessee",
      capital: "Nashville",
      position: [36.1627, -86.7816],
      content: "Tennessee",
    },
    {
      state: "Texas",
      capital: "Austin",
      position: [30.25, -97.75],
      content: "Texas",
    },
    {
      state: "Utah",
      capital: "Salt Lake City",
      position: [40.75, -111.8833],
      content: "Utah",
    },
    {
      state: "Vermont",
      capital: "Montpelier",
      position: [44.2664, -72.5719],
      content: "Vermont",
    },
    {
      state: "Virginia",
      capital: "Richmond",
      position: [37.54, -77.4336],
      content: "Virginia",
    },
    {
      state: "Washington",
      capital: "Olympia",
      position: [47.0425, -122.8931],
      content: "Washington",
    },
    {
      state: "West Virginia",
      capital: "Charleston",
      position: [38.3498, -81.6326],
      content: "West Virginia",
    },
    {
      state: "Wisconsin",
      capital: "Madison",
      position: [43.0731, -89.4012],
      content: "Wisconsin",
    },
    {
      state: "Wyoming",
      capital: "Cheyenne",
      position: [41.1456, -104.802],
      content: "Wyoming",
    },
  ]);
  const customIcon = new L.Icon({
    iconUrl: "/pin1.png",
    iconSize: [40, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  

  


  return (
    <div className="mx-auto w-full overflow-x-hidden mt-3  max-w-screen-xl px-2.5 md:px-20 " >
    <div className="border-2 ">
    <h1 className="text-xl font-bold mb-3">Custom POI</h1>
    <MapContainer
        // @ts-ignore
        center={mapCenter}
        zoom={4.5}
        style={{ height: "50vh", width: "100%",border:"black" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // @ts-ignore
        />

        {markers.map((marker, index) => (
          // @ts-ignore
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div>
                <h2>{marker.capital}</h2>
                <p>{marker.content}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

      <SimpleMap/>
    
    </div>
  );
};

export default Map;
