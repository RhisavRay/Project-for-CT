import React, { useState } from 'react'
import "../styles/landing.css"
import One from './One'
import Two from './Two'

const Landing = () => {

  const [curImgIndex, setCurImgIndex] = useState(0)

  return (
    <div>
      <One/>
      <Two/>
    </div>
  )
}

export default Landing