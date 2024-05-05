import express from 'express';
import {json} from 'body-parser';
import { currentUserRouter } from './routers/current-user';
import { signInRouter } from './routers/signin';
import { signOutRouter } from './routers/signout';
import { signUpRouter } from './routers/signup';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());


app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorHandler);

app.listen('3000', () => {
    console.log('Listening port 3000 !!!!')
})



