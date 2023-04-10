import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const data = [
  {
    avatar: AVTR1,
    name: "Anna Garcia",
    review:
      "Always an awesome experience working with this developer understands our projects and is able to get them done in a timely manner and on budget thank you so much for all your hard work we look forward to continually working together.",
  },
  {
    avatar: AVTR2,
    name: "James Perez",
    review:
      "Perfect service! Solved difficult technical issues. Communicated well on a regular basis and presented partial / final results in a clean and professional manner. Due to the very good result, I am happy to continue the project with the freelancer.",
  },
  {
    avatar: AVTR3,
    name: "Hanry Robinson",
    review:
      "I am so pleased with the work. Communication was great and everything expected got delivered, even before the deadline! Recommend very much.",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Excelent work and super fast, it has been an amazing experience 10/10 I will be back to do more work!",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const data = [
    {
      avatar: AVTR1,
      name: t("testimonials.review1.name"),
      review: t("testimonials.review1.text"),
    },
    {
      avatar: AVTR2,
      name: t("testimonials.review2.name"),
      review: t("testimonials.review2.text"),
    },
    {
      avatar: AVTR3,
      name: t("testimonials.review3.name"),
      review: t("testimonials.review3.text"),
    },
    {
      avatar: AVTR4,
      name: t("testimonials.review4.name"),
      review: t("testimonials.review4.text"),
    },
  ];
  return (
    <section id="testimonials" class="mb-20 drop-shadow-xl">
      <h5 class="text-center text-3xl  text-red-600 mb-4">
        {t("testimonials.title")}
      </h5>
      <div class="drop-shadow-xl">
        <Swiper
          className="container testimonials__container "
          // install Swiper modules
          modules={[Navigation, Pagination]}
          navigation
          scrollbar={{ draggable: true }}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="client avatar" />
                </div>
                <h5 class="text-2xl semibold" className="client__name">
                  {name}
                </h5>
                <small
                  class="text-2xl text-stone-600 "
                  className="client__review"
                >
                  {review}
                </small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
