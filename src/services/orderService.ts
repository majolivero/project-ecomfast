import OrderRepository from "../repositories/orderRepository"; 
import { injectable, inject } from "tsyringe"; 
import { Order } from "../models/order"; 

@injectable()
export default class OrderService {
    constructor(@inject(OrderRepository) private orderRepository: OrderRepository) {}

    async createOrder(order:Order) { 
        return await this.orderRepository.create(order); 
    }

    async updateOrder(order:Order){
        return await this.orderRepository.put(order);
    }

    async deleteOrder(id:number){
        return await this.orderRepository.delete(id);
    }

    async getAllOrders() { 
        return await this.orderRepository.findAll(); 
    }

    async getOrdersByUserId(userId:number){
        return await this.orderRepository.findByUserId(userId);
    }
}