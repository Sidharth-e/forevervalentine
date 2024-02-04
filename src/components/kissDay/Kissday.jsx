import React from "react";
import "./Kissday.scss";
export default function Kissday() {
  return (
    <div className="kissday">
      <div class="container">
        <div id="l-ball" class="ball">
          <div class="face face-l">
            <div class="eye eye-l"></div>
            <div class="eye eye-r"></div>
            <div class="kissmouth"></div>
          </div>
        </div>
        <div id="r-ball" class="ball">
          <div class="face face-r">
            <div class="eye eye-l eye-r-p"></div>
            <div class="eye eye-r eye-r-p"></div>
            <div class="kissmouth mouth-r"></div>
            <div class="kiss-m">
              <div class="kiss"></div>
              <div class="kiss"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
