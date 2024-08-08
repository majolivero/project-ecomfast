import { Router } from 'express';
import OrderController from '../controllers/orderController';

export const orderRouter = Router();

//Creación de ordenes
orderRouter.post('/',OrderController.createOrder);

//Actualización de ordenes
orderRouter.put('/',OrderController.updateOrder);

//Eliminación de una orden
orderRouter.delete('/:id',OrderController.deleteOrder);

//Obtención de ordenes
orderRouter.get('/',OrderController.getAllOrders);

//Obtener todas la ordenes realizadas por ID de usuario
orderRouter.get('/order/:userId',OrderController.getOrdersByUserId);




