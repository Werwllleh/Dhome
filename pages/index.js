import Navbar from "../src/components/Navbar/Navbar";
import MainSection from "../src/components/MainSection/MainSection";
import Partners from "../src/components/Partners/Partners";
import About from "../src/components/About/About";
import Feedback from "../src/components/Feedback/Feedback";
import Projects from "../src/components/Projects/Projects";
import Advantages from "../src/components/Advantages/Advantages";


const Index = () => {
	return (
		<>
			<Navbar />
			<MainSection />
			<Partners />
			<About />
			<Advantages />
			<Feedback />
			<Projects />
		</>
	);
}

export default Index;
