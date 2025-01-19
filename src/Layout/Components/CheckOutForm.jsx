import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import ApplicantForm from "./ApplicantForm ";

const CheckOutForm = ({
  totalFees,
  universityName,
  scholarshipCategory,
  subjectCategory,
  ScholarshipId,
  applicationFees,
  serviceCharge,
  address,
  applicationDeadline
}) => {
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(true);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { applicationFees: totalFees })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalFees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
      toast.error(`${confirmError.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        setPaymentSuccess(true);
        toast.success("Payment successful Done  ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <>
      {!paymentSuccess ? (
        <form onSubmit={handleSubmit} className="font-roboto">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="w-full bg-primary py-2 px-3 mt-4 rounded-md text-white font-semibold disabled:bg-gray-400    disabled:cursor-not-allowed disabled:text-gray-200"
          >
            Pay
          </button>
          <p className="mt-1 text-sm text-red-500 italic">{error}</p>
        </form>
      ) : (
        <div>
          {transactionId && (
            <p className="mt-2 text-green-400 italic">
              Payment Succeeded .Now fill up This requerment
            </p>
          )}
          <ApplicantForm
          universityName={universityName}
          scholarshipCategory={scholarshipCategory}
          subjectCategory={subjectCategory}
          ScholarshipId={ScholarshipId}
          applicationFees={applicationFees}
          serviceCharge={serviceCharge}
          address={address}
          applicationDeadline={applicationDeadline}
        />
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
