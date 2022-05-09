import style from './style.module.scss';

export const Container = ({children}) => {
	return (
		<div className={style['main-container']}>
			{children}
		</div>
	);
};