import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OfferSection = ({ offers }) => {
  const nextClickHandle = () => {
    if (window) {
      const nextBtn = document.querySelectorAll(
        '.offer-list .swiper-button-next',
      );
      // @ts-ignore
      nextBtn[0].click();
    }
  };

  const prevClickHandle = () => {
    if (window) {
      const prevBtn = document.querySelectorAll(
        '.offer-list .swiper-button-prev',
      );
      // @ts-ignore
      prevBtn[0].click();
    }
  };

  return (
    <section className="w-full" id="offers">
      <div>
        <div className="offer-list relative flex flex-wrap items-center justify-center">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                loop: true,
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            pagination
            navigation
          >
            {offers?.map((course, i) => {
              return (
                <SwiperSlide key={`courese-${course.id}.${i}`}>
                  <div className={'px-[18px] py-[20px] pb-[60px]'}>
                    <div className="h-[208px] w-full rounded-[8px] bg-red-300"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
