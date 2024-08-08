import { injectable } from 'tsyringe';
import { User } from '../models/user';

@injectable()
export default class UserRepository {
    async findAll() {
        return await User.findAll();
    }
    
    async create(user: Partial<User>) { //Partial<User> permite que algunos campos falten o sean nulos
        return await User.create(user);
    }

    async delete(id:number){
        return await User.destroy({where:{id}});
    }

    async update(user: Partial<User>){
        return await User.update(user,{where:{id: user.id}});
    }

    async findByEmail(email:string){
        return await User.findOne({where:{email}});
    }

}