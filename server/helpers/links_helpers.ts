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
      return result.rows;
    })
    .catch((err: object) => console.log(err));
};

const deleteLink = (id: number) => {
  console.log(id);
  const query = {
    text: `DELETE FROM links
		WHERE id = $1
		RETURNING *`,
    values: [id],
  };

  return db
    .query(query)
    .then((result: result) => {
      return result.rows;
    })
    .catch((err: object) => console.log(err));
};

const resetLinks = (id: number) => {
  const q1 = {
    text: `DELETE FROM links
		WHERE user_id = $1
		RETURNING *`,
    values: [id],
  };

  const q2 = {
    text: `INSERT INTO links (name, url, user_id) VALUES
		('Portfolio', 'alexreyne.me', $1),
		('GitHub', 'github.com/alex-reyne', $1),
		('LinkedIn', 'linkedin.com/in/alexanderreyne', $1),
		('Resume', 'https://drive.google.com/file/d/1rvrY8h93EFONuJnC_6eURYJscZSnOp1V/view', $1)
		`,
    values: [id],
  };

  return db
    .query(q1)
    .then((result: result) => {
      db.query(q2);
      return result.rows;
    })
    .catch((err: object) => console.log(err));
};

export { getLinks, addLink, deleteLink, resetLinks };
