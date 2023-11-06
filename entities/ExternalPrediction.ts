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
@SoftDeletable(() => ExternalPrediction, `deletedAt`, () => new Date())
@Entity()
@Unique({ properties: [`deletedAt`] })
export class ExternalPrediction extends CustomBaseEntity {
  @PrimaryKey({ type: `uuid`, defaultRaw: `uuid_generate_v4()` })
  id: string = uuid4()
  @Property()
  date!: Date
  @Property()
  dayOfWeek!: number
  @Property({ nullable: true, default: null })
  success?: boolean
  @Property({ nullable: true, default: null })
  source?: string
  //relationships
  @ManyToOne({ entity: () => Animal })
  animal!: Animal

  constructor() {
    super()
  }
}
