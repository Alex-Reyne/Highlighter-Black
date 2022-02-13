import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';
import { newLink } from '../helpers/linksHelpers';
import LinkForm from './LinkForm';

export default function ContentBox() {
	const [links, setLinks] = useState([] as any);
	const [add, setAdd] = useState(false);
	const [addForm, setAddForm] = useState({} as any);
	const [image, setImage] = useState('');

	async function getImage() {
		await axios
			.get('/api/users/1')
			.then(res => {
				const { image_url } = res.data;
				setImage(image_url);
			})
			.catch(err => console.log(err));
	}

	useEffect(() => {
		getImage();
	}, []);

	const { REACT_APP_IMGBB } = process.env;

	async function submitImage(e: any) {
		const data = new FormData();
		data.append('image', e.target.files[0]);

		return axios({
			method: 'post',
			url: `https://api.imgbb.com/1/upload?key=${REACT_APP_IMGBB}`,
			data: data,
		})
			.then(res => {
				const url = res.data.data.display_url;
				axios
					.post('/api/users/1/newimage', {
						id: 1,
						image_url: url,
					})
					.then(res2 => setImage(url));
			})
			.catch(e => console.log(e));
	}

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

					<input id='file-input' type='file' onChange={e => submitImage(e)} />
				</section>
			</div>
			<form method='get' id='search' action='https://duckduckgo.com/'>
				<input placeholder='duck duck go search...' />
			</form>
		</section>
	);
}
