import { useParams } from "react-router-dom";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import DetailsCard from "../../Components/DetailsCard";
import useScholarshipInfo from "../../../Hooks/useScholarshipInfo";

const ScholarshipDetails = () => {
  const { id } = useParams();

  const { scholarShipDetails, scholarshipDetailsLoading } =
    useScholarshipInfo(id);
  docTitle("Details | EduGleam");
  if (scholarshipDetailsLoading) return <Loading></Loading>;
  return (
    <div className="pt-10">
      <div className="flex justify-center items-center mx-4">
        <DetailsCard details={scholarShipDetails}></DetailsCard>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
