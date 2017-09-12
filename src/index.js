import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

// import Sequelize from 'sequelize';
import routes from './routes';


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

// parse application/json
app.use(bodyParser.json());

// enable cors
app.use(cors());

// add all routes
app.use('/', routes);

app.listen(3001, () => console.log('Listening on port 3001'));
