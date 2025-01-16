import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ scholarship = [] }) => {
  const {
    _id,
    universityLogo,
    universityName,
    scholarshipCategory,
    universityCity,
    universityCountry,
    applicationDeadline,
    subjectCategory,
    applicationFees,
  } = scholarship;

  return (
    <div className="relative bg-white dark:bg-gray-900 shadow-lg p-6 rounded-xl border border-gray-200 dark:border-gray-700  hover:shadow-2xl hover:scale-[1.02] overflow-hidden group flex flex-col justify-between ">
      
      <div className="flex items-center gap-3 mb-5">
        {/* University Logo */}
        <div className="w-12 h-12 rounded-full border border-pri bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105">
          <img
            src={universityLogo || "https://via.placeholder.com/150"}
            alt={universityName}
            className="w-[80%] h-[80%] object-cover object-top"
          />
        </div>

        {/* University Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-100 group-hover:text-primary">
          {universityName}
        </h3>
      </div>

      {/* Scholarship Details */}
      <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
        <p>
          <strong className="font-medium text-gray-900 dark:text-white">Scholarship:</strong> {scholarshipCategory}
        </p>
        <p>
          <strong className="font-medium text-gray-900 dark:text-white">Location:</strong> {universityCity}, {universityCountry}
        </p>
        <p>
          <strong className="font-medium text-gray-900 dark:text-white">Deadline:</strong> {new Date(applicationDeadline).toLocaleDateString()}
        </p>
        <p>
          <strong className="font-medium text-gray-900 dark:text-white">Subject:</strong> {subjectCategory}
        </p>
        <p>
          <strong className="font-medium text-gray-900 dark:text-white">Application Fees:</strong> $
          {applicationFees || "N/A"}
        </p>
      </div>

      {/* View Details Button - Positioned at Bottom Right */}
      <div className="flex justify-end mt-5">
        <Link to={`/scholarship/${_id}`}>
          <button className="py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg transform group-hover:scale-[1.02]">
            View Details
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
