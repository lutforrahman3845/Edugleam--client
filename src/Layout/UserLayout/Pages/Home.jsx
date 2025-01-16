import docTitle from "../../../Hooks/Title";
import AboutSection from "../../Components/AboutSection";
import Bannar from "../../Components/Bannar";
import FAQSection from "../../Components/FAQSection";
import ScholarshipBlog from "../../Components/ScholarshipBlog";
import TopScholarships from "../../Components/TopScholarships";

const Home = () => {
  docTitle("Home | EduGleam");
  return (
    <div>
      <Bannar />
      <AboutSection />
      <TopScholarships/>
      <ScholarshipBlog/>
      <FAQSection/>
    </div>
  );
};

export default Home;
