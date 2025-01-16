import useTotalScholarships from "../DasHooks/useTotalScholarships";

const ModeratorProfileInfoDetails = () => {
  const totalScholarships = useTotalScholarships();
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
      </ul>
    </div>
  );
};

export default ModeratorProfileInfoDetails;
