interface result {
	rows: object[];
}

module.exports = (db: any) => {
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

	return {
		getLinks,
	};
};
