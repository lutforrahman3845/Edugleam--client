import uselogInUser from "../DasHooks/uselogInUser";
import Profile from "../DasShareComponent/profile";
import Loading from "../../Components/Loading"

const UserProfile = () => {
    const {logInUser, logInUserLoading} = uselogInUser()
    if(logInUserLoading) return <Loading></Loading>
    return (
        <>
           <Profile user={logInUser}></Profile>
        </>
    );
};

export default UserProfile;