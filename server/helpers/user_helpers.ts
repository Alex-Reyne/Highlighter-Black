const bcrypt = require('bcryptjs');

module.exports = db => {
	const getUser = (id: number) => {
		const query = {
			text: `SELECT * FROM users WHERE id = $1`,
			values: [id],
		};

		return db
			.query(query)
			.then((result: object) => result.rows[0])
			.catch((err: object) => console.log(err));
	};
};
