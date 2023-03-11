import React from 'react'
import vg from "../assets/imgp2.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='house' id="house">
      <main>
      <h1> TechyStar</h1>
      <p>Solution to all your problems</p>
      </main>
    </div>
    <div className="house2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="house3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla animi voluptates, similique vero incidunt dignissimos nam, sed dolorem amet hic consectetur eius exercitationem itaque! Debitis natus vitae quasi, magnam eos alias soluta eligendi?</p>
    </div>
    </div>
    <div className="house4" id="brands">
        <div>
            <h1>
                Brand
            </h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay:"1s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
