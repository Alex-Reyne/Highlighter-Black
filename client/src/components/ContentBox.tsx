import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';

export default function ContentBox() {
	return (
		<section className='main-content'>
			<Hello />
			<div className='center-content'>
				<section className='list-box'>
					<h1>Hello</h1>
					<div className='lists'>
						<LinkList />
						<LinkList />
						<LinkList />
						<LinkList />
					</div>
				</section>
				<section>
					<img src='images/2b.jpg' alt='2b-reynedrops-image' />
				</section>
			</div>
			<input />
		</section>
	);
}
