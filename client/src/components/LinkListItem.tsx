type props = {
	linkName: string;
	safeLink: string;
};

export default function LinkListItem({ linkName, safeLink }: props) {
	return (
		<a href={safeLink} target='_blank'>
			{linkName}
		</a>
	);
}
