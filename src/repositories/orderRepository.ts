import { injectable } from 'tsyringe';
import { Order } from '../models/order';

@injectable()
export default class ProductRepository {
    async findAll() {
        return await Order.findAll();
    }

    async create(order: Partial<Order>) { //Partial<User> permite que algunos campos falten o sean nulos
        return await Order.create(order);
    }

    async update(order: Partial<Order>){
        return await Order.update(order,{where:{order}});
    }

    async delete(id:number){
        return await Order.destroy({where:{id}});
    }

    async findByUserId(userId:number){
        return await Order.findAll({where:{userId}});
    }
}