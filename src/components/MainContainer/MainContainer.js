import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import s from './MainContainer.module.css';

const MainContainer = ({ children, title, keywords }) => {
	return (
		<div className={s.content}>
			<Head>
				<link rel="icon" type="image/x-icon" href="../../../pages/favicon.ico" />
				<meta keywords={keywords}></meta>
				<title>{title}</title>
			</Head>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
}

export default MainContainer;
