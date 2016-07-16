//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Inject } from '@angular/core';

import { TodoConnector } from '../connectors/todo-connector';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Service
//-----------------------------------------------------------------------------
export class TodoService {
  create(text) { return this.connector.create({ text: text }); }
  all() { return this.connector.all(); }
  remove(id) { return this.connector.remove(id); }

  constructor(@Inject(TodoConnector) connector) { this.connector = connector; }
}
