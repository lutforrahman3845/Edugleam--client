import docTitle from "../../../Hooks/Title";
import AboutSection from "../../Components/AboutSection";
import Bannar from "../../Components/Bannar";
import FAQSection from "../../Components/FAQSection";
import ScholarshipBlog from "../../Components/ScholarshipBlog";

const Home = () => {
  docTitle("Home | EduGleam");
  return (
    <div>
      <Bannar />
      <AboutSection />
      <ScholarshipBlog/>
      <FAQSection/>
    </div>
  );
};

export default Home;
