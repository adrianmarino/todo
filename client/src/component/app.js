//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { NavBarComponent } from './navbar';
import { TodoListComponent } from './todolist';
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
  directives: [NavBarComponent, TodoListComponent],
  template: `
    <div class="container">
      <navbar title="TODOS" phase="Simple todo crud" icon="ok"></navbar>
      <div class="well well-lg">
        <todolist [list]="todos"></todolist>
      </div>
    </div>
  `
})
export class AppComponent {

  constructor(@Inject(TodoService) service) { 
    this.service = service;
    this.findAll();
  }

  findAll() { this.service.findAll(response => this.todos = response.json()); }

}
