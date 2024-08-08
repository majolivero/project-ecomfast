import { injectable } from 'tsyringe';
import { Cart } from '../models/cart';

@injectable()
export default class CartRepository {
    async create(cart: Partial<Cart>) { //Partial<User> permite que algunos campos falten o sean nulos
        return await Cart.create(cart);
    }

    async delete(id:number){
        return await Cart.destroy({where:{id}});
    }

    async update(cart: Partial<Cart>){
        return await Cart.update(cart,{where:{cart}});
    }
}

