import {
  PrimaryKey,
  Entity,
  Property,
  Unique,
  OneToMany,
  Collection,
} from '@mikro-orm/core'
import { CustomBaseEntity } from './BaseEntity'
import { SoftDeletable } from 'mikro-orm-soft-delete'
import { Lottery, Prediction } from './index'
import uuid4 from 'uuid4'
@SoftDeletable(() => Animal, `deletedAt`, () => new Date())
@Entity()
@Unique({ properties: [`deletedAt`, `code`] })
export class Animal extends CustomBaseEntity {
  @PrimaryKey({ type: `uuid`, defaultRaw: `uuid_generate_v4()` })
  id: string = uuid4()
  @Property()
  code!: string
  @Property()
  name!: string

  @OneToMany(() => Lottery, (lottery) => lottery.animal)
  lotteries = new Collection<Lottery>(this)
  @OneToMany(() => Prediction, (prediction) => prediction.animal)
  predictions = new Collection<Prediction>(this)

  constructor() {
    super()
  }
}
