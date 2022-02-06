import LinkListItem from './LinkListItem';

const links = [
	'4chan.org/g/',
	'4chan.org/gd/',
	'4chan.org/gif/',
	'4chan.org/pol/',
	'mail.google.com',
	'reddit.com',
	'twitter.com',
	'youtube.com',
	'4chan.org/biz',
	'binance.com/en',
	'tradingview.com/chart',
	'creativereyne.ca',
	'developer.mozilla.org/en-US/docs/Web/JavaScript',
	'github.com/Alex-Reyne',
	'portal.saskpolytech.ca/student/Pages/default.aspx',
	'web-prep-help.lighthouselabs.ca/',
];

export default function LinkList() {
	const linkList = links.map(link => {
		const linkName = link.replace(/\..*$/g, '');
		const safeLink = `https://${link}`;
		return <LinkListItem key={link} linkName={linkName} safeLink={safeLink} />;
	});

	return <ul className='link-list'>{linkList}</ul>;
}
