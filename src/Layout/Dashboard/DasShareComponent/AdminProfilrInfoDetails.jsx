import useAllReviews from "../DasHooks/useAllReviews";
import useTotalAppliedScholarship from "../DasHooks/useTotalAppliedScholarship";
import useTotalScholarships from "../DasHooks/useTotalScholarships";
import useTotalUser from "../DasHooks/useTotalUser";

const AdminProfileInfoDetails = () => {
  const totalUsersCount = useTotalUser();
  const totalScholarships = useTotalScholarships();
  const { allReviews } = useAllReviews();
  const allAppliedScholarships = useTotalAppliedScholarship()
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
        <li>
          <span className="font-medium text-gray-700 font-roboto">
            Total reviews:{" "}
          </span>
          {allReviews?.length}
        </li>
        <li>
          <span className="font-medium text-gray-700 font-roboto">
            Total applied scholarship:{" "}
          </span>
          {allAppliedScholarships?.length}
        </li>
      </ul>
    </div>
  );
};

export default AdminProfileInfoDetails;
