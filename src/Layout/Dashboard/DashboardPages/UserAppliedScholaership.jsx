import useAppliedScholarship from "../DasHooks/useAppliedScholarship";
import { FiEdit } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Loading from "../../Components/Loading";
import ModalDetaisForUser from "../DashboardComponents/ModalDetaisForUser";
import { useState } from "react";
import { toast } from "react-toastify";
import EditApplication from "../DashboardComponents/EditApplication";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import GiveReview from "../DashboardComponents/GiveReview";
import docTitle from "../../../Hooks/Title";

const UserAppliedScholaership = () => {
  const axiosSecure = useAxiosSecure();
  const [scholarshipId, setScholarshipId] = useState(null);
  const [applicationEdit, setApplicationEdit] = useState({});
  const [applicationReview, setApplicationReview] = useState({});
  const { appliedScholarship, loadingAppliedScholar, appliedRefetch } =
    useAppliedScholarship();
  const handleDetails = (_id) => {
    document.getElementById("my_modal_3").showModal();
    setScholarshipId(_id);
  };
  const handleEdit = (scholarship) => {
    if (scholarship?.status) {
      return toast.error("The application is processing,cann't edit now !", {
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
    document.getElementById("my_modal_1").showModal();
    setApplicationEdit(scholarship);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/deleteApplication/${id}`);
          if (res.data.deletedCount > 0) {
            appliedRefetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your application has been deleted.",
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
  const handleReview = (scholarship) => {
    document.getElementById("my_modal_5").showModal();
    setApplicationReview(scholarship);
  };
  docTitle("My Applications | Dashboard");
  if (loadingAppliedScholar) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-secondary font-roboto rounded-md">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        My Applied Scholarship
      </h1>
      <div className="mt-6">
        {appliedScholarship.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            No scholarship applied found{" "}
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
                          appliedSchlr?.status === "rejected" &&
                          "bg-red-500  rounded-full"
                        }
                        ${!appliedSchlr?.status && "bg-gray-700  rounded-full"}
                     `}
                      >
                        {scholarship?.status ? scholarship?.status : " pending"}
                      </span>
                    </td>
                    <td className="text-lg flex gap-2">
                      <button onClick={() => handleEdit(scholarship)}>
                        <FiEdit />
                      </button>
                      <button
                        onClick={() =>
                          handleDetails(scholarship?.scholarshipId)
                        }
                        className="text-primary"
                      >
                        <BiDetail />
                      </button>
                      <button
                        onClick={() => handleDelete(scholarship?._id)}
                        className="text-red-700"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleReview(scholarship)}
                        className="text-white bg-primary py-1 px-2 rounded-md"
                      >
                        Review
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
      <ModalDetaisForUser
        id={scholarshipId}
        onClose={() => {
          setScholarshipId(null);
          document.getElementById("my_modal_3").close();
        }}
      />
      {/* Edit Modal */}
      <EditApplication applicationEdit={applicationEdit} />
      {/* Review Modal */}
      <GiveReview ReviewInfo={applicationReview} />
    </div>
  );
};

export default UserAppliedScholaership;
