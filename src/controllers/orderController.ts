import { Request,Response } from 'express';
import { container } from 'tsyringe';
import OrderService from '../services/orderService';

export default class OrderController {
    static async createOrder(req:Request, res:Response){
        const orderService = container.resolve(OrderService);
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    }

    static async updateOrder(req:Request, res:Response){
        const orderService = container.resolve(OrderService);
        const order = await orderService.updateOrder(req.body);
        res.status(200).json(order);
    }

    static async deleteOrder(req:Request, res:Response){
        const orderService = container.resolve(OrderService);
        const order = await orderService.deleteOrder(parseInt(req.params.id));
        res.status(200).json(order);
    }

    static async getAllOrders(_:Request, res:Response){
        const orderService = container.resolve(OrderService); 
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }

    static async getOrdersByUserId(req: Request, res: Response) {
        const orderService = container.resolve(OrderService);
        const orders = await orderService.getOrdersByUserId(parseInt(req.params.userId));
        res.json(orders); //Envía la lista de productos encontrados como una respuesta JSON
    }

}