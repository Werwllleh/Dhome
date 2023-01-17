import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, title, keywords }) => {
	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="public/favicon.ico" />
				<meta keywords={"next course, nextJS " + keywords}></meta>
				<title>{title}</title>
			</Head>
			<div>
				<A href={'/'} text={'Главная'} />
			</div>
			<div>{children}</div>
		</>
	);
}

export default MainContainer;
