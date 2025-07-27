import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { CarModel } from "../cars/car.model";

@Table({
  tableName: "car_images",
  timestamps: false,
})
export class ImageModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => CarModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  car_id!: number;

  @ForeignKey(() => ImageModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  image_id!: number;
}
