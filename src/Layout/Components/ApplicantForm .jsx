import { useForm } from "react-hook-form";
import axios from "axios";
import useUserDB from "../../Hooks/useUserDB";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApplicantForm = ({
  universityName,
  scholarshipCategory,
  subjectCategory,
  ScholarshipId,
  applicationFees,
  serviceCharge,
  address,
  applicationDeadline,
}) => {
  const axiosSecure = useAxiosSecure();
  const [appling, setApplying] = useState(false);
  const { userDB } = useUserDB();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // Ensure all fields are filled
    if (
      !data.phone ||
      !data.userAddress ||
      !data.sscResult ||
      !data.hscResult
    ) {
      return toast.success("Please fill all required fields", {
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

    const formData = new FormData();
    formData.append("file", data.photo[0]);
    formData.append("upload_preset", "appliyedUserImgae");

    try {
      setApplying(true);
      const { data: uploadResponse } = await axios.post(
        `https://api.cloudinary.com/v1_1/dyeotrpkd/image/upload`,
        formData
      );
      const uploadedPhoto = uploadResponse?.url;

      // Add user details and other information
      const finalData = {
        ...data,
        photo: uploadedPhoto,
        userName: userDB?.name,
        userEmail: userDB?.email,
        userId: userDB?._id,
        applicationFees: applicationFees,
        serviceCharge: serviceCharge,
        address: address,
        scholarshipId: ScholarshipId,
        applicationDeadline:applicationDeadline,
        submissionDate: new Date().toISOString(),
      };

      await axiosSecure.post("/applingScholarship", finalData).then((res) => {
        if (res.data.insertedId) {
          toast.success("Apply Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        reset();
        navigate("/");
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
      setApplying(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 w-full max-w-3xl font-roboto"
    >
      <h2 className="text-xl font-semibold text-primary mb-4 font-poppins">
        Applicant Information
      </h2>

      {/* Number */}
      <label className="block mb-2">Phone Number:</label>
      <input
        type="text"
        {...register("phone", { required: true })}
        className="border p-2 rounded w-full bg-white text-gray-800"
      />
      {errors.phone && (
        <p className="text-red-500">Phone number is required.</p>
      )}

      {/* Photo */}
      <label className="block mt-3">Upload Photo:</label>
      <input
        type="file"
        {...register("photo", { required: true })}
        className="border p-2 rounded w-full"
      />
      {errors.photo && <p className="text-red-500">Photo is required.</p>}

      {/* Address */}
      <label className="block mt-3">
        Address (Village, District, Country):
      </label>
      <input
        type="text"
        {...register("userAddress", { required: true })}
        className="border p-2 rounded w-full bg-white text-gray-800"
      />
      {errors.address && <p className="text-red-500">Address is required.</p>}

      {/* Gender */}
      <label className="block mt-3">Gender:</label>
      <select
        {...register("gender")}
        className="border p-2 rounded w-full bg-white text-gray-800"
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      {/* Degree */}
      <label className="block mt-3">Applying Degree:</label>
      <select
        {...register("degree")}
        className="border p-2 rounded w-full bg-white text-gray-800"
      >
        <option>Diploma</option>
        <option>Bachelor</option>
        <option>Masters</option>
      </select>

      {/* SSC result */}
      <label className="block mt-3">SSC Result:</label>
      <input
        type="text"
        {...register("sscResult", { required: true })}
        className="border p-2 rounded w-full bg-white text-gray-800"
      />
      {errors.sscResult && (
        <p className="text-red-500">SSC result is required.</p>
      )}

      {/* HSC result */}
      <label className="block mt-3">HSC Result:</label>
      <input
        type="text"
        {...register("hscResult", { required: true })}
        className="border p-2 rounded w-full bg-white text-gray-800"
      />
      {errors.hscResult && (
        <p className="text-red-500">HSC result is required.</p>
      )}

      {/*  Gap */}
      <label className="block mt-3">Study Gap (if any):</label>
      <select
        {...register("studyGap")}
        className="border p-2 rounded w-full bg-white text-gray-800"
      >
        <option>No Gap</option>
        <option>1 Year</option>
        <option>2 Years</option>
        <option>More than 2 Years</option>
      </select>

      {/* Read-Only Fields */}
      <label className="block mt-3">University Name:</label>
      <input
        type="text"
        value={universityName}
        {...register("universityName")}
        readOnly
        className="border p-2 rounded w-full bg-gray-200 text-gray-800"
      />

      <label className="block mt-3">Scholarship Category:</label>
      <input
        type="text"
        value={scholarshipCategory}
        {...register("scholarshipCategory")}
        readOnly
        className="border p-2 rounded w-full bg-gray-200 text-gray-800"
      />

      <label className="block mt-3">Subject Category:</label>
      <input
        type="text"
        value={subjectCategory}
        {...register("subjectCategory")}
        readOnly
        className="border p-2 rounded w-full bg-gray-200 text-gray-800"
      />

      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded mt-4 w-full"
      >
        {appling ? "Submitting" : "Submit"}
      </button>
    </form>
  );
};

export default ApplicantForm;
