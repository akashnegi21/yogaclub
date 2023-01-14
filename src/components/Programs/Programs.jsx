import React from 'react'
import t1 from '../../assets/t1.png'
import t2 from '../../assets/t2.png'
import t3 from '../../assets/t3.png'
import t4 from '../../assets/t4.png'
import css from './Programs.module.css'
const Programs = () => {
  return (
    <div className={css.container}>
        <div className={css.heading}>
            <span>A joyfull investment in your body,</span>
            <span>mind and spirit</span></div>
        <div className={css.types}>
        <div className={css.type1}>
                <img src={t1} width={70} height={70} alt=""/>
                <span>How we  Yoku</span>
                <span>Modern yoga consists of a range of techniques including asanas and meditation derived</span>
                <div className={css.join}>
                <button className={css.btn}>Join Now</button>
                </div>
            </div>
            <div className={css.type1}>
                <img src={t2} width={70} height={70} alt=""/>
                <span>How we  Yoku</span>
                <span>Modern yoga consists of a range of techniques including asanas and meditation derived</span>
                <div className={css.join}>
                <button className={css.btn}>Join Now</button>
                </div>
            </div>
       
            <div className={css.type1}>
                <img src={t3} width={70} height={70} alt=""/>
                <span>PHow we Yoku</span>
                <span>Modern yoga consists of a range of techniques including asanas and meditation derived</span>
                <div className={css.join}>
                    <button className={css.btn}>Join Now</button>
                </div>
            </div>
       
            <div className={css.type1}>
                <img src={t4} width={70} height={70} alt=""/>
                <span>How we yoku</span>
                <span>Modern yoga consists of a range of techniques including asanas and meditation deriveds</span>
                <div className={css.join}>
                <button className={css.btn}>Join Now</button>
                </div>
            </div>
       


        </div>
        
    </div>
  )
}

export default Programs