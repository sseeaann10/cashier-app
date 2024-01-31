// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Product } from './product.entity';
// enum CategoryType {
//     drinks = 1,
//     alcools = 2,
//     starters = 3,
//     dishes = 4,
//     deserts = 5,
// }

// @Entity()
// export class Category {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   // Define the relationship with Product entity
//   @OneToMany(() => Product, product => product.category)
//   products: Product[];
// }