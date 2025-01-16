import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManageAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  const handleRoleChange = async (id, role) => {
    try {
    } catch (errro) {}
  };
  docTitle("Manage user | Dashboard");
  if (usersLoading) return <Loading></Loading>;
  return (
    <div className=" bg-white dark:bg-secondary">
      <h1 className="text-lg md:text-2xl font-semibold text-center font-poppins ">
        {" "}
        All users
      </h1>
      <div className="overflow-x-auto">
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
                        handleRoleChange(user?._id, e.target.value)
                      }
                      className="p-1 border rounded bg-white dark:bg-gray-700"
                    >
                      <option value="">User</option>
                      <option value="moderator">Moderator</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
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
