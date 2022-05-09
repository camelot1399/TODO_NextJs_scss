import CardsList from "../components/cardsList/CardsList";
import { API_GET_CHARACTER } from "../tools/api";

const Users = ({items}) => {
	
	return (
		<div>
			<CardsList items={items} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const response = await fetch(API_GET_CHARACTER);
	const items = await response.json();

	return {
		props: {items}
	}
}

export default Users;