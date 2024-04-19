import React, { useState } from 'react'
import "../styles/landing.css"
import One from './One'

const Landing = () => {

  const [curImgIndex, setCurImgIndex] = useState(0)

  return (
    <div>
      <One/>
    </div>
  )
}

export default Landing