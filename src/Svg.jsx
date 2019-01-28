import React from "react";
import Color from "./data/Color";

const Svg = ({ className, width, height, viewBox, style, defs, children }) => {
  return (
    <Color>
      {c => (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={viewBox}
          style={style}
          className={className}
        >
          <defs>
            <style>
              @import url("https://fonts.googleapis.com/css?family=Bitter:700");
            </style>
            {defs}
          </defs>
          {children}
        </svg>
      )}
    </Color>
  );
};

export default Svg;
