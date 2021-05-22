import express, {Request, Response} from 'express'
import {getSignup, getLogin, signupPost, postLogin}  from '../controllers/authController'
const router = express.Router();

/**
 * sign up routes
 */
router.get('/signup',getSignup)
router.post('/signup', signupPost)

/**
 * login routes
 */
 router.get('/login', getLogin)
 router.post('/login', postLogin)





export default router;