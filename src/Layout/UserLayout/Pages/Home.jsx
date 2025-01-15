import docTitle from "../../../Hooks/Title";
import AboutSection from "../../Components/AboutSection";
import Bannar from "../../Components/Bannar";

const Home = () => {
  docTitle("Home | EduGleam");
  return (
    <div>
      <Bannar />
      <AboutSection />
    </div>
  );
};

export default Home;
