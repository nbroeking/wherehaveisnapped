import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import NavBar from "./NavBar";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

// DeckGL react component
function Dashboard() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <React.Fragment>

    <NavBar></NavBar>
    <DeckGL
    initialViewState={INITIAL_VIEW_STATE}
    controller={true}
    layers={layers} />
    </React.Fragment>);
}
export default Dashboard;
