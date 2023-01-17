import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, title, keywords }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta keywords={"next course, nextJS " + keywords}></meta>
				<title>{title}</title>
			</Head>
			<div>
				<A href={'/'} text={'Главная'} />
				<A href={'/users'} text={'Пользователи'} />
			</div>
			<div>{children}</div>
		</>
	);
}

export default MainContainer;
