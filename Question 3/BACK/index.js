const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/postgres'
);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

const connection = sequelize.createConnection({
  host: 'localhost',
  dialect: 'postgres',
  username: 'root',
  password: '****',
  database: 'db_name',
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/post', async (req, res) => {
  const { options } = await req.query;
  let isValid = false;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    if (option.toLowerCase().includues('calculus')) {
      isValid = true;
      break;
    }
  }
  try {
    if (isValid) {
      connection.query(
        `INSERT INTO posts (title, body) VALUES ('${req.query.title}', '${req.query.body}')`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');
});
s;
const server = app.listen(PORT, () => {
  connection.connect();
  console.log(`Listening on port ${server.address().PORT}`);
});

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

