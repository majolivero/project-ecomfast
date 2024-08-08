import { Request,Response } from 'express';
import { container } from 'tsyringe';
import UserService from '../services/userService';

export default class UserController {
    static async getAllUsers(_:Request, res:Response){ //Este es el controlador que maneja la solicitud de obtener todos los usuarios
        const userService = container.resolve(UserService); //Se resuelve el servicio UserService. Utiliza el contenedor para resolver una instancia del userService. Inyección de dependencias
        const users = await userService.getAllUsers();
        res.json(users);
    }

    static async createUser(req:Request, res:Response){
        try{
            const userService = container.resolve(UserService);
            const user = await userService.createUser(req.body);
            res.status(201).json({
                message:"Usuario creado exitosamente",
                data:user,
            });
        }catch(error:unknown){
            if(error instanceof Error){
                if(error.name === "ValidationError"){
                    res.status(400).json({
                        error: "Error de validación",
                        message: error.message,
                    });
                }else{
                    res.status(500).json({
                        error: "Error interno en el servidor",
                        message: error.message,
                    });
                }
            }
        }
    }

    static async updateUser(req:Request, res:Response){
        const userService = container.resolve(UserService);
        const user = await userService.updateUser(req.body);
        res.status(200).json(user);
    }

    static async deleteUser(req:Request, res:Response){
        const userService = container.resolve(UserService);
        const user = await userService.deleteUser(parseInt(req.params.id));
        res.status(200).json(user);
    }
}