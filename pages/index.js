import A from "../src/components/A";
import MainContainer from "../src/components/MainContainer";
import Head from "next/head";

const Index = () => {
	return (
		<MainContainer title={"Главная страница"} keywords={"main page"}>
			<div>
				<h1>Главная страница</h1>
			</div>
		</MainContainer>
	);
}

export default Index;
