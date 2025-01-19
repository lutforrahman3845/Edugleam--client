import { VscPreview } from "react-icons/vsc";
import useAppliedScholarship from "../DasHooks/useAppliedScholarship";
import useUserReview from "../DasHooks/useUserReview";
import AdminProfileInfoDetails from "./AdminProfilrInfoDetails";
import ModeratorProfileInfoDetails from "./ModeratorProfileInfoDetails";
import { IoIosDocument } from "react-icons/io";

const Profile = ({ user }) => {
  const { appliedScholarship } = useAppliedScholarship();
  const { userReviews } = useUserReview();
  return (
    <section className="flex flex-col items-center py-12 ">
      <div className="max-w-lg w-full bg-white dark:bg-secondary shadow-md rounded-lg overflow-hidden">
        <div className="bg-primary text-white p-6 text-center">
          <img
            src={user?.photo}
            alt={user?.name}
            className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white"
          />
          <h2 className="mt-4 text-2xl font-bold font-poppins">{user?.name}</h2>
          <p className="mt-1 text-sm font-roboto">{user?.email}</p>
          {!user?.role ? (
            <span className="mt-3 inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              User
            </span>
          ) : user?.role === "admin" ? (
            <span className="mt-3 inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {user?.role}
            </span>
          ) : (
            <div>
              {user?.role === "moderator" && (
                <span className="mt-3 inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {user?.role}
                </span>
              )}
            </div>
          )}
        </div>
        {!user?.role && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 font-poppins">
              User Details
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
                <p className="text-2xl font-bold">{userReviews?.length}</p>
                <p className="text-lg font-semibold font-roboto flex items-center gap-2">
                  <VscPreview className="text-2xl" />
                  My Reviews
                </p>
              </li>
              <li className="py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg ">
                <p className="text-2xl font-bold">
                  {appliedScholarship?.length}
                </p>
                <p className="text-base font-semibold font-roboto flex items-center gap-2">
                  <IoIosDocument className="text-2xl" />
                  My Applications
                </p>
              </li>
            </ul>
          </div>
        )}

        {user?.role === "admin" ? (
          <AdminProfileInfoDetails />
        ) : (
          <div>
            {user?.role === "moderator" && <ModeratorProfileInfoDetails />}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
