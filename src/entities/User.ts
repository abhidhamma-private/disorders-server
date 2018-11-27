import bcrypt from 'bcrypt';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  Unique,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import Plan from './Plan';

const BCRYPT_ROUNDS = 10;

@Unique(['nickName'])
@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @OneToMany(type => Plan, Plan => Plan.user, {
    nullable: true,
  })
  plans: Plan[];

  @Column({ type: 'text', nullable: true })
  nickName: string | null;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  avatar: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  public comparePassword(password: string): Promise<boolean> {
    console.log('비교');

    console.log(this.password);
    console.log(password);

    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }
}
export default User;
