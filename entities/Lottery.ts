import {
  PrimaryKey,
  Entity,
  Property,
  Unique,
  ManyToOne,
} from '@mikro-orm/core'
import { Animal } from './index'
import { CustomBaseEntity } from './BaseEntity'
import { SoftDeletable } from 'mikro-orm-soft-delete'
import uuid4 from 'uuid4'

//CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
@SoftDeletable(() => Lottery, `deletedAt`, () => new Date())
@Entity()
@Unique({ properties: [`deletedAt`] })
export class Lottery extends CustomBaseEntity {
  @PrimaryKey({ type: `uuid`, defaultRaw: `uuid_generate_v4()` })
  id: string = uuid4()
  @Property()
  date!: Date
  @Property()
  dayOfWeek!: number
  //relationships
  @ManyToOne({ entity: () => Animal })
  animal!: Animal

  constructor() {
    super()
  }
}
