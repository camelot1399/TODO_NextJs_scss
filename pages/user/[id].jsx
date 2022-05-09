import { useRouter } from "next/router"

const User = () => {
	const {query} = useRouter();

	return (
		<div>
			<h1>показываю {query.id}</h1>
		</div>
	);
};

export default User;