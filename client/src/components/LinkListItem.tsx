import axios from 'axios';
import { getLinks } from '../helpers/linksHelpers';

type props = {
	id: number;
	linkName: string;
	safeLink: string;
	edit: boolean;
	setEdit?: any;
	setLinks: any;
};

export default function LinkListItem({
	linkName,
	safeLink,
	edit,
	id,
	setLinks,
}: props) {
	const deleteLink = () => {
		axios
			.post(`http://localhost:5001/api/users/deletelink/${id}`)
			.then(res => getLinks(setLinks))
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
