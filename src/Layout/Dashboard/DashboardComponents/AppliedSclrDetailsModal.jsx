const AppliedSclrDetailsModal = ({ details }) => {
  const {
    photo,
    userName,
    userEmail,
    universityName,
    subjectCategory,
    sscResult,
    degree,
    hscResult,
    studyGap,
    userAddress,
    submissionDate,
    gender
  } = details;
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box no-scrollbar font-roboto">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={photo}
            alt={userName}
          />
          <div>
            <h4 className="text-lg font-bold text-primary">{userName}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {userEmail}
            </p>
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300  sm:space-y-1 mt-4">
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Adreess:</strong> {userAddress}
          </p>
          <p>
            <strong>University Name:</strong> {universityName}
          </p>
          <p>
            <strong>Subject Category:</strong> {subjectCategory}
          </p>
          <p>
            <strong>Degree:</strong> {degree}
          </p>
          <p>
            <strong>SSC Resilt:</strong> {sscResult} GPA
          </p>
          <p>
            <strong>HSC Resilt:</strong> {hscResult} GPA
          </p>
          <p>
            <strong>Study gap:</strong> {studyGap}
          </p>

          <p>
            <strong>Submission Date:</strong>{" "}
            {new Date(submissionDate).toLocaleString()}
          </p>
        </div>
      </div>
    </dialog>
  );
};

export default AppliedSclrDetailsModal;
