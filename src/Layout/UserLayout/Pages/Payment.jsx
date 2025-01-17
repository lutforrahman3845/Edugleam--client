import { useParams } from "react-router-dom";
import useScholarshipInfo from "../../../Hooks/useScholarshipInfo";
import Loading from "../../Components/Loading";
import docTitle from "../../../Hooks/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../Components/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const { id } = useParams();
  const { scholarShipDetails, scholarshipDetailsLoading } =
    useScholarshipInfo(id);
  const totalFees =
    (parseFloat(scholarShipDetails?.applicationFees) || 0) +
    (parseFloat(scholarShipDetails?.serviceCharge) || 0);
  docTitle("Apply | EduGleam");
  if (scholarshipDetailsLoading) return <Loading></Loading>;
  return (
    <div>
      <div className=" flex flex-col items-center px-3 font-roboto pt-10">
        {/* Payment Header */}
        <div className="bg-gray-100 dark:bg-secondary  shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-blue-600 font-poppins">
            Secure Scholarship Payment
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
            Complete your payment to apply for the scholarship.
          </p>
        </div>

        {/* Scholarship Details */}
        <div className="bg-gray-100 dark:bg-secondary  shadow-md rounded-lg p-6 w-full max-w-3xl mt-6">
          <h3 className="text-lg font-semibold font-poppins text-primary">
            Scholarship Details :
          </h3>
          <div className="mt-3 text-gray-600 dark:text-gray-300">
            <p>
              <strong className="dark:text-white">Scholarship:</strong>{" "}
              {scholarShipDetails?.scholarshipName}
            </p>
            <p>
              <strong className="dark:text-white">University:</strong>{" "}
              {scholarShipDetails?.universityName}
            </p>
            <p>
              <strong className="dark:text-white">Scholarship Category:</strong>{" "}
              {scholarShipDetails?.scholarshipCategory}
            </p>
            <p>
              <strong className="dark:text-white">Subject:</strong>{" "}
              {scholarShipDetails?.subjectCategory}
            </p>
          </div>
          <h3 className="text-lg font-semibold mt-4 font-poppins text-primary">
            Payment Details :
          </h3>
          <div className="mt-1 text-gray-600">
            <p>
              <strong className="dark:text-white">Application Fee:</strong>{" "}
              <span className="text-green-600 font-bold">
                {" "}
                ${scholarShipDetails?.applicationFees}
              </span>
            </p>
            <p>
              <strong className="dark:text-white">Service Charge:</strong>{" "}
              <span className="text-green-600 font-bold">
                {" "}
                ${scholarShipDetails?.serviceCharge}
              </span>
            </p>
            <hr className="my-2" />
            <p>
              <strong className="dark:text-white">Total Amount:</strong>{" "}
              <span className="text-green-600 font-bold"> ${totalFees}</span>
            </p>
          </div>
        </div>

        {/* Payment Component */}
        <div className="bg-gray-100 dark:bg-secondary shadow-md rounded-lg p-3 md:p-6 w-full max-w-3xl mt-6">
          <h3 className="text-lg font-semibold font-poppins text-primary mb-4">
            Enter Payment Details :
          </h3>
          <Elements stripe={stripePromise}>
            <CheckOutForm 
            totalFees={totalFees}
            universityName={ scholarShipDetails?.universityName }
            scholarshipCategory={ scholarShipDetails?.scholarshipCategory}
            subjectCategory={ scholarShipDetails?.subjectCategory}
            ScholarshipId={scholarShipDetails?._id}
            />
          </Elements>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-gray-500 text-sm text-center">
          <p>🔒 Your payment is secure and encrypted.</p>
          <p>If you encounter any issues, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
