import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: "Anna Garcia",
    review: "Always an awesome experience working with this developer understands our projects and is able to get them done in a timely manner and on budget thank you so much for all your hard work we look forward to continually working together."
  },
  {
    avatar: AVTR2,
    name: "James Perez",
    review: "Perfect service! Solved difficult technical issues. Communicated well on a regular basis and presented partial / final results in a clean and professional manner. Due to the very good result, I am happy to continue the project with the freelancer."
  },
  {
    avatar: AVTR3,
    name: "Hanry Robinson",
    review: "I am so pleased with the work. Communication was great and everything expected got delivered, even before the deadline! Recommend very much."
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review: "Excelent work and super fast, it has been an amazing experience 10/10 I will be back to do more work!"
  },
]

const Testimonials = () => {
  return (
    <section id ="testimonials" class="mb-20 drop-shadow-xl">
      <h5 class="text-center text-3xl  text-red-600 mb-4">Review from clients</h5>
        <div class="drop-shadow-xl">
        <Swiper className="container testimonials__container "
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 class="text-2xl scale-120" className="client__name">{name}</h5>
              <small class="text-xl text-stone-600 scale-120" className="client__review">{review}</small>  
              </SwiperSlide>
            )
          }) 
        }
      </Swiper>
        </div>
      
    </section>
  )
}

export default Testimonials