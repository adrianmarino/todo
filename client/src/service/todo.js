//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Http } from '@angular/http';
import { Inject } from '@angular/core';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Service
//-----------------------------------------------------------------------------
export class TodoService {

  constructor(@Inject(Http) http) { 
    this.baseApiUrl = 'http://localhost:8080/api/v1';
    this.http = http;
  }

  findAll(callback) {
    this.http.get(this.baseApiUrl + '/todos')
      .subscribe(
        callback,
        err => this.logError(err.text()),
        () => console.log('Find all todos complete')
      );
  }

}
