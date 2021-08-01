const express = require('express');
const bodyParser = require('body-parser');
const { userRoutes, categoryRoutes, postRoutes } = require('./api');

const { errorMiddleware } = require('./middlewares');
const controllers = require('./controllers');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Listen port ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', controllers.login);
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/categories', categoryRoutes);

app.use(errorMiddleware);
