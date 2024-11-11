import React from 'react'
import './styles/hero.css'
import grid from '/images/photo-grid.png'
const Hero = () => {
  return (
    <div className='hero'>
     <img src={grid} className='grid'/>
    </div>
  )
}

export default Hero
