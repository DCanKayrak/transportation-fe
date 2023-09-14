import React from 'react'
import trucks from '../assets/images/trucks.png';

export const Header = () => {
  return (
    <section className='header'>
        <div className='hero-image-container'>
            <img src={trucks}></img>
        </div>
        <div className='header-left'>
            logo
        </div>
        <div className='header-right'>
            <a className='btn'>Login</a>
            <a className='btn'>Sign Up</a>
        </div>
    </section>
  )
}
