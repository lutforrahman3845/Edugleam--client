import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import { BiDetail } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useState } from "react";
import AppliedSclrDetailsModal from "../DashboardComponents/AppliedSclrDetailsModal";
import FeedbackModal from "../DashboardComponents/FeedbackModal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageAppliedScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const [appliedScholarshipDetails, setAppliedScholarshipDetails] = useState(
    {}
  );
  const [feedbackid, setFeedbackid] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: allAppliedScholarship,
    isLoading: appliedcholarshipLoading,
    refetch: allAppliedScholarshipRefetch,
  } = useQuery({
    queryKey: ["allAppliedScholarship", sort],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/allappliedScholarship?date=${sort}`
      );
      return data;
    },
  });

  const handleDetails = (appliedScholarship) => {
    document.getElementById("my_modal_3").showModal();
    setAppliedScholarshipDetails(appliedScholarship);
  };
  const handleCancel = async (id) => {
     Swal.fire({
      title: "Are you sure?",
      text: "This application will be rejected!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
            const res = await axiosSecure.patch(`/cancelAppliedScholarship/${id}`);
          if (res.data.modifiedCount > 0) {
            allAppliedScholarshipRefetch();
            Swal.fire({
              title: "Rejected!",
              text: "This application has been rejected.",
              icon: "success",
            });
          }
        } catch (error) {
          toast.error(`${error.message}`, {
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
      }
    });
  };

  const handleFeedback = (id) => {
    document.getElementById("my_modal_1").showModal();
    setFeedbackid(id);
  };

  docTitle("All Applied Scholarship | Dashboard");
  if (appliedcholarshipLoading) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-secondary font-roboto rounded-md">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        Manage all applied Scholarships
      </h1>
      <div className="pb-3 flex items-center justify-center mt-8">
        <select
          onChange={(e) => {
            setSort(e.target.value);
            // setCurrentPage(1);
          }}
          value={sort}
          name="sort"
          id="sort"
          className="border-2 border-primary focus:outline-primary p-2  rounded-md dark:bg-secondary"
        >
          <option value="">Sort By date</option>
          <option value="appliedDate">applied date</option>
          <option value="deadline">scholarship deadline</option>
        </select>
      </div>

      <div className="py-6">
        {allAppliedScholarship?.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            No scholarship applied found{" "}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>University Name</th>
                  <th>Subject Category</th>
                  <th>Applicant name</th>
                  <th>Applicant email</th>
                  <th>Application Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allAppliedScholarship?.map((appliedSchlr, index) => (
                  <tr key={appliedSchlr?._id}>
                    <th>{index + 1}</th>
                    <td>{appliedSchlr?.universityName}</td>
                    <td>{appliedSchlr?.subjectCategory}</td>
                    <td>{appliedSchlr?.userName}</td>
                    <td>{appliedSchlr?.userEmail}</td>
                    <td>
                      <span
                        className={`text-white py-1 px-2 text-xs ${
                          appliedSchlr?.status === "processing" &&
                          "bg-yellow-500  rounded-full"
                        } ${
                          appliedSchlr?.status === "completed" &&
                          "bg-green-400  rounded-full"
                        }
                    ${
                      appliedSchlr?.status === "rejected" &&
                      "bg-red-500  rounded-full"
                    }
                    ${
                      !appliedSchlr?.status && "bg-gray-700  rounded-full"
                    }
                     `}
                      >
                        {appliedSchlr?.status
                          ? appliedSchlr?.status
                          : " pending"}
                      </span>
                    </td>
                    <td className="text-2xl flex gap-2">
                      <button
                        onClick={() => handleDetails(appliedSchlr)}
                        className="text-primary"
                      >
                        <BiDetail />
                      </button>
                      <button onClick={() => handleFeedback(appliedSchlr?._id)}>
                        <MdOutlineFeedback />
                      </button>
                      <button
                        onClick={() => handleCancel(appliedSchlr?._id)}
                        className="text-red-700"
                      >
                        <MdOutlineCancelPresentation />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Details Modal */}
      <AppliedSclrDetailsModal details={appliedScholarshipDetails} />
      <FeedbackModal id={feedbackid} />
    </div>
  );
};

export default ManageAppliedScholarship;
