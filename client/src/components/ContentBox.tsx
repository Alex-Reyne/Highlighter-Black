import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';
import { newLink } from '../helpers/linksHelpers';
import { getImage, submitImage } from '../helpers/imageHelpers';
import LinkForm from './LinkForm';

export default function ContentBox() {
	const [links, setLinks] = useState([] as any);
	const [add, setAdd] = useState(false);
	const [addForm, setAddForm] = useState({} as any);
	const [image, setImage] = useState('');

	useEffect(() => {
		getImage(setImage);
	}, []);

	const { REACT_APP_IMGBB } = process.env;

	return (
		<section className='main-content'>
			<Hello />
			<div className='center-content'>
				<section className='list-box'>
					<h1>ケツ &gt;</h1>
					<div className='lists'>
						<LinkList links={links} setLinks={setLinks} />
					</div>
					{add === false && (
						<button
							onClick={e => {
								setAdd(true);
							}}
						>
							New Link
						</button>
					)}
					{add === true && (
						<LinkForm
							addForm={addForm}
							setAdd={setAdd}
							newLink={newLink}
							setLinks={setLinks}
							setAddForm={setAddForm}
						/>
					)}
				</section>
				<section>
					<label htmlFor='file-input'>
						<img id='img' src={image} alt='user_image' />
					</label>

					<input
						id='file-input'
						type='file'
						onChange={e => submitImage(e, setImage, REACT_APP_IMGBB)}
					/>
				</section>
			</div>
			<form method='get' id='search' action='https://duckduckgo.com/'>
				<input placeholder='duck duck go search...' />
			</form>
		</section>
	);
}
