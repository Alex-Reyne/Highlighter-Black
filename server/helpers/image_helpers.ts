const db = require('../db');

interface result {
	rows: object[];
}
interface image {
	id: number;
	filename: string;
	filepath: string;
	mimetype: string;
	size: number;
	user_id: number;
}

const getImage = (user_id: number) => {
	const query = {
		text: `SELECT * FROM images WHERE user_id = $1`,
		values: [user_id],
	};

	return db
		.query(query)
		.then((result: result) => result.rows)
		.catch((err: object) => console.log(err));
};

const addImage = (image: image) => {
	const query = {
		text: `INSERT INTO images(filename, filepath, mimetype, size, user_id)
		VALUES($1, $2, $3, $4, $5)
		RETURNING *`,
		values: [
			image.filename,
			image.filepath,
			image.mimetype,
			image.size,
			image.user_id,
		],
	};

	return db
		.query(query)
		.then((result: result) => {
			return result.rows;
		})
		.catch((err: object) => console.log(err));
};

export { getImage, addImage };
