import { Sequelize } from 'sequelize-typescript';
import { Product,User,Role,Cart,ProductCart,Order,Entities,Permissions} from '..models/';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'projectEcomfast',
    models: [Product,User,Role,Cart,ProductCart,Order,Entities,Permissions],
});

export default sequelize;