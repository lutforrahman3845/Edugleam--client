import { Link, useNavigate } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import { toast } from "react-toastify";

const DetailsCard = ({ details = {} }) => {
  const { role } = useRole();
  const navigate = useNavigate();
  const {
    _id,
    universityLogo,
    universityName,
    scholarshipName,
    universityWorldRank,
    scholarshipCategory,
    universityCity,
    degree,
    universityCountry,
    applicationDeadline,
    subjectCategory,
    tuitionFees,
    scholarshipPostDate,
    serviceCharge,
    applicationFees,
  } = details;
  const handleApply = (id) => {
    if (role === "admin" || role === "moderator") {
      return toast.error(`You are the ${role}. You can't apply scholarship`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    navigate(`/payment/${id}`);
  };
  return (
    <div className="font-roboto">
      {/* University Image */}
      <div className=" bg-gray-100 dark:bg-secondary p-6 rounded-xl shadow-lg flex flex-col items-center">
        <img
          src={universityLogo}
          alt={universityName}
          className="w-32 h-32 object-contain rounded-full border shadow-lg p-2 bg-white border-primary"
        />
        <h2 className="text-xl md:text-2xl font-bold mt-4 text-secondary dark:text-white text-center font-poppins">
          {universityName}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          {universityCity}, {universityCountry}
        </p>
        <p className="py-1 px-3 text-secondary bg-blue-300 rounded-xl mt-4">
          World Rank : {universityWorldRank}
        </p>
      </div>

      {/* Scholarship Details Section */}
      <div className="mt-8 bg-gray-100 dark:bg-secondary shadow-md rounded-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-primary">
              Scholarship Details : {}
            </p>
            <div className="grid sm:grid-cols-2 gap-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium text-base  dark:text-gray-300 ">
                  Subject :
                </span>{" "}
                <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                  {subjectCategory}
                </span>
              </p>
              <p>
                <span className="font-medium text-base  dark:text-gray-300 ">
                  Degree :
                </span>{" "}
                <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                  {degree}
                </span>
              </p>
              <p>
                <span className="font-medium text-base  dark:text-gray-300 ">
                  Tuition Fees :
                </span>{" "}
                <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                  $ {tuitionFees}
                </span>
              </p>
              <p>
                <span className="font-medium text-base dark:text-gray-300 ">
                  Deadline :
                </span>{" "}
                <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                  {new Date(applicationDeadline).toLocaleDateString()}
                </span>
              </p>
            </div>

            {/* Funding */}
            <div className="mt-4">
              <p className="text-lg font-semibold text-primary">Funding</p>
              <div className=" mt-2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
                  {scholarshipCategory}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Description */}
          <div>
            <p className="text-lg font-semibold text-primary ">
              Scholarship Description
            </p>
            <p className="text-gray-700  dark:text-gray-300 leading-relaxed mt-3">
              {scholarshipName}
            </p>

            {/* Post Date */}
            <p className="text-gray-600  text-sm mt-3">
              <span className="font-medium text-base dark:text-gray-300 ">
                Posted on :
              </span>{" "}
              <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                {new Date(scholarshipPostDate).toLocaleDateString()}
              </span>
            </p>
            <p className="text-gray-600  text-sm mt-3">
              <span className="font-medium text-base dark:text-gray-300 ">
                Application Fees :
              </span>{" "}
              <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                $ {applicationFees}
              </span>
            </p>

            <p className="text-gray-600  text-sm mt-3">
              <span className="font-medium text-base dark:text-gray-300 ">
                Service Charge :
              </span>{" "}
              <span className="py-1 px-3 bg-blue-300 rounded-xl font-medium">
                $ {serviceCharge}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleApply(_id)}
          className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Apply Scholarship →
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
