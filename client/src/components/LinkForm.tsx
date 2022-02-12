import '../styles/LinkForm.scss';

interface props {
	addForm: any;
	setAdd: any;
	newLink: any;
	setLinks: any;
	setAddForm: any;
}

export default function LinkForm({
	addForm,
	newLink,
	setAdd,
	setLinks,
	setAddForm,
}: props) {
	return (
		<>
			<form className='linkform'>
				<div>
					<input
						type='text'
						value={addForm.name}
						placeholder='name'
						onChange={e => {
							setAddForm((prev: object) =>
								prev
									? { ...prev, name: e.target.value }
									: { name: e.target.value }
							);
						}}
					/>
					<input
						type='text'
						value={addForm.url}
						placeholder='url'
						onChange={e => {
							setAddForm((prev: object) =>
								prev
									? { ...prev, url: e.target.value }
									: { url: e.target.value }
							);
						}}
					/>
				</div>
				<button
					onClick={e => {
						newLink(setLinks, addForm);
						setAdd(false);
					}}
				>
					Add Link
				</button>
				<button
					onClick={e => {
						setAddForm({});
						setAdd(false);
					}}
				>
					Cancel
				</button>
			</form>
		</>
	);
}
