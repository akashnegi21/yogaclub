import css from './OurBelief.module.css'
import React from 'react'
import OurBeliefPic from '../../assets/ourBelief.png'
import t1 from '../../assets/t1.png';
import t2 from '../../assets/t3.png';
const OurBelief = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
    <div className={css.imageWrapper}>
        <img src={OurBeliefPic} alt=""  width={800} height={700}/>
    </div>
        </div>
    <div className={css.right}>
        <div className={css.heading}>
          <span>Training schedule</span>
            <span>The Main Reason To Practic</span>
            <span>Yoga</span></div>
            <div className={css.subHeading}>
          Set up personadflajsdfljalsfdjla Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam enim aliquid in errorm akahs negi
            </div>
        <div className={css.content}>
        <div className={css.subContent}><div className={css.divImage}><img src={t2} width={55} height={55} alt=""/></div> 
        <div className={css.headContent}>
            <div>Hot and Charming</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum quos magnam praesentium rem vel doloremque minima blanditiis </div>
            </div>
            </div> 
            
            <div className={css.subContent}>
              <div className={css.divImage}><img src={t1} width={55} height={55} alt=""/></div> 
              <div className={css.headContent}>
            <div>Slim and Sexy</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum quos magnam praesentium rem vel doloremque minima blanditiis </div>
            </div></div>
        </div>
    </div>
    </div>
  )
}

export default OurBelief