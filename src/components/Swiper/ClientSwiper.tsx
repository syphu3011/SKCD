// components/ClientSwiper.tsx
"use client"; // Bắt buộc để định nghĩa đây là Client Component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import từ Swiper
import "swiper/css"; // Import CSS cơ bản của Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface ClientSwiperProps {
  slides: React.JSX.Element[]; // Các slide (mảng React Node)
  className: string
}

const ClientSwiper = ({ slides, className }: ClientSwiperProps) => {
  return (
      <Swiper spaceBetween={50}
      breakpoints={{
        1024: {
          slidesPerView: 3, // Hiển thị 3 slide trên laptop
        },
      }}
      slidesPerView={2}
      pagination={
        { clickable: true
         }
      }
      modules={[Pagination]}
      className={className}
      autoplay={true}
      >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ClientSwiper
