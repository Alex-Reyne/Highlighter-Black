import { useState } from 'react';
import './App.scss';
import ContentBox from './components/ContentBox';

function App() {
	const [edit, setEdit] = useState(false);

	return (
		<div className='App'>
			<p id='edit' onClick={e => setEdit(true)}>
				Edit Links
			</p>
			<ContentBox edit={edit} setEdit={setEdit} />
		</div>
	);
}

export default App;
