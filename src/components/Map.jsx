import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
  // ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [50.0, 15.0, -5],
        center: [-10, -18],
        scale: 800
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-58.8, -34.5]}
        dx={45}
        dy={45}
        connectorProps={{
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="100" y="5" textAnchor="end" alignmentBaseline="middle" fill="gray">
          {"Buenos Aires"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
