import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from './Review';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Shared/Loading/Loading';
const Reviews = () => {
    const { data, isLoading } = useQuery(['reviews'], () => axios('https://arcane-thicket-72200.herokuapp.com/reviews'))
    if(isLoading){
        return <Loading/>
    }
    const reviews = data?.data
    return (
        <section>
            <h3 className='text-3xl text-secondary font-bold text-center'>Happy Candidates</h3>
            <p className='text-slate-500 mt-3 text-center'>Our happy candidates got their dream jobs from JobFinder</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews?.map((review,index) =>
                        <SwiperSlide key={index}>
                            <Review  reviews={review}/>
                        </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviews;