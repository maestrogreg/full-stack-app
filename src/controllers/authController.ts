import express, {Request, Response} from 'express'


const getSignup = async(req:Request, res:Response) =>{
    res.status(200).render('signup')
}

const getLogin = async(req:Request, res:Response) =>{
    res.status(200).render('login')
}

const signupPost = async(req:Request, res:Response) =>{
    res.status(200).json({message:"please sign up"})
}

const postLogin = async(req:Request, res:Response) =>{
    console.log(req.body);
    res.status(200).json({message: "please login in"})
}




export {getSignup, getLogin, signupPost, postLogin};