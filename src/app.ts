// import { session } from 'passport';
import express from 'express';
import usersRouter from './routers/users';
import path from 'path';
import config from 'config';
import errorHandler from './middlewares/error/error-handler';
import session from 'express-session';
import auth from '../src/middlewares/github-auth'

const server = express();

// views setup
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

server.use(auth.initialize())
server.use()

// general middlewares
server.use(express.urlencoded())

// routing
server.use('/users', usersRouter);

// error middlewares
server.use(errorHandler);

const port = config.get<number>('app.port');
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})