// import React, { useState, useEffect } from "react";
// import { Geolocation } from "@capacitor/geolocation";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-routing-machine";
// import "./index.css";
// function CoachLocation() {
//   const position = [47.184475, 8.505185 ];
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     getCurrentPosition();
//   }, []);

//   useEffect(() => {
//     if (location) {
//       getDistance();
//     }
//   }, [location]);


//   const customIcon = L.icon({
//     iconUrl: require("../marker-icon.png"),
//     shadowUrl: require("../marker-shadow.png"),
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32],
//   });
//   const apiKey = "52594ed767394cba8b91276dce863b21";
//   const start = "46.193673,6.101839";
//   const end = "47.186530,8.501407";
//   const mode = "driving-car";

//   const url = `https://api.geoapify.com/v1/routing?waypoints=${start}|${end}&mode=${mode}&apiKey=${apiKey}`;

//   const getDistance = async () => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       mode: "drive",
//       sources: [{ location: location }],
//       targets: [{ location: position }],
//     });

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//     };

//     fetch(
//       "https://api.geoapify.com/v1/routematrix?apiKey=52594ed767394cba8b91276dce863b21",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error));
//   };

//   const getCurrentPosition = async () => {
//     try {
//       const coordinates = await Geolocation.getCurrentPosition({
//         enableHighAccuracy: true,
//       });
//       if (location) {
//         setLocation([coordinates.coords.latitude,coordinates.coords.longitude]);
//       }
//     } catch (error) {
//       console.error("Error getting location", error);
//     }
//   };
//   const openGoogleMaps = () => {
//     if (location) {
//       const lat = location.coords.latitude;
//       const lon = location.coords.longitude;
//       const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
//       window.open(googleMapsUrl, "_blank");
//     }
//   };

//   return (
//     <div className="hole-map">
//       <MapContainer
//         center={
//           location !== null
//             ? location
//             : position
//         }
//         zoom={13.5}
//         className="map-container"
//       >
//         <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TNPJ9dvE72iHCMuBVwD7" />

//         <Marker position={position} icon={customIcon}>
//           <Popup>
//             destination <br />
//           </Popup>
//         </Marker>

//         <Marker
//           position={
//             location !== null
//               ? [location.coords.latitude, location.coords.longitude]
//               : position
//           }
//           icon={customIcon}
//         >
//           <Popup>
//             Mylocation <br />
//           </Popup>
//         </Marker>

//         {/* Add a routing itinerary between position and location */}
//         {/* {waypoints[0] && waypoints[1] && (
//           <L.Routing.Itinerary waypoints={waypoints} />
//         )} */}
//       </MapContainer>
//       <button onClick={openGoogleMaps}>ss</button>
//     </div>
//   );
// }

// export default CoachLocation;
