const pg = require('pg');
require('dotenv').config();

const initConnectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const initClient = new pg.Client({
	connectionString: initConnectionString || process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});

console.log(`Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}`);
initClient.connect();

module.exports = initClient;
