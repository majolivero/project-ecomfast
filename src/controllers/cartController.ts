import { Request,Response } from 'express';
import { container } from 'tsyringe';
import CartService from '../services/cartService';


export default class OrderController {
    static async createCart(req:Request, res:Response){
        const cartService = container.resolve(CartService);
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    }

    static async deleteCart(req:Request, res:Response){
        const cartService = container.resolve(CartService);
        const cart = await cartService.deleteCart(parseInt(req.params.id));
        res.status(200).json(cart);
    }

    static async updateCart(req:Request, res:Response){
        const cartService = container.resolve(CartService);
        const cart = await cartService.updateCart(req.body);
        res.status(200).json(cart);
    }
}

