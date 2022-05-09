import { useState } from "react";
import Card from "../Card/Card";
import style from './CardsList.module.scss';

const CardsList = ({items}) => {
	const [likes, setLikes] = useState([]);

	return (
		<div className={style.list}>
			{
				!items ? (
					<div>Нет юзеров</div>
				) : (
					items.results.map(item => (
						<Card key={item.id} card={item} setLikes={setLikes} likes={likes} />
					))
				)
			}
		</div>
	);
};

export default CardsList;