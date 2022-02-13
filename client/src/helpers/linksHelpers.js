import axios from 'axios';

const getLinks = async set => {
	try {
		const res = await axios.get(`http://localhost:5001/api/users/1/links`);
		set(prev => [...res.data]);
	} catch (err) {
		console.log(err);
	}
};

const newLink = (set, addForm) => {
	axios
		.post(`http://localhost:5001/api/users/newlink`, {
			name: `${addForm.name}`,
			url: `${addForm.url}`,
			user_id: 1,
		})
		.then(res => {
			getLinks(set);
		})
		.catch(err => {
			console.log(err);
		});
};

export { getLinks, newLink };
