import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import bnnr1 from "../../assets/bnnr1.avif";
import bnnr2 from "../../assets/bnnr2.avif";
import bnnr3 from "../../assets/bnnr3.png";
import { useNavigate } from "react-router-dom";

const Bannar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative  md:px-4 pt-2  ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-[98%] md:w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[700px] rounded-sm"
      >
        <SwiperSlide className=" relative text-black">
          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-50  text-white">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins  font-bold max-w-2xl ">
              Up to 100% Scholarship for Top Performers
            </h1>
            <p className="text-xs sm:text-base max-w-2xl my-2 text-gray-200 font-light font-roboto">
              Unlock your potential with a full scholarship! Top-performing
              students can receive up to 100% coverage for their educational
              journey
            </p>
            <button
              onClick={() => navigate("/scholarships")}
              className="py-2 px-3 text-xs md:text-base rounded-md bg-primary text-white mt-3 md:mt-6 lg:mt-8"
            >
              Discover More
            </button>
          </div>
          <img
            src={bnnr3}
            alt="Bannar image"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className=" relative text-black">
          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-50  text-white">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins  font-bold max-w-2xl ">
              Apply Now for International Scholarships
            </h1>
            <p className="text-xs sm:text-base max-w-2xl my-2 text-gray-200 font-light font-roboto">
              Dream big and study abroad! Explore numerous international
              scholarship opportunities tailored for global achievers.
            </p>
            <button
              onClick={() => navigate("/scholarships")}
              className="py-2 px-3 text-xs md:text-base rounded-md bg-primary text-white mt-3 md:mt-6 lg:mt-8"
            >
              Discover More
            </button>
          </div>
          <img
            src={bnnr2}
            alt="Bannar image"
            className="w-full h-full object-cover object-bottom rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/20 z-10"></div>

          <div className="absolute top-1/2 left-2 md:left-10 lg:left-16 xl:left-20 -translate-y-1/2 z-20">
            <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold max-w-2xl text-white">
              Special Offers for Underprivileged Students
            </h1>
            <p className="text-xs sm:text-base text-gray-200 max-w-2xl my-2 font-light font-roboto">
              Empower your future with exclusive scholarships designed to
              support underprivileged students in achieving their academic goals
            </p>
            <button
              onClick={() => navigate("/rooms")}
              className="py-2 px-3  text-xs md:text-base rounded-md bg-primary text-white mt-3 md:mt-6 lg:mt-8"
            >
              Discover More
            </button>
          </div>

          <img
            src={bnnr1}
            alt="Banner image"
            className="w-full h-full md:h-11/12 object-cover object-bottom rounded-sm "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
