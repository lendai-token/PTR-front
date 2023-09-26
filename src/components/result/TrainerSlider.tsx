import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import trainer1 from "../../assets/imgs/landing/trainer-1.svg";
import trainer2 from "../../assets/imgs/landing/trainer-2.svg";
import trainer3 from "../../assets/imgs/landing/trainer-3.svg";
import trainer4 from "../../assets/imgs/landing/trainer-4.svg";

export default () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            slidesPerView={4}
            grabCursor={true}
            loop={true}
            className="swiper-trainer"
            spaceBetween={90}
            scrollbar={{ draggable: true }}
        >
          <SwiperSlide><img src={trainer1} alt="trainer1" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={trainer2} alt="trainer2" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={trainer3} alt="trainer3" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={trainer4} alt="trainer4" className="w-full" /></SwiperSlide>
        </Swiper>
    );
};