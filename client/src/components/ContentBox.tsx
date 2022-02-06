import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';

export default function ContentBox() {
	return (
		<section className='main-content'>
			<Hello />
			<div className='center-content'>
				<section className='list-box'>
					<h1>ケツ &gt;</h1>
					<div className='lists'>
						<LinkList />
					</div>
				</section>
				<section>
					<img src='images/2b.jpg' alt='2b-reynedrops-image' />
				</section>
			</div>
			<form method='get' id='search' action='https://duckduckgo.com/'>
				<input placeholder='duck duck go search' />
			</form>
		</section>
	);
}
