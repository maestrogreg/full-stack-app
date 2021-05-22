import express, { Request, Response, NextFunction} from 'express'
import {connect} from './database/connection'
import createError, {HttpError}   from 'http-errors';
import path from 'path';
import logger   from 'morgan'
import authRoutes from './routes/authRoute'


const app = express();
app.use(logger('dev'));
app.use(express.json());

// middleware
app.use(express.static(path.join(__dirname, '../public')));

// view engine
app.set('view engine', 'ejs');

//set port and listen
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`server is listening on ${port}`))

// database connection
connect();
  

// routes
app.get('/', (req:Request, res:Response) => res.render('home'));
app.get('/smoothies', (req:Request, res:Response) => res.render('smoothies'));
app.use(authRoutes);