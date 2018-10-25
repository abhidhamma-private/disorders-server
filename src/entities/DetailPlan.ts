import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Plan from './Plan';

@Entity()
class DetailPlan extends BaseEntity {
  @PrimaryGeneratedColumn()
  detailPlanId: number;

  @ManyToOne(type => Plan, plan => plan.detailPlans)
  plan: Plan;

  @Column({ type: 'text' })
  planName: string;

  @Column({ type: 'boolean', default: false })
  successCheck: boolean;

  @Column({ type: 'text' })
  startTime: string;

  @Column({ type: 'text' })
  endTime: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'text', nullable: true })
  text: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default DetailPlan;
