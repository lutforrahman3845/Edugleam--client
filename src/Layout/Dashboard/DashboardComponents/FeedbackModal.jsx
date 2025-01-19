import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const FeedbackModal = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationKey: ["sentFeedBack"],
    mutationFn: async (feedback) => {
      const { data } = await axiosSecure.patch(`/giveFeedback/${id}`,feedback);
      return data;
    },
    onSuccess: () => {
          document.getElementById("my_modal_1").close();
          toast.success("Feedback given successfully", {
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
    const feedback = e.target.feedback.value;
    mutateAsync({feedback});
    e.target.reset()
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box no-scrollbar">
        <h3 className="font-bold text-lg mb-2">Leave a Feedback</h3>
        <form onSubmit={handleSubmit} className="space-y-3 font-roboto">
          {/* Review Comment */}
          <div>
            <textarea
              className="px-2 border border-primary focus:outline-primary rounded-md w-full"
              placeholder="Write your feedback here..."
              name="feedback"
              rows={4}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FeedbackModal;
