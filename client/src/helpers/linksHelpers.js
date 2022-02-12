import axios from 'axios';

const getLinks = async set => {
	try {
		const res = await axios.get(`/api/users/1/links`);
		set(prev => [...res.data]);
	} catch (err) {
		console.log(err);
	}
};

const newLink = (set, addForm) => {
	axios
		.post(`/api/users/newlink`, {
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
