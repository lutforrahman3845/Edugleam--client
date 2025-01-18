import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EditReview = ({ editReview }) => {
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();
  useEffect(() => {
    setRating(editReview.rating);
    setComment(editReview.comment);
  }, [editReview]);
  const { mutateAsync } = useMutation({
    mutationKey: ["updateReview"],
    mutationFn: async (updateReview) => {
      const { data } = await axiosSecure.patch(
        `/updateUserReview/${editReview?._id}`,
        updateReview
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userReviews"]);
      document.getElementById("my_modal_1").close();
      toast.success("Review update successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onError: (error) => {
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutateAsync({
      rating,
      comment,
      date: new Date(),
    });
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update your Review</h3>
        <p className="py-4">Please provide your rating and comments below.</p>

        <form onSubmit={handleSubmit} className="space-y-3 font-roboto">
          {/* Rating Input */}
          <div>
            <label className="font-semibold">Rating</label>
            <ReactStars
              count={5}
              size={30}
              color2={"#ffd700"}
              half={true}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
            />
          </div>

          {/* Review Comment */}
          <div>
            <label className="font-semibold">Your Review</label>
            <textarea
              className="py-5 px-2 border border-primary focus:outline-primary rounded-md w-full mt-3"
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="modal-action">
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_1").close()}
              className="btn"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-3 rounded-md font-medium"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditReview;
