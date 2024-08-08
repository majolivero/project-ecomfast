import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
    HasMany,
}from 'sequelize-typescript';
import { Role } from './role';
import { Cart } from './cart';
import { Order } from './order';

@Table({
    tableName : "users",
    timestamps : true,
})
export class User extends Model {
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
    email! : string;

    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    password! : string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId! : number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    cartId! : number;

    @BelongsTo(() => Role)
    role! : Role;

    @BelongsTo(() => Cart)
    cart! : Cart;

    @HasMany(() => Order)
    orders! : Order[];

}