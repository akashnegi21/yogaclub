import React from 'react'
import logo from '../../assets/logo.png'
import css from './HeaderMenu.module.css'
const HeaderMenu = () => {
  return (
    <div className={css.container}>
        
         <div className={css.imageWrapper}>
        <img src={logo} width={103} height={56} alt=""/>
        </div>
            <ul>
                <li>About Us</li>
                <li>Programe</li>
                <li>Testimos</li>
                <li>Contact Us</li>
            </ul>
            <div className={css.getStarted}>
                <span>Sign Up for a Class Today</span>
            </div>
           </div>
  )
}

export default HeaderMenu