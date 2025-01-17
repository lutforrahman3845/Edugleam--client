import AdminProfileInfoDetails from "./AdminProfilrInfoDetails";


const Profile = ({ user }) => {
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
          {user?.role === "admin" ? (
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
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-gray-700 dark:text-white font-roboto">
                  Email:{" "}
                </span>
                {user?.email}
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
