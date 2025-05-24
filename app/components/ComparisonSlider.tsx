"use client";

import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "../styles/ComponentSlider.module.scss";

export default function ComparisonComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "800px",
        margin: "0 auto",
        gap: "100px", // Added space between the sliders
      }}
    >
      <div style={{ maxWidth: "300px" }}>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtX2tqvqxMPjBQH4xcqI2YyaNn9E8Z3JLSoVAk"
              alt="Before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtllmzDzItaf2mdksJRC3PbKwWLS67OGngAEeN"
              alt="After"
            />
          }
          style={{
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </div>
      <div style={{ maxWidth: "300px" }}>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtdfvbzBWwVEKt6gkQTxDebZGXriJqcFM5Byzm"
              alt="Before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtZQlC5sBgdrkLKClnsqY3hie4Q78cauAoyzxt"
              alt="After"
            />
          }
          style={{
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </div>
  );
}
