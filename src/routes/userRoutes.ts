import { Router } from 'express';
import UserController from '../controllers/userController';

export const userRouter = Router();

//Creación de usuarios
userRouter.get('/',UserController.createUser);

//Eliminación de usuarios
userRouter.delete('/:id',UserController.deleteUser);

//Actualización de usuarios
userRouter.put('/',UserController.updateUser);

//Obtención de todos los usuarios
userRouter.get('/',UserController.getAllUsers);