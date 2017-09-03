import express from 'express';
import bodyParser from 'body-parser';
// import Sequelize from 'sequelize';
import routes from './routes';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

// parse application/json
app.use(bodyParser.json());

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connected')
//   })
//   .catch(err => {
//     console.log('Database connection failed: ', err)
//   });

// app.get('/posts', (req, res) => {
//   res.send('Ja');
// });


app.use('/', routes);

app.listen(3001, () => console.log('Listening on port 3001'));
