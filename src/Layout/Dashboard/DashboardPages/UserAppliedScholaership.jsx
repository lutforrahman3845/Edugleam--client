import useAppliedScholarship from "../DasHooks/useAppliedScholarship";
import { FiEdit } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const UserAppliedScholaership = () => {
  const { appliedScholarship, loadingAppliedScholar, appliedRefetch } =
    useAppliedScholarship();
  console.log(appliedScholarship);
  return (
    <div className="bg-white dark:bg-secondary font-roboto">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        My Applied Scholarship
      </h1>
      <div className="mt-6">
        {appliedScholarship.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            No scholarship applied{" "}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>No</th>
                  <th>University Name</th>
                  <th>University Address</th>
                  <th>Application Feedback</th>
                  <th>Subject Category</th>
                  <th>Applied Degree</th>
                  <th>Application Fees</th>
                  <th>Service Charge</th>
                  <th>Application Status</th>
                  <th>Action</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {appliedScholarship.map((scholarship, index) => (
                  <tr key={scholarship?._id}>
                    <th>{index + 1}</th>
                    <td>{scholarship?.universityName}</td>
                    <td>{scholarship?.address}</td>
                    <td>
                      {scholarship?.feedback
                        ? scholarship?.feedback
                        : "No feedback yet"}
                    </td>
                    <td>{scholarship?.subjectCategory}</td>
                    <td>{scholarship?.degree}</td>
                    <td>{scholarship?.applicationFees}</td>
                    <td>{scholarship?.serviceCharge}</td>
                    <td>
                      <span
                        className={`text-white py-1 px-2 ${
                          scholarship?.status === "processing" &&
                          "bg-yellow-500  rounded-full"
                        } ${
                          scholarship?.status === "completed" &&
                          "bg-green-400  rounded-full"
                        }
                    ${
                      scholarship?.status === "rejected" ||
                      (!scholarship?.status && "bg-red-500  rounded-full")
                    }
                     `}
                      >
                        {scholarship?.status ? scholarship?.status : " pending"}
                      </span>
                    </td>
                    <td className="text-lg flex gap-2">
                      <button>
                        <FiEdit />
                      </button>
                      <button className="text-primary">
                        <BiDetail />
                      </button>
                      <button className="text-red-700">
                      <RiDeleteBinLine />
                      </button>
                    </td>
                    <td><button className="text-white bg-primary py-1 px-2 rounded-md">Review</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAppliedScholaership;
