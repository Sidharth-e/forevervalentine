import React from 'react'
import './Hugday.scss';
import Lottie from "lottie-react";
import Hug from "../../assets/hug.json";
export default function Hugday() {
  return (
    <div className='hugday'>
      <Lottie animationData={Hug}/>
</div>
  )
}
