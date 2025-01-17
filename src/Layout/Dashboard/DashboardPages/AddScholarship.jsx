import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast } from "react-toastify";
import docTitle from "../../../Hooks/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const AddScholarship = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const postedUserEmail = user?.email;
  const [applicationDeadline, setApplicationDeadline] = useState(null);
  const [scholarshipPostDate, setScholarshipPostDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [submitLoading, setSubmitLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.universityLogo[0]);
      formData.append("upload_preset", "ResigtrationUser");
      setSubmitLoading(true);
      const { data: uploadingData } = await axios.post(
        `https://api.cloudinary.com/v1_1/dyeotrpkd/image/upload`,
        formData
      );
      const imageUrl = uploadingData?.url;

      data.universityLogo = imageUrl;
      data.applicationDeadline = new Date(
        applicationDeadline
      )
      data.scholarshipPostDate = new Date(
        scholarshipPostDate
      )

      await axiosSecure.post("/scholarships", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Form submitted successfully!", {
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
        setApplicationDeadline(null)
        reset();
      });
    } catch (error) {
      toast.error(`${error.message} .Please try again.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setSubmitLoading(false);
    }
  };
  docTitle("Add Scholarship | Dashboard");
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl mx-auto p-6 border  rounded-lg shadow-lg bg-white dark:bg-secondary"
      >
        <h2 className="text-2xl font-bold mb-6">Add Scholarship Information</h2>
        {/* Name of the scholarship */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Scholarship Name</label>
          <input
            type="text"
            {...register("scholarshipName", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md  dark:bg-white focus:outline-primary"
          />
          {errors.scholarshipName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.scholarshipName.message}
            </p>
          )}
        </div>

        {/* University Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">University Name</label>
          <input
            type="text"
            {...register("universityName", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
          {errors.universityName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.universityName.message}
            </p>
          )}
        </div>

        {/* University Logo */}
        <div className="mb-4">
          <label className="block font-medium mb-1">University Logo</label>
          <input
            type="file"
            accept="image/*"
            {...register("universityLogo", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
          {errors.universityLogo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.universityLogo.message}
            </p>
          )}
        </div>

        {/* University Country */}
        <div className="mb-4">
          <label className="block font-medium mb-1">University Country</label>
          <input
            type="text"
            {...register("universityCountry", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* University City */}
        <div className="mb-4">
          <label className="block font-medium mb-1">University City</label>
          <input
            type="text"
            {...register("universityCity", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* World Rank */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            University World Rank
          </label>
          <input
            type="number"
            {...register("universityWorldRank", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Subject Category</label>
          <select
            {...register("subjectCategory", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          >
            <option value="">Select</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Engineering">Engineering</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {/* Scholarship Category */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Scholarship Category</label>
          <select
            {...register("scholarshipCategory", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          >
            <option value="">Select</option>
            <option value="Full fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-Fund</option>
          </select>
        </div>

        {/* Degree */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Degree</label>
          <select
            {...register("degree", { required: "This field is required" })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          >
            <option value="">Select</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* Tuition Fees */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Tuition Fees</label>
          <input
            type="number"
            {...register("tuitionFees", { required: "This field is required" })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* Application Fees */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Application Fees</label>
          <input
            type="number"
            {...register("applicationFees", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* Service Charge */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Service Charge</label>
          <input
            type="number"
            {...register("serviceCharge", {
              required: "This field is required",
            })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        {/* Application Deadline */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Application Deadline</label>
          <DatePicker
            selected={applicationDeadline}
            onChange={(date) => {
              setApplicationDeadline(date);
            }}
            minDate={new Date()}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
            wrapperClassName="w-full"
          />
          {errors.applicationDeadline && (
            <p className="text-red-500 text-sm mt-1">
              {errors.applicationDeadline.message}
            </p>
          )}
        </div>

        {/* Scholarship Post Date read only */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Scholarship Post Date
          </label>
          <DatePicker
            selected={scholarshipPostDate}
            onChange={(date) => {
              setScholarshipPostDate(date);
            }}
            disabled
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
            wrapperClassName="w-full"
          />
        </div>

        {/* Posted User Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Posted User Email</label>
          <input
            type="email"
            value={postedUserEmail}
            disabled
            {...register("userEmail", { required: "This field is required" })}
            className="w-full p-2 border rounded-md dark:bg-white focus:outline-primary"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
        >
          {submitLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddScholarship;
