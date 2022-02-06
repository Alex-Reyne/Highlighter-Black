require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import Router from './routes';

const PORT = process.env.PORT || 3001;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(Router);

app.use(
	'/api-docs',
	swaggerUi.serve,
	swaggerUi.setup(undefined, {
		swaggerOptions: {
			url: '/swagger.json',
		},
	})
);

app.listen(PORT, () => {
	console.log('Server is running on port', PORT);
});
