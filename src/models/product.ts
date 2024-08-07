import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsToMany,
}from 'sequelize-typescript';
import { ProductCart } from './productCart';

@Table({
    tableName : "products",
    timestamps : true,
})
export class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id! : number;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    name! : string;

    @Column({
        type : DataType.FLOAT,
        allowNull : false,
    })
    price! : number;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    description! : string;

    @Column({
        type : DataType.INTEGER,
        allowNull : false,
    })
    stock! : number;

    @BelongsToMany(() => Product, () => ProductCart)
    productCart! : ProductCart[];
}