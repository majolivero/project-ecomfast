import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsToMany,
    ForeignKey,
}from 'sequelize-typescript';
import { Cart } from './cart';
import { Product } from './product'

@Table({
    tableName : "productsCarts",
    timestamps : true,
})
export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id! : number;

    @Column({
        type : DataType.NUMBER,
        allowNull : false,
    })
    quantity! : string;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    cartId! : number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    productId! : number;
}