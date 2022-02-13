const bcrypt = require('bcryptjs');
const db = require('../db');

interface result {
	rows: object[];
}

interface user {
	id: number;
	username: string;
	password: string;
	image_url: string;
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

const newUser = (user: user) => {
	const query1 = {
		text: `INSERT INTO users(username, password)
		VALUES ($1, $2)`,
		values: [user.username, user.password],
	};

	return db
		.query(query1)
		.then((result: result) => result.rows[0])
		.catch((err: object) => console.log(err));
};

const getUsers = () => {
	const query = {
		text: `SELECT * FROM users`,
	};

	return db
		.query(query)
		.then((result: result) => {
			return result.rows;
		})
		.catch((err: object) => console.log(err));
};

const updateUserImage = (user: user) => {
	const query = {
		text: `UPDATE users
		SET image_url = $1
		WHERE id = $2`,
		values: [user.image_url, user.id],
	};

	return db
		.query(query)
		.then((result: result) => {
			return result.rows;
		})
		.catch((err: object) => console.log(err));
};

export { getUserById, getUsers, newUser, updateUserImage };
