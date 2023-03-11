import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/imgk1.jpg"
import img2 from "../assets/imgk2.jpg"

const Services = () => {
  return (
    <div className='services'>
      <Carousel 
      infiniteLoop
      autoPlay 
      showStatus={false}
      showThumbs={false} 
      showArrows={false} 
      interval={1500}>
        <div >
            <img src={img1} alt="Item1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <p className='legend'>Peer to Peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
