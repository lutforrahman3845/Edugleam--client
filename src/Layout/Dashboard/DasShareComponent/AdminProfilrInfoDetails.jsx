import useAllReviews from "../DasHooks/useAllReviews";
import useTotalAppliedScholarship from "../DasHooks/useTotalAppliedScholarship";
import useTotalScholarships from "../DasHooks/useTotalScholarships";
import useTotalUser from "../DasHooks/useTotalUser";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { IoIosDocument } from "react-icons/io";

const AdminProfileInfoDetails = () => {
  const totalUsersCount = useTotalUser();
  const totalScholarships = useTotalScholarships();
  const { allReviews } = useAllReviews();
  const allAppliedScholarships = useTotalAppliedScholarship();
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 font-poppins">Details</h3>
      <ul className="grid sm:grid-cols-2 gap-4">
        <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
          <p className="text-2xl font-bold">
            {totalUsersCount?.totalUser ? totalUsersCount?.totalUser : 0}
          </p>
          <p className="text-lg font-semibold font-roboto flex items-center gap-2">
            <FaUsers className="text-2xl" />
            Users
          </p>
        </li>
        <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
          <p className="text-2xl font-bold">
            {totalScholarships?.totalScholerships
              ? totalScholarships?.totalScholerships
              : 0}
          </p>
          <p className="text-lg font-semibold font-roboto flex items-center gap-2">
            <FaGraduationCap className="text-2xl" />
            Scholarships
          </p>
        </li>
        <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
          <p className="text-2xl font-bold">
          {allReviews?.length}
          </p>
          <p className="text-lg font-semibold font-roboto flex items-center gap-2">
            <VscPreview className="text-2xl" />
            Reviews
          </p>
        </li>
        <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
          <p className="text-2xl font-bold">
          {allAppliedScholarships?.length}
          </p>
          <p className="text-base font-semibold font-roboto flex items-center gap-2">
            <IoIosDocument className="text-2xl" />
            Applications
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AdminProfileInfoDetails;
