"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HomeSlider() {
  const slides = [
    { id: 1, img: "/ground-slider.png" },
    { id: 2, img: "/ground-two.png" },
    { id: 3, img: "/ground-slider.png" },
  ];

  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg mb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt="Slide"
                fill
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}