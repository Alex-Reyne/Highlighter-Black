import { useState } from 'react';
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

	let imgURL: string = '';

	async function submitImage(e: any) {
		const data = new FormData();
		data.append('image', e.target.files);
		const config = {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
				Authorization: `Client-ID ${process.env.IMGUR_ID}`,
			},
		};

		await axios
			.post(`https://api.imgur.com/3/image`, data, config)
			.then(res => {
				console.log(data);
				console.log(res);
				// imgURL = res.data.link;
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
						<img src={imgURL} alt='2b-reynedrops-image' />
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
