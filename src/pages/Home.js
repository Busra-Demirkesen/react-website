import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/images/header-pic.jpg'
import '../styles/Home.css';
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
     <div className='headerContainer'>
        <h3>Pedro's Pizzeria</h3>
        <p>Pizza to fit any taste</p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
     </div>
    </div>
  )
}

export default Home
