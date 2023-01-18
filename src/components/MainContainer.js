import Head from "next/head";

const MainContainer = ({ children, title, keywords }) => {
	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="public/favicon.ico" />
				<meta keywords={"next course, nextJS " + keywords}></meta>
				<title>{title}</title>
			</Head>
			<div>{children}</div>
		</>
	);
}

export default MainContainer;
