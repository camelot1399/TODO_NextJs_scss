import style from './Card.module.scss';
import { IoHeartOutline } from "react-icons/io5";
import Link from 'next/link';

const Card = ({card, setLikes, likes}) => {
	const handleLike = (e) => {
		e.stopPropagation();
		const temp = [...likes];

		if (likes.includes(card.id)) {
			console.log('есть');
			const filtered = temp.filter(el => el !== card.id);
			setLikes(filtered);
			
		} else {
			console.log('нет');
			temp.push(card.id);
			setLikes(temp);
		}
	}

	return (
		
			<div className={style.card}>
				{!card?.image ? (
					<div>img</div>
				) : (
					<img className={style.img} src={card.image} alt="" />
				)}

				<div className={style.card__name}>
					{card.name}
				</div>

				{/*<Link href={`/user/${card.id}`}>
					<a >
						
					</a>
				</Link>*/}

				<div className={style.card__footer}>
					<div className={style.card__gender}>
						{card.gender}
					</div>
					<IoHeartOutline 
						size="20px" 
						onClick={(e) => handleLike(e)}
						className={[style.card__like, likes.includes(card.id) ? style.active : ''].join(' ')}
					/>
				</div>
				
				
			</div>
	);
};

export default Card;