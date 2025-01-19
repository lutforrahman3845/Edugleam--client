import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EditApplication = ({ applicationEdit }) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const [photoPreview, setPhotoPreview] = useState(
    applicationEdit?.photo || ""
  );
  const [degree, setDegree] = useState("");
  const [gender, setGender] = useState("");
  const [studyGap, setStudyGap] = useState("");
  useEffect(() => {
    if (applicationEdit) {
      setGender(applicationEdit?.gender);
      setDegree(applicationEdit?.degree);
      setStudyGap(applicationEdit?.studyGap);
    }
  }, [applicationEdit]);
  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(
        `/updateApplication/${applicationEdit?._id}`,
        data
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userApplication"]);
      document.getElementById("my_modal_1").close();
      toast.success("Application update successfully", {
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
    onError:(error)=>{
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
    }
  });

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const photo = photoPreview ? photoPreview : applicationEdit?.photo;
    const address = form.address.value;
    const gender = form.gender.value;
    const degree = form.degree.value;
    const sscResult = form.sscResult.value;
    const hscResult = form.hscResult.value;
    const studyGap = form.studyGap.value;

    mutateAsync({
      phone,
      photo,
      address,
      gender,
      degree,
      sscResult,
      hscResult,
      studyGap,
    });
  };
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "appliyedUserImgae");
      const { data: uploadResponse } = await axios.post(
        `https://api.cloudinary.com/v1_1/dyeotrpkd/image/upload`,
        formData
      );
      const uploadedPhoto = uploadResponse?.url;
      setPhotoPreview(uploadedPhoto);
    }
  };
  const handleCloseModal = () => {
    document.getElementById("my_modal_1").close();
    const form = document.getElementById("editForm");
    form.reset();
    setPhotoPreview("");
  };
  return (
    <dialog id="my_modal_1" className="modal ">
      <div className="modal-box no-scrollbar w-full max-w-2xl">
        <form onSubmit={handleForm} className="space-y-3 " id="editForm">
          {/* Photo Preview & Upload */}
          <div className="flex flex-col items-center">
            <img
              src={photoPreview || applicationEdit?.photo}
              alt="Applicant"
              className="w-24 h-24 rounded-full border object-cover border-gray-300 shadow-md mb-2"
            />
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
              onChange={handlePhotoChange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              defaultValue={applicationEdit?.phone}
              name="phone"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">Address</label>
            <input
              type="text"
              defaultValue={applicationEdit?.userAddress}
              name="address"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Applying Degree */}
          <div>
            <label className="font-semibold">Applying Degree</label>
            <select
              name="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
            >
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          {/* SSC Result */}
          <div>
            <label className="font-semibold">SSC Result</label>
            <input
              type="text"
              defaultValue={applicationEdit?.sscResult}
              name="sscResult"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
              required
            />
          </div>

          {/* HSC Result */}
          <div>
            <label className="font-semibold">HSC Result</label>
            <input
              type="text"
              defaultValue={applicationEdit?.hscResult}
              name="hscResult"
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
              required
            />
          </div>

          {/* Study Gap */}
          <div>
            <label className="font-semibold">Study Gap</label>
            <select
              name="studyGap"
              value={studyGap}
              onChange={(e) => setStudyGap(e.target.value)}
              className="p-2 border border-primary focus:outline-primary rounded-md w-full"
            >
              <option value="No">No</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="More than 2 Years">More than 2 Years</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handleCloseModal}
              type="button"
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button type="submit" className="btn bg-primary text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditApplication;
