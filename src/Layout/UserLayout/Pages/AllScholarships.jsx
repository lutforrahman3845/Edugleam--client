import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import docTitle from "../../../Hooks/Title";
import ScholarshipCard from "../../Components/ScholarshipCard";
import useTotalScholarships from "../../Dashboard/DasHooks/useTotalScholarships";
import Loading from "../../Components/Loading";
const AllScholarships = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const totalScholarships = useTotalScholarships();
  const perPageItem = 9;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  const { data: allScholarShip, isLoading } = useQuery({
    queryKey: ["allScholarships", search, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/allScholarship?skip=${currentPage}&limit=${perPageItem}&searchParam=${search}`
      );
      return data;
    },
  });

  // pagination pages
  const totalPages = Math.ceil(
    totalScholarships?.totalScholerships / perPageItem
  );
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };
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
            autoFocus
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.trim());
              setCurrentPage(1);
            }}
          />
          <button type="submit" className="py-2 px-4 bg-primary">
            <IoSearchSharp className="text-xl text-white" />
          </button>
        </form>
      </div>

      <div
        className={`grid  mx-4 my-16 md:my-20 ${
          allScholarShip?.length === 0 || isLoading
            ? "grid-cols-1"
            : " grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        }`}
      >
        {isLoading ? (
          <Loading></Loading>
        ) : allScholarShip?.length === 0 ? (
          <div>
            <p className="text-base md:text-lg text-center font-semibold text-red-600 mt-4 font-roboto">
              No scholarships found. Try searching with different keywords.
            </p>
          </div>
        ) : (
          allScholarShip?.map((scholarship) => (
            <ScholarshipCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarshipCard>
          ))
        )}
      </div>

      {/* pagination */}
      {allScholarShip?.length > 0 && (
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
      )}
    </div>
  );
};

export default AllScholarships;
