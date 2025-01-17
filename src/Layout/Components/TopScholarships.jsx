import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ScholarshipCard from "./ScholarshipCard";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Loading from "./Loading";

const TopScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/topScholarships");
      return data;
    },
  });
  return (
    <div className="pt-16 font-roboto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-primary font-poppins">
        Top Scholarships
      </h2>
      <p className="text-center text-gray-600 dark:text-white mb-8 font-roboto">
        Explore the best scholarship opportunities with low application fees and
        recent postings from top universities worldwide.
      </p>
      <div
        className={`grid  mx-4 ${
          isLoading
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6"
        } `}
      >
        {isLoading ? (
          <Loading></Loading>
        ) : (
          scholarships
            ?.slice(0, 6)
            .map((scholarship) => (
              <ScholarshipCard
                key={scholarship._id}
                scholarship={scholarship}
              ></ScholarshipCard>
            ))
        )}
      </div>
      <div className="flex justify-center mt-5">
        <Link to={"/scholarships"}>
          <button className="py-2 px-4 bg-white dark:bg-secondary rounded-md border border-primary text-primary font-medium flex items-center justify-center gap-2 shadow-2xl hover:scale-105">
            View All Scholarship
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarships;
