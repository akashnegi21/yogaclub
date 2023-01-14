import React from "react";
import css from "./Testimonials.module.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";

// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  }
];

const Testimonials = () => {
  return (
  <div className={css.main}>
    <div className={css.testimonials}>

    <span>Testimonials</span>
      <span>What They're Saying</span>
      </div>
      <Swiper
        className={css.container}

        slidesPerView={"auto"}
        centeredSlides={true}
        keyboard={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Keyboard]}

      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className={css.testimonials}>
              <div className={css.clientAvatar}>
                <img src={avatar} alt="" />
              </div>
              <div className={css.clientName}>{name}</div>
              <div className={css.clientReview}>{review}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
</div>
      // 
  );
};

export default Testimonials;
