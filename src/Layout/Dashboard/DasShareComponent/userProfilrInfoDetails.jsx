import useTotalScholarships from "../DasHooks/useTotalScholarships";
import useTotalUser from "../DasHooks/useTotalUser";

const AdminProfileInfoDetails = () => {
  const totalUsersCount = useTotalUser();
  const totalScholarships = useTotalScholarships();
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 font-poppins">Details</h3>
      <ul>
        <li>
          <span className="font-medium text-gray-700 font-roboto">
            Total users:{" "}
          </span>
          {totalUsersCount?.totalUser ? totalUsersCount?.totalUser : 0}
        </li>
        <li>
          <span className="font-medium text-gray-700 font-roboto">
            Total scholarships:{" "}
          </span>
          {totalScholarships?.totalScholerships
            ? totalScholarships?.totalScholerships
            : 0}
        </li>
      </ul>
    </div>
  );
};

export default AdminProfileInfoDetails;
