import css from './Header.module.css';
import React from 'react'

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Hero from '../Hero/Hero';
const Header = () => {
  return (
    <div className={css.container}>
    {/* <HeaderMenu/> */}
    <Hero/>
    </div>
  )
}

export default Header