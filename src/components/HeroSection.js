import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Link } from "react-router-dom"

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>The Code Never Breaks</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Link to="/services">
                <button  className='btn'
                buttonStyle='btn--outline'
                buttonSize="btn--large">
                    GET STARTED
                </button>
                </Link>
                <Link to="/products">
                <button className='btn'
                buttonStyle='btn--primary'
                buttonSize="btn--large">
                    WATCH MORE <i className="far fa-play-circle" />
                </button>
                </Link>
            </div>
        </div>
    )
}
export default HeroSection