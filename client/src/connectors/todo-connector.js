//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Inject } from '@angular/core';
import { Http } from '@angular/http';

import { JSonConnector } from './json-connector';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Todo connector
//-----------------------------------------------------------------------------
export class TodoConnector {

  create(text) { return this.connector.post('/todos', text); }

  all() { return this.connector.get('/todos'); }

  remove(id) { return this.connector.delete('/todos/' + id); }

  handleError(error) {
    let message = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.warn(message);
  }

  constructor(@Inject(Http) http) {
    this.connector = new JSonConnector(http, 'http://localhost:8080/api/v1', this.handleError);
  }
}
