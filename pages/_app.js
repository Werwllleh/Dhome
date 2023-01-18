import '../pages/styles/global.css'
import Head from "next/head";
import MainContainer from "../src/components/MainContainer";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<MainContainer title={"Главная страница"} keywords={"main page"}>
				<Component {...pageProps} />
			</MainContainer>
		</>
	)
}