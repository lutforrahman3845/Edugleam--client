import { useParams } from "react-router-dom";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import DetailsCard from "../../Components/DetailsCard";
import useScholarshipInfo from "../../../Hooks/useScholarshipInfo";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import userIcon from "../../../assets/photo.png";
import ReactStars from "react-stars";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const rewviewsPerPage = 4;

  const { scholarShipDetails, scholarshipDetailsLoading } =
    useScholarshipInfo(id);

  const { data: review, isLoading: isLoadingReviews } = useQuery({
    queryKey: ["review", currentPage, id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews_ofschloarship/${id}?skip=${currentPage}&limit=${rewviewsPerPage}`);
      return data;
    },
  });
  useEffect(() => {
    axiosSecure.get(`/reviews_count?id=${id}`).then((res) => {
      setCount(res.data.count);
    });
  }, []);

  const totalPages = Math.ceil(count / rewviewsPerPage);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };
  docTitle("Details | EduGleam");
  if (scholarshipDetailsLoading || isLoadingReviews) return <Loading></Loading>;
  return (
    <div className="pt-10 max-w-7xl mx-auto  font-roboto">
      <div className=" mx-4  mb-8">
        <DetailsCard details={scholarShipDetails}></DetailsCard>
      </div>
      {/* reviews */}
      {review.length <= 0 ? (
        <div className="mx-4">
          <p className="text-center text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto">
            This scholarship is waiting for its first review! If you want to
            leave a review, you need to apply for the scholarship first.Our
            recipients love sharing their experiences, and we're confident
            you'll have a great opportunity too. Apply now with confidence!
          </p>
        </div>
      ) : (
        <div className="px-8 md:px-14 lg:px-16 xl:px-20 overflow-x-hidden">
          <h4 className="text-2xl font-semibold text-primary font-poppins ">
            Reviews
          </h4>
          {review.map((review) => (
            <div key={review._id} className="mt-8">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-full border border-primary p-1">
                  {review?.reviewerPhoto ? (
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={review?.reviewerPhoto}
                      alt="User imge"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <img
                      className="w-full h-full rounded-full border border-primary p-[2px]"
                      src={userIcon}
                      alt="Default User Icon"
                    />
                  )}
                </div>
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
          ))}
          {/* pagination */}
          <div className="flex justify-center mt-12">
            {/* Prev Btn */}
            <button
              disabled={currentPage === 1}
              onClick={() => handlePaginationButton(currentPage - 1)}
              className="px-4 py-2 mx-1  disabled:text-gray-200 bg-primary/90 rounded-md disabled:cursor-not-allowed disabled:bg-gray-400   hover:bg-primary  text-white"
            >
              <div className="flex items-center -mx-1">
                <HiOutlineArrowNarrowLeft className="text-2xl" />
                <span className="mx-1 hidden sm:inline-block">Prev</span>
              </div>
            </button>
            {/* btn num */}
            {pages.map((btnNum) => (
              <button
                key={btnNum}
                onClick={() => handlePaginationButton(btnNum)}
                className={`  ${
                  currentPage === btnNum ? "bg-indigo-600 text-white" : ""
                } px-4 py-1 mx-1   rounded-md  hover:bg-indigo-500  hover:text-white`}
              >
                {btnNum}
              </button>
            ))}
            {/* Next btn */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePaginationButton(currentPage + 1)}
              className="px-4 py-2 mx-1   bg-primary/90 rounded-md hover:bg-primary disabled:bg-gray-400   text-white disabled:cursor-not-allowed disabled:text-gray-200"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1 hidden sm:inline-block">Next</span>
                <HiOutlineArrowNarrowRight className="text-2xl" />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipDetails;
