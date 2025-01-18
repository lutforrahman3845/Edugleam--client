import ReactStars from "react-stars";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import useAllReviews from "../DasHooks/useAllReviews";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageReview = () => {
  const axiosSecure = useAxiosSecure();
  const { allReviews, reviewsLoading, reviewsRefetch } = useAllReviews();
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
          const res = await axiosSecure.delete(`/deleteReview/${id}`);
          if (res.data.deletedCount > 0) {
            reviewsRefetch();
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
  docTitle("Manage reviews | Dashboard");
  if (reviewsLoading) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-secondary font-roboto rounded-md">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        Manage Reviews
      </h1>
      <div className="pt-6 pb-8 px-4 ">
        {allReviews?.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            Reviews are not yet provided{" "}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {allReviews.map((review) => (
              <div
                key={review?._id}
                className="bg-base-100 shadow-md rounded-lg p-5 border border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={review?.reviewerPhoto}
                      alt={review?.reviewerName}
                      className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold font-poppins dark:text-white">
                        {review?.reviewerName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(review?.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-500 hover:text-red-700 p-2 bg-white rounded-full"
                    title="Delete Review"
                  >
                    <RiDeleteBin5Fill className="text-2xl" />
                  </button>
                </div>

                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-primary">
                    {review?.universityName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {review?.subjectCategory}
                  </p>
                </div>

                <div className="flex items-center mt-3">
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    half={true}
                    value={review?.rating}
                    edit={false}
                  />
                  <span className="ml-2 text-gray-600 text-sm font-medium">
                    ({review?.rating}/5)
                  </span>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 border-l-4 border-primary pl-3">
                  "{review?.comment}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageReview;
