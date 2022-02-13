import axios from 'axios';

type props = {
	id: number;
	linkName: string;
	safeLink: string;
	edit: boolean;
	setEdit?: any;
};

export default function LinkListItem({ linkName, safeLink, edit, id }: props) {
	const deleteLink = () => {
		axios
			.post(`http://localhost:5001/api/users/deletelink/${id}`)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	return (
		<>
			{edit === false && (
				<a href={safeLink} target='_blank'>
					<li className='link-chip'>{linkName}</li>
				</a>
			)}
			{edit === true && (
				<a onClick={deleteLink} target='_blank'>
					<li className='link-chip'>{linkName + ' x'}</li>
				</a>
			)}
		</>
	);
}
