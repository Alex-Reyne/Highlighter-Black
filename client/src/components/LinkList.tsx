import axios from 'axios';
import { useEffect, useState } from 'react';
import LinkListItem from './LinkListItem';
import { getLinks, newLink } from '../helpers/linksHelpers';
interface link {
	id: number;
	name: string;
	url: string;
	user_id: number;
}

export default function LinkList() {
	const [links, setLinks] = useState([] as any);

	useEffect(() => {
		getLinks(setLinks);
	}, []);

	const linkList = links.map((link: link) => {
		const { name, url, id } = link;
		const linkName = name;
		const safeLink = `https://${url}`;
		return <LinkListItem key={id} linkName={linkName} safeLink={safeLink} />;
	});

	return (
		<ul className='link-list'>
			{linkList}
			<button
				onClick={e => {
					newLink(setLinks);
				}}
			>
				hello
			</button>
		</ul>
	);
}
