import express from 'express';
// import Sequelize from 'sequelize';
import routes from './routes';

const app = express();
// const sequelize = new Sequelize('brainfood', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

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

app.listen(3000, () => console.log('Listening on port 3000'));
