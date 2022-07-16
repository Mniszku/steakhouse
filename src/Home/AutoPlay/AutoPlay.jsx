import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import White from "../White/white.png";
import MediaCard from "../MediaCard";

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const imgUrl = () => {
  const id = rand(1, 200);
  return `https://picsum.photos/id/${id}/1920/1080`;
};

const createSlide = () => {
  return (
    <SwiperSlide>
      <MediaCard
        title={
          <>
            <div style={{ display: "inline-block" }}>
              <span style={{ backgroundColor: "black" }}>Rabat 10%</span>
              <span style={{ color: "black" }}> na</span>
            </div>
            <div style={{ width: 380 }}>
              <span style={{ color: "black" }}>pierwsze zamówienie</span>
            </div>
          </>
        }
        text={
          <>
            <br></br>
            <br></br>
            <span
              style={{
                color: "black",
              }}
            >
              Do 20 stycznia złóż zamówienie na stronie i
            </span>
            <br></br>
            <span
              style={{
                color: "black",
              }}
            >
              skorzystaj z <b>promocji -10%.</b> Spiesz się, czas
            </span>
            <br></br>
            <span
              style={{
                color: "black",
              }}
            >
              trwania promocji do końca lutego.
            </span>
          </>
        }
        backgroundImage={White}
      ></MediaCard>
    </SwiperSlide>
  );
};

const AutoPlay = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
};

export default AutoPlay;
