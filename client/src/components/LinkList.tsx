import LinkListItem from './LinkListItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface link {
	name: string;
	url: string;
}

interface res {
	rows: Array<{}>;
}

export default function LinkList() {
	const [links, setLinks] = useState([]);

	async function getLinks() {
		// console.log(links);

		await axios
			.get(`/api/users/1/links`)
			.then(res => {
				setLinks(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	useEffect(() => {
		getLinks();
	}, []);

	const linkList = links.map((link: link) => {
		const linkName = link.name;
		const safeLink = `https://${link.url}`;
		return (
			<LinkListItem key={link.url} linkName={linkName} safeLink={safeLink} />
		);
	});

	const newLink = () => {
		axios
			.post(`/api/users/newlink`, {
				name: `hello`,
				url: `alexreyne.me`,
				user_id: 1,
			})
			.then(res => {
				return getLinks();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<ul className='link-list'>
			{linkList}
			<button onClick={newLink}>hello</button>
		</ul>
	);
}
