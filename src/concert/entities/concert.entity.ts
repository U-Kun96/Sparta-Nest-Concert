import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "src/reservation/entities/reservation.entity";
@Entity({
  name: "concert"
})
export class Concert {
  @PrimaryGeneratedColumn()
  concertId: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  content: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  artist: string;

  @Column({ type: "int", length: 7, nullable: false })
  price: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  location: string;

  @Column({ type: "varchar", length: 30, nullable: false })
  concertDay: string;

  @OneToMany(() => Reservation, (reservation) => reservation.concert, { nullable: false })
  reservations: Reservation[];
}
