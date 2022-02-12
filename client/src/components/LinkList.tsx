import LinkListItem from './LinkListItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface link {
	name: string;
	url: string;
}

export default function LinkList() {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		async function getLinks() {
			await axios
				.get(`/api/users/1/links`)
				.then(res => {
					setLinks(res.data);
				})
				.catch(err => {
					console.log(err);
				});
		}

		getLinks();
	}, [links]);

	const linkList = links.map((link: link) => {
		const linkName = link.name;
		const safeLink = `https://${link.url}`;
		return (
			<LinkListItem key={link.url} linkName={linkName} safeLink={safeLink} />
		);
	});

	return <ul className='link-list'>{linkList}</ul>;
}
