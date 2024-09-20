"use client"
import { useEffect, useRef } from "react";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export default function MyComponent() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && Swiper) {
      new Swiper(swiperRef.current, {
        // Swiper options
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        modules: [Pagination],
        centeredSlides: true,
        observer: true,
        freeMode: true,
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper pb-10">
          <div className="swiper-slide p-5 rounded-xl shadow-lg border !w-[320px]">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                  <p className="text-red-500 font-bold text-sm">Ana Riswati</p>
                </div>
                <div className="text-right text-xs">
                  <p>Senin</p>
                  <p>30 Mei 2022</p>
                </div>
              </div>
              <div className="text-sm line-clamp-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero recusandae pariatur expedita possimus sequi eaque, aliquid accusantium, dolore consequuntur voluptatum dolores, quas tempore numquam. Quasi quisquam beatae doloribus sit?</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide p-5 rounded-xl shadow-lg border !w-[320px]">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                  <p className="text-red-500 font-bold text-sm">Ana Riswati</p>
                </div>
                <div className="text-right text-xs">
                  <p>Senin</p>
                  <p>30 Mei 2022</p>
                </div>
              </div>
              <div className="text-sm line-clamp-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero recusandae pariatur expedita possimus sequi eaque, aliquid accusantium, dolore consequuntur voluptatum dolores, quas tempore numquam. Quasi quisquam beatae doloribus sit?</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide p-5 rounded-xl shadow-lg border !w-[320px]">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                  <p className="text-red-500 font-bold text-sm">Ana Riswati</p>
                </div>
                <div className="text-right text-xs">
                  <p>Senin</p>
                  <p>30 Mei 2022</p>
                </div>
              </div>
              <div className="text-sm line-clamp-4">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero recusandae pariatur expedita possimus sequi eaque, aliquid accusantium, dolore consequuntur voluptatum dolores, quas tempore numquam. Quasi quisquam beatae doloribus sit?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}