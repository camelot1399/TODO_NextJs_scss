import style from '../assets/scss/app.scss';
import { Container } from '../components/common/container/Container';

export default function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	)
  }