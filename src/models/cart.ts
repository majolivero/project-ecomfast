import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsToMany,
} from "sequelize-typescript";
import { User } from './user';
import { ProductCart } from './productCart';
import { Product } from './product';

@Table({
    tableName : "carts",
    timestamps: true,
})
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id! : number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull : false,
    })
    userId! : number;

    @BelongsToMany(() => ProductCart, () => Product)
    product! : Product[];
}