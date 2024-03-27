// import MapLibre GL and the required React functions. Add these lines on top of map.js file.
import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

// creation the function as the map component
// with map default state
export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-70);
    const [lat] = useState(53);
    const [zoom] = useState(4);
    const [API_KEY] = useState('s0fnCLNTDdwXz54ByFxs '); //subscribe to maptiler cloud to obtain the API key


  //  initialize the map in the Map() function
//   This code will be right after the component is inserted into the DOM tree. We initialize the map using React effect hook and we also set up some basic options of the map:

//     The container option sets the DOM element in which will the map be rendered. We will assign the ref our component expects to an HTML element, which will act as a container, later in this tutorial.

//     The style option defines what style is the map going to use.

//     The center and zoom options set the starting position of the map.

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
  
  }, [API_KEY, lng, lat, zoom]);

//   Now, we will add the return statement to your Map() function
return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  ); //The ref={mapContainer} specifies that App should be drawn to the HTML page in the <div> element.
  }