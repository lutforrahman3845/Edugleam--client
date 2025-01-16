const FAQSection = () => {
  return (
    <section className=" pt-16 font-roboto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary font-poppins">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-8">
          Have questions about scholarships? Find answers here!
        </p>

        <div className="max-w-7xl mx-auto space-y-2">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium font-poppins">
              What is a scholarship?
            </div>
            <div className="collapse-content">
              <p>
                A scholarship is a financial aid award given to students to help
                them pay for their education. Scholarships can be merit-based,
                need-based, or awarded for specific achievements or skills.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium font-poppins">
              How can I apply for scholarships?
            </div>
            <div className="collapse-content">
              <p>
                You can apply for scholarships by researching available
                opportunities, reviewing eligibility requirements, and
                submitting applications through the scholarship provider’s
                portal or website.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium font-poppins">
              Are scholarships only for college students?
            </div>
            <div className="collapse-content">
              <p>
                No, scholarships are available for students at various levels of
                education, including high school, undergraduate, graduate, and
                even doctoral programs.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium font-poppins">
              Do I need to repay a scholarship?
            </div>
            <div className="collapse-content">
              <p>
                No, scholarships do not require repayment. However, they may
                have conditions such as maintaining a certain GPA or completing
                specific academic programs.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium font-poppins">
              Can international students apply for scholarships?
            </div>
            <div className="collapse-content">
              <p>
                Yes, many scholarships are available to international students.
                You should check each scholarship’s eligibility criteria to
                determine whether you qualify as an international student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
