import {
  Entity,
  model,
  property,
} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
  })
  userId?: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
