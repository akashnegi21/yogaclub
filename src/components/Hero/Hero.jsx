import React from 'react'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'
import girl from '../../assets/girl.png'
import css from './Hero.module.css'
const Hero = () => {
  return (
    
      <div className={css.container}>
      <div className={css.menu}>
        <ul><div>
      <img src={logo} width={82} height={62} alt="" />
    </div>
                <li>About Us</li>
                <li>Programe</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </ul></div>
      <div className={css.main}>
    <div className={css.left}>
      <span>Ecstacy </span>
      <span>Find your inner <span style={{
        color:'red'
      }}>Peace</span></span> 
      <span>Lorem ipsum dolor, sitsdflorem amet consectetur adipisicing elit. Porro, expedita blanditiis aspernatur</span>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, consectetur! Nemo neque dignissimos laboriosam aliquam deleniti excepturi maiores sit modi adipisci consequuntur, quia ipsum hic nobis reprehenderit repellendus temporibus dolor.
      <div className={css.btnClass}>
      <button className={css.btn}>Get Started</button>
      </div>
    </div>
    <div className={css.right}>
          <img src={banner} loading="lazy" alt=""/>
    
          <img src={girl} alt=""/>
        </div>
    </div>
    </div>
    
    )
}
export default Hero