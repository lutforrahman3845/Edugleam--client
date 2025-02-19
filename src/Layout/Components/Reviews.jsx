import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import userIcon from "../../assets/photo.png";
import ReactStars from "react-stars";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/testimonial-reviews`);
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="pt-16 lg:pt-20  px-2 overflow-x-hidden font-roboto container mx-auto">
      <h2 className=" text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-primary font-poppins">
        Testimonial
      </h2>
      <p className="text-center text-gray-600 dark:text-white mb-6 font-roboto max-w-xl mx-auto">
        EduGleam made scholarship management effortless, ensuring a seamless and
        efficient experience for students and administrators alike
      </p>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full h-72 my-5 mx-10 mt-8"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review._id}
            className="border-2 border-indigo-400 p-4 rounded-lg  dark:bg-gray-800"
          >
            {" "}
            <div>
              <div className="flex items-center gap-2">
                {review?.reviewerPhoto ? (
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={review?.reviewerPhoto}
                    alt="User imge"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img
                    className="w-12 h-12 rounded-full border border-primary p-[2px]"
                    src={userIcon}
                    alt="Default User Icon"
                  />
                )}
                <div>
                  <p className="text-lg font-semibold">
                    {review?.reviewerName}
                  </p>
                  <p>{new Date(review?.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="my-4 ml-10">
                <div className="font-medium flex items-center gap-2">
                  Rating :{" "}
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    half={true}
                    value={review?.rating}
                    edit={false}
                  />
                </div>
                <p className="font-medium max-w-3xl">
                  Comment :{" "}
                  <span className="text-gray-700 dark:text-gray-400 font-normal">
                    {" "}
                    {review?.comment}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
