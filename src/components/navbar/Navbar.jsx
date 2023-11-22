import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu = () => {
  return (<>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#features'>Open AI</a></p>
    <p><a href='#possibility'>Case Studies</a></p>
    <p><a href='#blogs'>Library</a></p>
  </>);
}
  

const  Navbar = () =>{

  const [togglemenu , setTogglemenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
         <Menu/>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {togglemenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setTogglemenu(false)}></RiCloseLine>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setTogglemenu(true)}>  </RiMenu3Line>
          }
          {togglemenu && (
            <div className='gpt3__navbar-menu_container scale-up-center ' >
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default Navbar