import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import useMangeScholarShip from "../DasHooks/useMangeScholarShip";
import { FiEdit } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalDetaisForUser from "../DashboardComponents/ModalDetaisForUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UpdateScholarShip from "../DasShareComponent/UpdateScholarShip";

const MangeScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const [scholarshipId, setScholarshipId] = useState(null);
  const [updateScholarShip, setUpdateScholarShip] = useState({});
  const { mangeScholarship, mangeScholarshipLoading, mangeScholarshipRefetch } =
    useMangeScholarShip();
  const handleDetails = (_id) => {
    setScholarshipId(_id);
    document.getElementById("my_modal_3").showModal();
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
          const res = await axiosSecure.delete(`/deleteScholarship/${id}`);
          if (res.data.deletedCount > 0) {
            mangeScholarshipRefetch();
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

  const handleEdit = (scholarship) => {
    document.getElementById("my_modal_1").showModal();
    setUpdateScholarShip(scholarship);
  };

  docTitle("Mange Scholarship | Dashboard");
  if (mangeScholarshipLoading) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-secondary font-roboto rounded-md">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        Manage Scholarships
      </h1>
      <div className="mt-6">
        {mangeScholarship?.length <= 0 ? (
          <div className="text-red-600 text-center text-lg ">
            {" "}
            Scholarships are not yet added. Please Add first!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Scholarship name</th>
                  <th>University Name</th>
                  <th>Subject Category </th>
                  <th>Degree</th>
                  <th>Application Fees</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mangeScholarship?.map((scholarship, index) => (
                  <tr key={scholarship?._id}>
                    <th>{index + 1}</th>
                    <td>{scholarship?.scholarshipName}</td>
                    <td>{scholarship?.universityName}</td>
                    <td>{scholarship?.subjectCategory}</td>
                    <td>{scholarship?.degree}</td>
                    <td>{scholarship?.applicationFees}</td>
                    <td className="text-lg flex gap-2">
                      <button onClick={() => handleEdit(scholarship)}>
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDetails(scholarship?._id)}
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
      {/* edit scholarship */}
      <UpdateScholarShip updateScholarShip={updateScholarShip} />
    </div>
  );
};

export default MangeScholarship;
