import uselogInUser from "../DasHooks/uselogInUser";
import Profile from "../DasShareComponent/profile";
import Loading from "../../Components/Loading";
import docTitle from "../../../Hooks/Title";

const UserProfile = () => {
  const { logInUser, logInUserLoading } = uselogInUser();
  docTitle("Profile | Dashboard");
  if (logInUserLoading) return <Loading></Loading>;
  return (
    <>
      <Profile user={logInUser}></Profile>
    </>
  );
};

export default UserProfile;
