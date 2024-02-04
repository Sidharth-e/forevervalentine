import React from 'react'
import './Teddyday.scss'
import Lottie from "lottie-react";
import Teddy from "../../assets/teddy.json";
export default function TeddyDay() {
  return (
    <div className='TeddyDay'><Lottie animationData={Teddy}/></div>
  )
}
