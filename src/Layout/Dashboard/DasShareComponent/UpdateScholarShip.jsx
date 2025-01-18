import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UpdateScholarShip = ({ updateScholarShip: scholarship }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [subjectCate, setSubjectCate] = useState("");
  const [scholarshipCate, setScholarshipCate] = useState("");
  const [scholarshipdgre, setScholarshipdgre] = useState("");
  const [applicationDdline, setApplicationDdline] = useState(null);
  useEffect(() => {
    setSubjectCate(scholarship?.subjectCategory);
    setScholarshipCate(scholarship?.scholarshipCategory);
    setScholarshipdgre(scholarship?.degree);
    setApplicationDdline(scholarship?.applicationDeadline);
  }, [scholarship]);
  const { mutateAsync } = useMutation({
    mutationKey: ["updateScholarshipdata"],
    mutationFn: async (updateScholarship) => {
      const { data } = await axiosSecure.patch(
        `/updateScholarship/${scholarship?._id}`,
        updateScholarship
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mangeScholarship"]);
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
    const form = e.target;
    const scholarshipName = form.scholarshipName.value;
    const universityName = form.universityName.value;
    const subjectCategory = subjectCate;
    const scholarshipCategory = scholarshipCate;
    const degree = scholarshipdgre;
    const tuitionFees = form.tuitionFees.value;
    const applicationDeadline = applicationDdline;
    mutateAsync({
      scholarshipName,
      universityName,
      subjectCategory,
      scholarshipCategory,
      degree,
      tuitionFees,
      applicationDeadline,
    });
    form.reset()
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-full max-w-4xl font-roboto no-scrollbar">
        <h3 className="font-bold text-lg font-poppins text-center text-primary">
          Update Scholarship
        </h3>
        <form onSubmit={handleSubmit}>
          {/* scholarshipName */}
          <div>
            <label className="font-semibold">Scholarship Name</label>
            <input
              type="text"
              defaultValue={scholarship?.scholarshipName}
              name="scholarshipName"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full my-2"
              required
            />
          </div>
          {/* University Name */}
          <div>
            <label className="font-semibold">University Name</label>
            <input
              type="text"
              defaultValue={scholarship?.universityName}
              name="universityName"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full my-2"
              required
            />
          </div>
          {/* subject Category*/}
          <div>
            <label className="font-semibold">Subject Category</label>
            <select
              name="subjectCategory"
              value={subjectCate}
              onChange={(e) => setSubjectCate(e.target.value)}
              className="w-full p-3 border rounded-md dark:bg-white border-primary focus:outline-primary my-2"
            >
              <option value="">Select</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          {/* scholarship Category*/}
          <div>
            <label className="font-semibold">Scholarship Category</label>
            <select
              name="scholarshipCategory"
              value={scholarshipCate}
              onChange={(e) => setScholarshipCate(e.target.value)}
              className="w-full p-3 border rounded-md dark:bg-white border-primary focus:outline-primary my-2"
            >
              <option value="">Select</option>
              <option value="Full fund">Full Fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-Fund</option>
            </select>
          </div>
          {/* scholarship Degree*/}
          <div>
            <label className="font-semibold">Scholarship degree</label>
            <select
              name="degree"
              value={scholarshipdgre}
              onChange={(e) => setScholarshipdgre(e.target.value)}
              className="w-full p-3 border rounded-md dark:bg-white border-primary focus:outline-primary my-2"
            >
              <option value="">Select</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>
          {/* Tuition Fees */}
          <div>
            <label className="font-semibold">Tuition Fees</label>
            <input
              type="text"
              defaultValue={scholarship?.tuitionFees}
              name="tuitionFees"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full my-2"
              required
            />
          </div>
          {/* Application Deadline */}
          <div>
            <label className="font-semibold">Application Deadline</label>
            <DatePicker
              selected={applicationDdline}
              onChange={(date) => {
                setApplicationDdline(date);
              }}
              className="w-full p-2 border rounded-md border-primary dark:bg-white focus:outline-primary"
              wrapperClassName="w-full"
            />
          </div>
          {/* modal action */}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateScholarShip;
