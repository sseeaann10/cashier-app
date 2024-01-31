import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Product } from './product.entity';
import { Order, OrderStatus } from './order.entity';

export enum TypeTable {
  square_2 = 'square_dining_table_2',
  square_4 = 'square_dining_table_4',
  rectangle_6 = 'rectangle_dining_table_6',
  rectangle_8 = 'rectangle_dining_table_8',
  round_4 = 'round_dining_table_4',
}
export interface PositionSchemaInterface {
  posX: number;
  posY: number;
}

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  posX: number;

  @Column()
  posY: number;

  position: PositionSchemaInterface;

  orders: Order[] = [];

  order: Order = null;

  constructor(
    id: number = null,
    type: TypeTable = TypeTable.square_2,
    x = 0,
    y = 0,
  ) {
    this.id = id;
    this.type = type;
    this.posX = x;
    this.posY = y;
  }

  getCurrentOrder(): Order {
    if (this.order == null)
      this.order = this.orders.find((el) => el.status == OrderStatus.running);
    return this.order;
  }

  public addProductOrder(product: Product, quantity: number) {
    if (this.order == null) {
      this.order = new Order();
      this.order.status = OrderStatus.running;
      this.order.table = this;
    }
    this.getCurrentOrder().table = this;
    // we clone the object to prevent any change of the product parameter pass by referencee
    const productClone = Object.assign(new Product(), product);
    productClone.quantity = quantity;
    this.getCurrentOrder()?.addProduct(productClone, quantity);
  }

  public close() {
    this.order = null;
  }
}