//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { NavBarComponent } from './navbar';
import { TodoService } from '../service/todo';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'app',
  directives: [NavBarComponent],
  template: `
    <div class="container">
      <navbar title="TODOS" phase="Simple todo crud" icon="glyphicon glyphicon-ok"></navbar>
      <div class="jumbotron">
        <button (click)="findAll()">Get All</button>
        <div>
          {{ list }}
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor(@Inject(TodoService) service) { 
    this.service = service;
  }

  findAll() {
    this.service.findAll(response => this.list = response.text());
  }
}
