import { userServices } from "../services/userServices";
import { Request, Response, NextFunction } from "express";
import { User } from "@my-monorepo/types";


const fetchUsersController = async (req: Request, res : Response) => {
    try {
        const data = await userServices.fetchUsers()
        
        res.status(200).json({
            data : data,
            message: 'Fetching all user data is successfully ',
        })
        return
        
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        })
        return
    }
}

const fetchUserController = async (req: Request, res : Response) => {
    try {
        const user = (req as any).user
        
        const emailExist: any = await userServices.emailExistChecked(user.email);
        
        if( !emailExist ){
            res.status(400).json({
                message: 'token not authoritation',
            })
            return
        }
        
        const data = await userServices.fetchUser(emailExist.id)

        res.status(200).json({
            data : data,
            message: 'Fetching user is successfully ',
        })
        return

    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        })
        return
    }
}

const createUserController = async (req: Request, res : Response) => {
    try {

        const payload = (req as any ).user


        const data = await userServices.createUser(payload)
        

        res.status(201).json({
            data : data,
            message: 'Create data user is successfully ',
        })
        return

    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        })
        return
    }
}

const updateUsersController = async (req: Request, res : Response) => {
    try {
        const id = req.params.id 
        const payload: Partial<User> = req.body

        const data = await userServices.updateUser(id,payload)
        
        res.status(201).json({
            data : data,
            message: 'Update user data is successfully ',
        })
        return

        
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        })
        return
    }
}

const createValidation = async (req: Request, res : Response, next : NextFunction ) => {
    try {
        const {  name, address , email , password  } = req.body;
        
        if(!name || !email || !password ){
            res.status(400).json({
                message : 'Please check your input '
            })
            return 
        }
        
        const emailExist: any = await userServices.emailExistChecked(email);


        if(emailExist){
            res.status(400).json({
                message : 'Email is Exist, please repeat your input'
            })
            return
        }


        (req as any ).user = {
            name : name,
            address : address,
            email : email ,
        };

        next();

    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        })
        return 
    }
}




export const userController = {
    fetchUserController,
    fetchUsersController,
    updateUsersController,
    createUserController,
    createValidation,
}