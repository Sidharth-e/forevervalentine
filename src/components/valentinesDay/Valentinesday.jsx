import React from 'react'
import './Valentinesday.scss'
import Lottie from 'lottie-react';
import valentine from '../../assets/valentine.json'
export default function Valentinesday() {
  return (
    <div className='valentinesday'> 
    <Lottie animationData={valentine}/>
   </div>
  )
}
