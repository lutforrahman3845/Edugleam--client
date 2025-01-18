import useScholarshipInfo from "../../../Hooks/useScholarshipInfo";

const ModalDetaisForUser = ({ id, onClose }) => {
  const { scholarShipDetails } = useScholarshipInfo(id);

  const {
    universityLogo,
    universityName,
    scholarshipCategory,
    universityCity,
    universityCountry,
    applicationDeadline,
    subjectCategory,
    tuitionFees,
    scholarshipPostDate,
    serviceCharge,
    applicationFees,
  } = scholarShipDetails || {};
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box no-scrollbar max-w-2xl bg-white dark:bg-gray-900 shadow-lg pt-2 pb-6 px-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <p></p>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost text-lg"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-4 my-3 md:my-4">
          <img
            src={universityLogo}
            alt={universityName}
            className="w-16 h-16 object-contain rounded-full border shadow-lg p-2 bg-white border-primary"
          />
          <div>
            <h2 className="text-lg  sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {universityName}
            </h2>
          </div>
        </div>

        {/* Scholarship Details */}
        <div className="text-gray-700 dark:text-gray-300 space-x-2 sm:space-y-3">
          <p>
          <strong>Scholarship:</strong>{scholarshipCategory}
          </p>
          <p>
            <strong>Subject:</strong> {subjectCategory || "N/A"}
          </p>
          <p>
            <strong>Tuition fees:</strong> ${tuitionFees || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <strong>Location:</strong> {universityCity}, {universityCountry}
          </p>
          <p className="flex items-center gap-2">
            <strong>Application Deadline:</strong>{" "}
            {applicationDeadline
              ? new Date(applicationDeadline).toLocaleDateString()
              : "N/A"}
          </p>

          <p>
            <strong>Post Date:</strong>{" "}
            {scholarshipPostDate
              ? new Date(scholarshipPostDate).toLocaleDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Service Charge:</strong> ${serviceCharge || "N/A"}
          </p>
          <p>
            <strong>Application Fees:</strong> ${applicationFees || "N/A"}
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default ModalDetaisForUser;
