import React from "react";

import MainSection from "../src/components/MainSection/MainSection";
import Partners from "../src/components/Partners/Partners";
import About from "../src/components/About/About";
import Feedback from "../src/components/Feedback/Feedback";
import Projects from "../src/components/Projects/Projects";
import Advantages from "../src/components/Advantages/Advantages";
import ModalReq from "../src/components/Modal/ModalReq";
import MainContainer from "../src/components/MainContainer/MainContainer";


const Index = () => {

	return (
		<MainContainer title={'Главная страница'} keywords={"сип дома стоительство"}>
			<MainSection />
			<About />
			<Advantages />
			<Projects />
			<Feedback />
			<Partners />
			<ModalReq />
		</MainContainer>
	);
}

export default Index;
