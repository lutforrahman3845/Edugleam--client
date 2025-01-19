import React, { useState } from "react";
import ReactStars from "react-stars";
import useAuth from "../../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ReviewModal = ({ ReviewInfo }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { universityName, subjectCategory, scholarshipId } = ReviewInfo;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const reviewerName = user?.displayName;
  const reviewerEmail = user?.email;
  const reviewerPhoto = user?.photoURL;
  const { mutateAsync } = useMutation({
    mutationKey: ["addReview"],
    mutationFn: async (reviewData) => {
      const { data } = await axiosSecure.post("/reviews", reviewData);
      return data;
    },
    onSuccess: () => {
      document.getElementById("my_modal_5").close();
      toast.success("Add review successfully", {
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
      toast.error(`${error.response?.data?.message }`, {
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
      universityName,
      subjectCategory,
      scholarshipId,
      reviewerName,
      reviewerEmail,
      reviewerPhoto,
      rating,
      comment,
      date: new Date(),
    });
    e.target.reset();
    setComment("")
    setRating(0)
  };

  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Leave a Review</h3>
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
              className="py-5 px-2 border border-primary focus:outline-primary rounded-md w-full"
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="modal-action">
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn"
            >
              Close
            </button>
            <button type="submit" className="bg-primary text-white px-3 rounded-md font-medium">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ReviewModal;
