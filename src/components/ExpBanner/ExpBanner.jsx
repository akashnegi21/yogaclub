import React from 'react'
import css from './ExpBanner.module.css'
import e1 from '../../assets/e1.svg';
import e2 from '../../assets/e2.svg';
import e3 from '../../assets/e3.svg';
import e4 from '../../assets/e4.svg';
const ExpBanner = () => {
  return (
    
    <div className={css.container}>
       <div className={css.b1}>
        <img src={e1} width={58} height={58} alt=""/>
        <div className={css.minContainer}>
        <div className={css.number}><span>23</span></div>
        <div className={css.heading}><span>Trainers</span></div></div>
        </div>

        <div className={css.b2}>
        <img src={e2} fill='white' width={58} height={58} alt=""/>
        <div className={css.minContainer}>
        <div className={css.number}><span>23</span></div>
        <div className={css.heading}><span>Happy client</span></div>
        </div></div>

        <div className={css.b3}>
        <img src={e3} width={58} height={58} alt=""/>
        <div className={css.minContainer}>
        <div className={css.number}><span>23</span></div>
        <div className={css.heading}><span>Years of experience</span></div>
        </div>
</div>
        <div className={css.b4}>
        <img src={e4} width={58} height={58} alt=""/>
        <div className={css.minContainer}>
        <div className={css.number}><span>23</span></div>
        <div className={css.heading}><span>Classes for you</span></div></div>
        </div>
</div>
  )
}

export default ExpBanner