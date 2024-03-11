import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../userRole.type";
@Entity({
  name: "user"
})
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: "varchar", length: 13, nullable: false })
  name: string;

  @Column({ type: "int", length: 3, nullable: false })
  age: number;

  @Column({ type: "varchar", length: 2, nullable: false })
  gender: string;

  @Column({ type: "varchar", length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", select: false, length: 13, nullable: false })
  password: string;

  @Column({ type: "varchar", length: 13, nullable: true })
  phoneNumber: string;

  @Column({ type: "enum", enum: Role, default: Role.User })
  @CreateDateColumn()
  createdAt: Date;
}
