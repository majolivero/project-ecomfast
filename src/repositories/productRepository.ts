import { injectable } from 'tsyringe';
import { Product } from '../models/product';

@injectable()
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async create(product: Partial<Product>) { //Partial<User> permite que algunos campos falten o sean nulos
        return await Product.create(product);
    }

    async update(product: Partial<Product>){
        return await Product.update(product,{where:{id: product.id}});
    }

    async delete(id:number){
        return await Product.destroy({where:{id}});
    }

    async findByOrderId(orderId:number){
        return await Product.findAll({where:{orderId}});
    }
}