import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Concert } from "src/concert/entities/concert.entity";
@Entity({
  name: "reservation"
})
export class Reservation {
  @PrimaryGeneratedColumn()
  reservationId: number;

  @Column({ type: "varchar", length: 20, nullable: false })
  reservationDay: string;

  @ManyToOne(() => User, (user) => user.reservations, { nullable: false })
  user: User;

  @ManyToOne(() => Concert, (concert) => concert.reservations, { nullable: false })
  concert: Concert;
}
