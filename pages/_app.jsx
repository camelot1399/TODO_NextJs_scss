import Head from 'next/head';
import style from '../assets/scss/app.scss';
import { Container } from '../components/common/container/Container';
import Header from '../components/header/Header';


export default function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<meta keywords="привет keywords"></meta>
				<meta descriptions="привет descriptions"></meta>
			</Head>
			<Header />
			<Component {...pageProps} />
		</Container>
	)
  }