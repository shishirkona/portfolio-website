import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules from https://swiperjs.com
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//portfolio data
const data = [
  {
    avatar: AVTR1,
    name: 'John Doe#1',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, turpis eu vehicula mollis, mauris odio dictum metus, non sodales nibh felis et nisi.',
  },
  {
    avatar: AVTR2,
    name: 'John Doe#2',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, turpis eu vehicula mollis, mauris odio dictum metus, non sodales nibh felis et nisi.',
  },
  {
    avatar: AVTR3,
    name: 'John Doe#3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, turpis eu vehicula mollis, mauris odio dictum metus, non sodales nibh felis et nisi.',
  },
  {
    avatar: AVTR4,
    name: 'John Doe#4',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, turpis eu vehicula mollis, mauris odio dictum metus, non sodales nibh felis et nisi.',
  },
 
]


const Textimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          }

          )
        }
      </Swiper>
    </section>
  )
}

export default Textimonials