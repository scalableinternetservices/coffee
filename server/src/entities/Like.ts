import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Cafe } from './Cafe'
import { User } from './User'

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // NOTE: ManyToOne annotation allows us to omit @JoinColumn.
  @ManyToOne(() => User, user => user.likes)
  user: User

  @ManyToOne(() => Cafe, cafe => cafe.likes)
  cafe: Cafe
}
