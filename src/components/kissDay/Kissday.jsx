import React from "react";
import "./Kissday.scss";
import Lottie from "lottie-react";
import Kiss from "../../assets/kiss.json";
export default function Kissday() {
  return (
    <div className="kissday">
      <Lottie animationData={Kiss}/>
    </div>
  );
}
