const bcrypt = require('bcryptjs');
const db = require('../db');

interface result {
	rows: object[];
}

const getUserById = (id: number) => {
	const query = {
		text: `SELECT * FROM users WHERE id = $1`,
		values: [id],
	};

	return db
		.query(query)
		.then((result: result) => result.rows[0])
		.catch((err: object) => console.log(err));
};

const getUsers = () => {
	const query = {
		text: `SELECT * FROM users`,
	};

	return db
		.query(query)
		.then((result: result) => result.rows)
		.catch((err: object) => console.log(err));
};

export { getUserById, getUsers };
