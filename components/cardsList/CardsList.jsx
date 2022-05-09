import Card from "../Card/Card";
import style from './CardsList.module.scss';

const CardsList = ({items}) => {
	return (
		<div className={style.list}>
			{
				!items ? (
					<div>Нет юзеров</div>
				) : (
					items.results.map(item => (
						<Card card={item} />
					))
				)
			}
		</div>
	);
};

export default CardsList;