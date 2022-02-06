import LinkListItem from './LinkListItem';

const links = [
	{
		name: 'google',
		url: 'google.ca',
	},
	{
		name: 'portfolio',
		url: 'alexreyne.me',
	},
	{
		name: 'github',
		url: 'github.com/alex-reyne',
	},
	{
		name: 'linkedin',
		url: 'linkedin.com/in/alexanderreyne',
	},
];

export default function LinkList() {
	const linkList = links.map(link => {
		const linkName = link.name;
		const safeLink = `https://${link.url}`;
		return (
			<LinkListItem key={link.url} linkName={linkName} safeLink={safeLink} />
		);
	});

	return <ul className='link-list'>{linkList}</ul>;
}
