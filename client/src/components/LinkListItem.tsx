type props = {
	linkName: string;
	safeLink: string;
};

export default function LinkListItem({ linkName, safeLink }: props) {
	return (
		<li className='link-chip'>
			<a href={safeLink} target='_blank'>
				{linkName}
			</a>
		</li>
	);
}
