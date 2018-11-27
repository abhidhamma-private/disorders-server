import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import DetailPlan from './DetailPlan';
import User from './User';
@Entity()
class Plan extends BaseEntity {
  @PrimaryGeneratedColumn()
  planId: number;

  @OneToMany(type => DetailPlan, detailPlan => detailPlan.plan, {
    nullable: true,
  })
  detailPlans: DetailPlan[];

  @ManyToOne(type => User, user => user.plans)
  user: User;

  @Column({ type: 'text', nullable: true })
  thumbnail: string;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ type: 'text', nullable: true })
  text: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default Plan;
