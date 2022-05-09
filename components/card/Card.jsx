import style from './Card.module.scss';
import { IoHeartOutline } from "react-icons/io5";

const Card = ({card}) => {
	return (
		<div className={style.card}>
			<img className={style.img} src={card.image} alt="" />
			
			<div className={style.card__name}>
				{card.name}
			</div>

			<div className={style.card__footer}>
				<div>
					{card.gender}
				</div>
				<IoHeartOutline size="20px" />
			</div>
		</div>
	);
};

export default Card;