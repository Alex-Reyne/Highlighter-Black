const db = require('../db');
interface result {
	rows: object[];
}
interface link {
	name: string;
	url: string;
	user_id: number;
}

const getLinks = (id: number) => {
	const query = {
		text: `SELECT * FROM links WHERE user_id = $1`,
		values: [id],
	};

	return db
		.query(query)
		.then((result: result) => result.rows)
		.catch((err: object) => console.log(err));
};

const addLink = (link: link) => {
	const query = {
		text: `INSERT INTO links(name, url, user_id)
		VALUES($1, $2, $3)
		RETURNING *`,
		values: [link.name, link.url, link.user_id],
	};

	return db
		.query(query)
		.then((result: result) => {
			return result;
		})
		.catch((err: object) => console.log(err));
};

export { getLinks, addLink };
