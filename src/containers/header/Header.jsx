import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build Something Amazing With GPT-3 OpenAI</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia quam est nostrum? Deleniti ratione illum esse! Deleniti, ipsam! Cupiditate debitis tempora et nulla doloremque itaque deserunt magnam reiciendis ipsam?</p>
     
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600 people requested access in last 24hrs</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai}  alt='ai'/>
        </div>
    </div>
  )
}

export default Header