import React from "react";

import Navbar from "../src/components/Navbar/Navbar";
import MainSection from "../src/components/MainSection/MainSection";
import Partners from "../src/components/Partners/Partners";
import About from "../src/components/About/About";
import Feedback from "../src/components/Feedback/Feedback";
import Projects from "../src/components/Projects/Projects";
import Advantages from "../src/components/Advantages/Advantages";
import Footer from "../src/components/Footer/Footer";
import ModalReq from "../src/components/Modal/ModalReq";


const Index = () => {

	return (
		<>
			<Navbar />
			<MainSection />
			<About />
			<Advantages />
			<Projects />
			<Feedback />
			<Partners />
			<Footer />
			<ModalReq />
		</>
	);
}

export default Index;
