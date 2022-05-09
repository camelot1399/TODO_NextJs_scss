import { useEffect, useState } from 'react';
import style from './Header.module.scss';

const Header = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<div className={style.header}>
			<div>
				logo
			</div>
			<div>
				<button onClick={() => handleTheme()}>изменить цвет</button>
			</div>
		</div>
	);
};

export default Header;