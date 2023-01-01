import {
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';

import {Todo} from './todo.model';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: 'example@example.com',
  })
  email?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @hasMany(() => Todo)
  todos: Todo[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
