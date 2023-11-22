import React from 'react'
import './possibility.css'
import possibiltyImage from '../../assets/possibility.png'


function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibiltyImage} alt='Possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore facilis dicta vitae modi voluptatem in odio, non quod blanditiis explicabo, ad autem accusamus natus veniam totam incidunt temporibus, repellendus nobis.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility