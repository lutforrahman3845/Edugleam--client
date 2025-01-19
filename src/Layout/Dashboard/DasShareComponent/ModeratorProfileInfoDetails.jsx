import useAllReviews from "../DasHooks/useAllReviews";
import useTotalAppliedScholarship from "../DasHooks/useTotalAppliedScholarship";
import useTotalScholarships from "../DasHooks/useTotalScholarships";

const ModeratorProfileInfoDetails = () => {
  const totalScholarships = useTotalScholarships();
  const { allReviews } = useAllReviews();
  const allAppliedScholarships = useTotalAppliedScholarship()
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">Details</h3>
      <ul>
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
            Total Reviews:{" "}
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

export default ModeratorProfileInfoDetails;
