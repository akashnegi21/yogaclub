import React from 'react'
import css from './TrainerBanner.module.css';
import cut from '../../assets/cut.png'
const TrainerBanner = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
         <div className={css.imageWrapper}>
            <img src={cut} alt=""/>
         </div> 
        </div>
        
        
        <div className={css.right}>
            <div className={css.headContainer}>
                <div className={css.head}>
                    <span>About Our School</span>
                </div>
                <div className={css.heading}>
                    <span>How we become ecstacy</span>
                </div>
                <div className={css.content}>
                    <span className={css.sp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iusto impedit. Hic eiu
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione possimus fugit nobis distinctio illum? Autem esse minima fugit, ipsum obcaecati nam aliquid, facere dolores asperiores reiciendis velit quis quia natus?
                    s iusto libero laudantium minus tempora sit quos nemo sint, a, labore voluptas modi veniam possimus vero aliquid?Lorem, ipsum dolor sit amet consectetur adipi

                    </span>
                </div>
                <button className={css.btn}>Meet Our Instructor</button>

            </div>  
     
        </div>
    </div>
  )
}

export default TrainerBanner