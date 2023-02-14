import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const MainContainer = ({ children, title, keywords }) => {
	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
				<meta keywords={keywords}></meta>
				<title>{title}</title>
			</Head>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
}

export default MainContainer;
