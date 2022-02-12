import axios from 'axios';
import { useEffect, useState } from 'react';
import LinkListItem from './LinkListItem';
import { getLinks, newLink } from '../helpers/linksHelpers';

interface props {
	links: any;
	setLinks: any;
}
interface link {
	id: number;
	name: string;
	url: string;
	user_id: number;
}

export default function LinkList({ links, setLinks }: props) {
	useEffect(() => {
		getLinks(setLinks);
	}, []);

	const linkList = links.map((link: link) => {
		const { name, url, id } = link;
		const linkName = name;
		let safeLink = ``;
		url.includes('http')
			? (safeLink = `${url}`)
			: (safeLink = `https://${url}`);

		return <LinkListItem key={id} linkName={linkName} safeLink={safeLink} />;
	});

	return <ul className='link-list'>{linkList}</ul>;
}
