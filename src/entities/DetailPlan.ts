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

  @Column({ type: 'text', default: '없다' })
  planName: string;

  @Column({ type: 'boolean', default: false })
  allDay: boolean;

  @Column({ type: 'text', default: '없다' })
  startTime: string;

  @Column({ type: 'text', default: '없다' })
  endTime: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default DetailPlan;
