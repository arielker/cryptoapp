import express from 'express';
import usersRouter from './routers/users';
import path from 'path';
import config from 'config';

const server = express();
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/users', usersRouter);

const port = config.get<number>('app.port');
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})