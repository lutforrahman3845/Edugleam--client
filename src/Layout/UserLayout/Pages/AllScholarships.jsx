import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import docTitle from "../../../Hooks/Title";
import ScholarshipCard from "../../Components/ScholarshipCard";
import Loading from "../../Components/Loading";
const AllScholarships = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  const { data: allScholarShip = [] } = useQuery({
    queryKey: ["allScholarships", search],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/allScholarship?searchParam=${search}`
      );
      return data;
    },
  });
  docTitle("All Scholarships | EduGleam");
  return (
    <div className="pt-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-primary font-poppins">
        All Scholarships
      </h2>
      <div className="px-4 mt-6">
        <form
          onSubmit={handleSearch}
          className="mb-10 mx-auto max-w-sm rounded-md  border border-primary flex "
        >
          <input
            type="text"
            placeholder="Search by Scholarship, University, Degree name"
            className="bg-white dark:bg-secondary w-full rounded-md focus:outline-none py-2 pl-2  font-semibold border-none "
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="py-2 px-4 bg-primary">
            <IoSearchSharp className="text-xl text-white" />
          </button>
        </form>
      </div>
      {allScholarShip.length < 0 ? (
        <div>
          <p className="text-lg font-semibold text-gray-500 mt-4">
            No scholarships found. Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mx-4 my-16 md:my-20">
          {allScholarShip?.map((scholarship) => (
            <ScholarshipCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarshipCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllScholarships;
