import LinkListItem from './LinkListItem';

const links = [
	'google.ca',
	'alexreyne.me',
	'github.com/alex-reyne',
	'linkedin.com/in/alexanderreyne',
];

export default function LinkList() {
	const linkList = links.map(link => {
		const linkName = link.replace(/\..*$/g, '');
		const safeLink = `https://${link}`;
		return <LinkListItem key={link} linkName={linkName} safeLink={safeLink} />;
	});

	return <ul className='link-list'>{linkList}</ul>;
}
