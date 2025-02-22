import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const ManageAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user: loginUserEmail } = useAuth();
  const [sort, setSort] = useState("all users");
  //   fetch users
  const {
    data: users,
    isLoading: usersLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", sort],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?role=${sort}`);
      return data;
    },
  });
  //   change role
  const handleRoleChange = async (id, newrole, email) => {
    if (email === loginUserEmail?.email) {
      return toast.error("You are the admin . You cannot change your role ! If you want your changes, talk to another admin ", {
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

    try {
      const { data } = await axiosSecure.patch(`/usersRoleChange/${id}`, {
        role: newrole,
      });
      if (data.modifiedCount > 0) {
        toast.success("User role update succsessfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        refetch();
      }
    } catch (errro) {
      toast.error(`${errro.message}`, {
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
  };
  //   delete user
  const handleDeleteUser = (id, email) => {
    if (email === loginUserEmail?.email) {
      return toast.error("You cannot delete your own account", {
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
          const { data } = await axiosSecure.delete(`/delete/user/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
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
  docTitle("Manage user | Dashboard");
  if (usersLoading) return <Loading></Loading>;
  return (
    <div className=" bg-white dark:bg-secondary rounded-md font-roboto">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins ">
        {" "}
        All users
      </h1>
      <div className="pb-6 flex items-center justify-end">
        <select
          onChange={(e) => {
            setSort(e.target.value);
            // setCurrentPage(1);
          }}
          value={sort}
          name="sort"
          id="sort"
          className="border-2 border-primary focus:outline-primary p-2 mr-4 rounded-md dark:bg-secondary"
        >
          <option value="all users">Sort By role</option>
          <option value="">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="overflow-x-auto pb-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.photo}
                            alt={user?.name}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {user?.email}
                    </span>
                  </td>
                  <td>
                    <select
                      value={`${user?.role ? user?.role : "user"}`}
                      onChange={(e) =>
                        handleRoleChange(user?._id, e.target.value, user?.email)
                      }
                      className="p-1 border rounded bg-white dark:bg-secondary"
                    >
                      <option value="">User</option>
                      <option value="moderator">Moderator</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user?._id, user?.email)}
                      className="btn btn-ghost btn-xs"
                    >
                      <RiDeleteBin5Line className="text-xl text-red-700" />
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllUsers;
