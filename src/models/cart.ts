import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsToMany,
    BelongsTo,
} from "sequelize-typescript";
import { User } from './user';
import { ProductCart } from './productCart';


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

    @BelongsToMany(() => Cart, () => ProductCart)
    productCart! : ProductCart[];

    @BelongsTo(() => User)
    user! : User;
}