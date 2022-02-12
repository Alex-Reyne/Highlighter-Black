import { useState } from 'react';
import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';
import { newLink } from '../helpers/linksHelpers';
import LinkForm from './LinkForm';

export default function ContentBox() {
	const [links, setLinks] = useState([] as any);
	const [add, setAdd] = useState(false);
	const [addForm, setAddForm] = useState({} as any);

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
					<img src='images/2b.jpg' alt='2b-reynedrops-image' />
				</section>
			</div>
			<form method='get' id='search' action='https://duckduckgo.com/'>
				<input placeholder='duck duck go search...' />
			</form>
		</section>
	);
}
