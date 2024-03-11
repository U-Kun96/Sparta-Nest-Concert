import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "point"
})
export class Point {
  @PrimaryGeneratedColumn()
  pointId: number;

  @Column({ type: "int", length: 20, nullable: false })
  balance: number;

  @OneToMany(() => User, (user) => user.point, { nullable: false })
  users: User[];
}
