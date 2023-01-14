import React from 'react'
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    
    <div className={css.container}>
        <div className={css.footer}>
            <div className={css.left}>
                <div className={css.leftfooter}>
                    <img src={logo} height={52} width={62} alt=""/>
                    <span>Ecstasy</span>
                </div>
                <div className={css.leftContent}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur? Culpa aut, sapiente a nostrum saepe, ut dolore
                </div>
            </div>
                       
            <div className={css.mid}>
            <div className={css.mid1}>Quick Links</div>
              <div className={css.mid2}>  <div className={css.leftLink}>
                    <ul><li>Pricing</li>
                    <li>Courses</li>
                    <li>FAQ</li>
                    <li>Terms Of Service</li></ul>
                </div>
                <div className={css.rightLink}>
                    <ul><li>Become Instructor</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Support Center</li></ul>
                </div>
                </div>
            </div>
            
            <div className={css.rightContainer}>
                <div className={css.right1}><span>Contact</span></div>
                <div className={css.right2}>Boys Hostel,Doon University,Kedarpuram,Dehradun</div>
                <div className={css.right3}>
                    8171329954
                </div>
                <div className={css.right4}>negiakash41@gmail.com
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer