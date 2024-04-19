import React from 'react'
import "../styles/two.css"

const Two = () => {
  return (
    <div className="container">

        <img src={require('../Assets/Image_2.png')} alt="Losangeles Mountains" className="image"/>

        <div className="box">

            <div className="number">01</div>

            <div className="title">HISTORY</div>

            <div className="text">

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste ipsa ratione quibusdam consequuntur rerum vitae praesentium eum pariatur. Nihil a tenetur praesentium similique earum vitae dolorem, iure delectus distinctio
                </p>

            </div>

            <div className="black_box"></div>

        </div>

    </div>
  )
}

export default Two