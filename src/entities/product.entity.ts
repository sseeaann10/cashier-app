import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Category {
  drinks = 1,
  alcools = 2,
  starters = 3,
  dishes = 4,
  deserts = 5,
}
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  pic: string;
  @Column()
  category: number;
  @Column({ default: 1 })
  quantity: number = 0;
  @Column({ default: 0.0 })
  total_price: number;

  constructor(name = '', price = 0, pic = '', category = 1) {
    // this.id = Date.now() + Math.floor(Math.random() * 10000);
    this.name = name;
    this.price = price;
    this.pic = pic;
    this.category = category;
  }

  public refresh() {
    this.total_price = this.quantity * this.price;
  }
}
