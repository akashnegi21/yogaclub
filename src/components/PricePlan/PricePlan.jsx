import React from 'react'

import css from './PricePlan.module.css';
const PricePlan = () => {
  return (
    <div className={css.container}>
        <div className={css.ourPlans}>
        <span>What we do</span>
        <span>Our Price Plans</span>
        </div>
        <div className={css.plans}>
        <div className={css.plan}>
            <span>Standard Plan</span>
            <span>$ 35</span>   
            <span>Price Per Week</span>
                <span>Lorem, ipsum dolor sit</span>
                <span> amet consectetudafdasdsfar adipisicing elit.</span> 
                <span>Fuga sapiente consecte </span>
           <div className={css.btnClass}>
            <button className={css.btn}>Buy it Now</button></div>
        </div>
        <div className={css.plan}>
            <span>Professional Plan</span>
            <span style={{
                color:'red'  }}>$ 120</span>
            <span>Price Per Week</span>
            <span>Lorem, ipsum dolor sit</span>
                <span> amet consecteturdsdsfdszf adipisicing elit.</span> 
                <span>Fuga sapiente consecte </span>
           
                <div className={css.btnClass}> 
                <button 
                className={css.btn} style={{
                color:'white',
                backgroundColor:'#f56c6d'
                ,onHover:{
                    color:'black'
                }
            }}>Buy it Now</button></div>
           </div>
       
        <div className={css.plan}>
            <span>Private Plan</span>
            <span>$ 250</span>
            <span>Price Per Week</span>
            <span>Lorem, ipsum dolor sit</span>
                <span> amet consectetur addddddipisicing elit.</span> 
                <span>Fuga sapiente consect</span>
           <div className={css.btnClass}>
           <button className={css.btn}>Buy it Now</button></div>
                   </div>
    </div></div>
    
  )
}

export default PricePlan