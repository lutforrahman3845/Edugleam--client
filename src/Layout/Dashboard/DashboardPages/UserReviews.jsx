import useUserReview from "../DasHooks/useUserReview";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import EditReview from "../DasShareComponent/EditReview";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserReviews = () => {
    const axiosSecure = useAxiosSecure();
  const { userReviews, userReviewLoading, userReviewRefetch } = useUserReview();
  const [editReview, setEditReview] = useState({});
  const handleEdit = (review) => {
    document.getElementById("my_modal_1").showModal();
    setEditReview(review);
  };
  const handleDelete = (id)=>{
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
            const res = await axiosSecure.delete(`/deleteUserReview/${id}`);
            if (res.data.deletedCount > 0) {
            userReviewRefetch()
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
  }
  docTitle("My review | Dashboard");
  if (userReviewLoading) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-secondary font-roboto rounded-md">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        My reviews
      </h1>
      <div className="mt-6">
        {userReviews?.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            Reviews are not yet provided{" "}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>university name</th>
                  <th>Subject category</th>
                  <th>Review comments</th>
                  <th>Review date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userReviews?.map((review, indx) => (
                  <tr key={review?._id}>
                    <th>{indx + 1}</th>
                    <td>{review?.universityName}</td>
                    <td>{review?.subjectCategory}</td>
                    <td className="max-w-xs">
                      <span>{review?.comment}</span>
                    </td>
                    <td>{new Date(review?.date).toLocaleDateString()}</td>
                    <td className="text-lg flex gap-2">
                      <button onClick={() => handleEdit(review)}>
                        <FiEdit />
                      </button>

                      <button
                         onClick={() => handleDelete(review?._id)}
                        className="text-red-700"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <EditReview editReview={editReview} />
    </div>
  );
};

export default UserReviews;
